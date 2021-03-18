const express = require('express');
const multer = require('multer');
//프론트에서 오는 멀티파트를 처리함.
const path = require('path');
//path를 통해 업로드 된 파일 확장자를 빼올 수 있다.
const fs = require('fs');

const {Post, Image, Comment, User} = require('../models');
const {isLoggedIn} = require('./middlewares');

const router = express.Router();

try {
    fs.accessSync('uploads');
    //uploads 폴더가 없으면 오류
} catch (error) {
    console.log('uploads 폴더가 없음으로 자동 생성됩니다.');
    fs.mkdirSync('uploads');
}


router.post('/', isLoggedIn, async (req,res,next)=>{ //POST /post
    try {
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
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

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null,'uploads');
        },
        filename(req,file,done){// 그림.jpg
            const ext = path.extname(file.originalname); // 확장자 추출(.jpg)
            const basename = path.basename(file.originalname,ext); // 그림
            done(null, basename + new Date().getTime()+ ext); // 그림210318.jpg
        },
    }),
    limits: {fileSize: 20 * 1024 * 1024 }, //20mb
    //diskStorage는 하드에 저장 나중에 아마존 웹 서비스에다 할꺼
});

router.post('/images', isLoggedIn, upload.array('image') ,async (req,res,next) => { //POST /post/images
    console.log(req.files);
    res.json(req.files.map((v)=>v.filename));
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