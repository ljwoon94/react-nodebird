const express = require('express');
const {User} = require('../models'); // db에 있는 User을 가져옴
const bcrypt = require('bcrypt');
const passport = require('passport');

const router = express.Router();

router.post('/login',(req, res, next)=>{
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
            // res.setHeader('Cookie','cxlhy')
            return res.status(200).json(user);
        });  
    })(req,res,next);
});
//로그인 전략 실행

router.post('/', async (req, res, next) =>{ // POST /user/
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
        res.setHeader('Access-Control-Allow-Origin','*')
        res.status(200).send('ok');
        //요청 성공시 status(200) 실패시 status(403)
    } catch (error) {
        console.error(error);
        next(error); //status 500 에러
    }
});

router.post('/user/logout',(req,res)=>{
    console.log(req.user);
    req.logOut();
    req.session.destroy();
    res.send('ok');
});

module.exports = router;

//npm i bcrypt 비밀번호 암호화 라이브러리