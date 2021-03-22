const express = require('express');
const {User, Post , Image, Comment} = require('../models'); // db에 있는 User을 가져옴
const bcrypt = require('bcrypt');
const passport = require('passport');
const {Op} = require('sequelize');
const db = require('../models');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const user = require('../models/user');

const router = express.Router();

router.get('/', async (req,res,next)=>{ //GET /user
    try { 
        if(req.user){
            const fullUserWithoutPassword = await User.findOne({
                where: {id : req.user.id},
                attributes:{
                    exclude:['password']
                },
                //전체 데이터 중 password만 가져오지 않겠다.
                include:[{
                    model: Post,
                    attributes: ['id'],
                },{
                    model: User,
                    as: 'Followings',
                    attributes:['id'],
                },{
                    model: User,
                    as:'Followers',
                    attributes:['id'],
                }]
                //as를 썻으면 model에 user.js에도 ad 넣어준다.
                //팔로워 데이터 다 가져오면 엄청 무거우니깐 id만 가져왕
            })
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }

});

router.get('/:userId', async (req,res,next)=>{ //GET /user
    try { 
        
        const fullUserWithoutPassword = await User.findOne({ // GET /user/1/posts
            where: {id : req.params.userId},
            attributes:{
                exclude:['password']
            },
            //전체 데이터 중 password만 가져오지 않겠다.
            include:[{
                model: Post,
            },{
                model: User,
                as: 'Followings',
                attributes:['id'],
            },{
                model: User,
                as:'Followers',
                attributes:['id'],
            }]
                //as를 썻으면 model에 user.js에도 ad 넣어준다.
                //팔로워 데이터 다 가져오면 엄청 무거우니깐 id만 가져왕
        })
        if (fullUserWithoutPassword){
            const data = fullUserWithoutPassword.toJSON();
            data.Posts = data.Posts.length; //개인정보 침해 예방
            data.Followings = data.Followings.length;
            data.Followers = data.Followers.length;
            res.status(200).json(data);
        } else {
            res.status(404).json('존재하지 않는 사용자 입니다.');
        }
    } catch (error) {
        console.error(error);
        next(error);
    }

});

router.get('/:userId/posts', async (req, res, next) => { // GET /user/1/posts
        try {
            const where = {UserId: req.params.userId};
            if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
                where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
                } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
            const posts = await Post.findAll({
                where,
                limit: 10,
                include: [{
                    model: Image,
                }, {
                    model: Comment,
                    include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                    }]
                }, {
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: User,
                    through: 'Like',
                    as: 'Likers',
                    attributes: ['id'],
                }, {
                    model: Post,
                    as: 'Retweet',
                    include: [{
                        model: User,
                        attributes: ['id', 'nickname'],
                    }, {
                        model: Image,
                    }]
                }],
            });
            console.log(posts);
            res.status(200).json(posts);
        // } else {
        //     res.status(404).send('존재하지 않는 사용자입니다.');
        // }
        } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/login',isNotLoggedIn, (req, res, next)=>{
    //미들웨어 확장법
    passport.authenticate('local',(err,user,info)=>{
        if (err){
            console.error(err);
            return next(err);
        }
        if (info){
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr)=>{
            if(loginErr){
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: {id : user.id},
                attributes:{
                    exclude:['password']
                },
                //전체 데이터 중 password만 가져오지 않겠다.
                include:[{
                    model: Post,
                    attributes:['id'],
                },{
                    model: User,
                    as: 'Followings',
                    attributes:['id'],
                },{
                    model: User,
                    as:'Followers',
                    attributes:['id'],
                }]
                //as를 썻으면 model에 user.js에도 ad 넣어준다.
            })
            return res.status(200).json(fullUserWithoutPassword);
        });  
    })(req,res,next);
});
//로그인 전략 실행

router.post('/', isNotLoggedIn, async (req, res, next) =>{ // POST /user/
    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        // User.findOne db에 하나의 자료 찾기
        // 중복된 데이터 exUser에 저장
        if (exUser) {
            return res.status(403).send('이미 사용 중인 아이디 입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        // 비밀번호 암호화
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
            //사가에서 받아옴
        });
        //async await 비동기 함수 순서대로 진행해야해서 써야함.
        res.status(201).send('ok');
        //요청 성공시 status(200) 실패시 status(403)
    } catch (error) {
        console.error(error);
        next(error); //status 500 에러
    }
});

router.post('/logout',isLoggedIn, (req,res)=>{
    console.log(req.user);
    req.logOut();
    req.session.destroy();
    res.send('ok');
});

router.patch('/nickname', isLoggedIn, async(req, res, next)=>{
    try {
        await User.update({
            nickname: req.body.nickname,
        },{
            where: {id: req.user.id},
        });
        res.status(200).json({nickname: req.body.nickname});
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => { // PATCH /user/1/follow
    try {
        const user = await User.findOne({ where: { id: req.params.userId }});
        if (!user) {
            res.status(403).send('없는 사람을 팔로우하려고 하시네요?');
        }
        await user.addFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});
  
router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => { // DELETE /user/1/follow
    try {
        const user = await User.findOne({ where: { id: req.params.userId }});
        if (!user) {
            res.status(403).send('없는 사람을 언팔로우하려고 하시네요?');
        }
        await user.removeFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/followers', isLoggedIn, async (req, res, next) => { // GET /user/followers
    try {
        const user = await User.findOne({ where: { id: req.user.id }});
        if (!user) {
            res.status(403).send('없는 사람을 찾으려고 하시네요?');
        }
        const followers = await user.getFollowers();
        res.status(200).json(followers);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
  
router.get('/followings', isLoggedIn, async (req, res, next) => { // GET /user/followings
    try {
        const user = await User.findOne({ where: { id: req.user.id }});
        if (!user) {
            res.status(403).send('존재하지 않는 사람입니다.');
        }
        const followings = await user.getFollowings();
        res.status(200).json(followings);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => { // DELETE /user/follower/2
    try {
        const user = await User.findOne({ where: { id: req.params.userId }});
        if (!user) {
            res.status(403).send('없는 사람을 차단하려고 하시네요?');
        }
        await user.removeFollowings(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});


module.exports = router;

//npm i bcrypt 비밀번호 암호화 라이브러리