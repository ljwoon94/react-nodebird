const express = require('express');
const multer = require('multer');
//프론트에서 오는 멀티파트를 처리함.
const path = require('path');
//path를 통해 업로드 된 파일 확장자를 빼올 수 있다.
const fs = require('fs');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const { Post, Image, Comment, User, Hashtag } = require('../models');
const {isLoggedIn} = require('./middlewares');

const router = express.Router();

try {
    fs.accessSync('uploads');
    //uploads 폴더가 없으면 오류
} catch (error) {
    console.log('uploads 폴더가 없음으로 자동 생성됩니다.');
    fs.mkdirSync('uploads');
}

AWS.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region:'ap-northeast-2',
});
const upload = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: 'jeongwoon-sns',
        key(req, file, cb) {
            cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
        }
    // storage: multer.diskStorage({
    //     destination(req, file, done){
    //         done(null,'uploads');
    //     },
    //     filename(req,file,done){// 그림.jpg
    //         const ext = path.extname(file.originalname); // 확장자 추출(.jpg)
    //         const basename = path.basename(file.originalname,ext); // 그림
    //         done(null, basename + '_' +new Date().getTime()+ ext); // 그림210318.jpg
    //     },
    }),
    limits: {fileSize: 20 * 1024 * 1024 }, //20mb
    //diskStorage는 하드에 저장 나중에 아마존 웹 서비스에다 할꺼
});

router.post('/', isLoggedIn, upload.none(), async (req,res,next)=>{ //POST /post
    try {
        const hashtags = req.body.content.match(/#[^\s#]+/g);
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        if (hashtags) {
            const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
                where: { name: tag.slice(1).toLowerCase() },
            }))); // [[노드, true], [리액트, true]]
            await post.addHashtags(result.map((v) => v[0]));
        }
        //findOrCreate 있으면 쓰고 없으면 등록
        if(req.body.image){
            if(Array.isArray(req.body.image)){//이[미지를 여러개 올리면 image: []
                const images = await Promise.all(req.body.image.map((image)=>Image.create({src:image})));
                //db에 파일 주소만 갖는다.
                await post.addImages(images);
            } else{ // 이미지를 하나만 올리면 배열이 아닌 image: 그림.jpg
                const image = await Image.create({src: req.body.image});
                await post.addImages(image);
            }
        }
        const fullPost =await Post.findOne({
            where:{id:post.id},
            include:[{
                model: Image,
            }, {
                model: Comment,
                include:[{
                    model:User, //댓글 작성자
                    attributes:['id','nickname'],
                }],
            }, { 
                model: User, //게시글 작성자
                attributes:['id','nickname'],
            }, {
                model:User, //좋아요 누른 사람
                as: 'Likers',
                attributes:['id'],
            }]
        })
        res.status(201).json(fullPost);
    } catch (error) {
        console.error(error);
        next(error);   
    }
    
});

router.post('/images', isLoggedIn, upload.array('image') ,async (req,res,next) => { //POST /post/images
    console.log(req.files);
    res.json(req.files.map((v)=>v.location));
});

router.post('/:postId/retweet', isLoggedIn,async (req,res,next)=>{ //POST /post/comment
    try {
        const post = await Post.findOne({
            where: {id: req.params.postId},
            include: [{
                model: Post,
                as: 'Retweet',
            }],
        });
        if (!post){
            return res.status(403).send('존재하지 않는 게시글 입니다.');
        }
        if(req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)){
            return res.status(403).send('본인의 글을 리트윗 할 수 없습니다.');
        }
        const retweetTargetId = post.RetweetId || post.id;
        const exPost = await Post.findOne({
            where:{
                UserId: req.user.id,
                RetweetId: retweetTargetId,
            },
        });
        if(exPost){
             return res.status(403).send('이미 리트윗 했습니다.');
        }
        const retweet = await Post.create({
            UserId: req.user.id,
            RetweetId: retweetTargetId,
            content:'retweet',
        });
        const retweetWithPrevPost = await Post.findOne({
            where: {id: retweet.id},
            include: [{
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                    }, {
                        model: Image,
                    }]
            }, {
                model: User,
                attributes: ['id','nickname'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }],
            }, {
                model: User,
                as: 'Likers',
                attributes: ['id'],
            }],
        });
        res.status(201).json(retweetWithPrevPost);
    } catch (error) {
        console.error(error);
        next(error);   
    }
});

router.get('/:postId', async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
        });
        if(!post){
            return res.status(404).send('존재하지 않은 게시글 입니다.');
        }
            //     include: [{
        //     model: User,
        //     attributes: ['id', 'nickname'],
        //     }, {
        //     model: Image,
        //     }, {
        //     model: Comment,
        //     include: [{
        //         model: User,
        //         attributes: ['id', 'nickname'],
        //         order: [['createdAt', 'DESC']],
        //     }],
        //     }, {
        //     model: User, // 좋아요 누른 사람
        //     as: 'Likers',
        //     attributes: ['id'],
        //     }],
        // });
        const fullPost =await Post.findOne({
            where:{id:post.id},
            include: [{
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                    }, {
                        model: Image,
                    }]
            }, {
                model: User,
                attributes: ['id','nickname'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }],
            }, {
                model: User,
                as: 'Likers',
                attributes: ['id'],
            }],
        })
        res.status(200).json(fullPost);
        } catch (error) {
        console.error(error);
        next(error);
        }
});

router.post('/:postId/comment', isLoggedIn,async (req,res,next)=>{ //POST /post/comment
    try {
        const post = await Post.findOne({
            where: {id: req.params.postId}
        });
        if (!post){
            return res.status(403).send('존재하지 않는 게시글 입니다.');
        }
        const comment = await Comment.create({
            content: req.body.content,
            PostId: parseInt(req.params.postId, 10),
            UserId: req.user.id,
        })
        const fullComment = await Comment.findOne({
            where: {id: comment.id},
            include:[{
                model:User,
                attributes:['id','nickname'],
            }],
        })
        res.status(201).json(fullComment);
    } catch (error) {
        console.error(error);
        next(error);   
    }
});

router.patch('/:postId/like',isLoggedIn, async (req,res,next)=>{ //PATCH /post/1/likes
    try {
        const post = await Post.findOne({ where: {id: req.params.postId}});
        if(!post){
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        await post.addLikers(req.user.id);
        // db 조작시 반드시 앞에 await 붙이기
        res.json({PostId: post.id, UserId: req.user.id});
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:postId/like', isLoggedIn, async (req,res,next)=>{ //DELETE /post/1/like
    try {
        const post = await Post.findOne({ where: {id: req.params.postId}});
        if(!post){
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        await post.removeLikers(req.user.id);
        // db 조작시 반드시 앞에 await 붙이기
        res.json({PostId: post.id, UserId: req.user.id});
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:postId', isLoggedIn, async (req, res, next)=>{ //DELETE /post
    try {
        await Post.destroy({
            where: {
                id: req.params.postId,
                UserId: req.user.id,
            },
        });
        //시퀄라이즈에서 제거할땐 destroy를 쓴다 
        res.status(200).json({PostId: parseInt(req.params.postId, 10)});
    } catch (error) {
        console.error(error);
        next(error);
    }
});


module.exports = router;