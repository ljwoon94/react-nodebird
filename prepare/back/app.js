const express = require('express');
const cors = require('cors');
//미들웨어 브라우저가 서버를 차단하는걸 막음 전부차단하지 않음,
const session = require('express-session');
const cookieParser = require('cookie-parser');
//npm i cookie-parser
const hpp = require('hpp');
const helmet = require('helmet');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
// import from과 같다.
const hashtagRouter = require('./routes/hashtag');
const db = require('./models');
const morgan = require('morgan');
const path = require('path');
const passportConfig = require('./passport');
const passport = require('passport');
const dotenv = require('dotenv');

dotenv.config();
//.env에 정의된 변수를 가지고 온다..
const app =express();
db.sequelize.sync()
    .then(()=>{
        console.log('db 연결 성공');
    })
    .catch(console.error);
passportConfig();


if(process.env.NODE_ENV ==='production'){
    app.use(morgan('combined'));
    app.use(hpp());
    app.use(helmet());
} else {
    app.use(morgan('dev'));
}
// npm i pm2 cross-env helmet hpp
//프론트로부터 요청 확인 가능
app.use(cors({
    origin: ['http://localhost:3060','nodebird.com','http://54.180.200.233'],
    credentials: true,
}));
//브라우저의 요청을 *은 전부 허용 평소엔 백서버만 허용하게함. 
//credentials: true, 쿠키전달 허용   
app.use('/',express.static(path.join(__dirname, 'uploads')));
// 이미지 업로드 미리보기를 보기위해 설정 
//운영체제 상관없이 경로를 만들기 위해 path.join
// '/' 는 localhost
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//사가에서 받아온 인자값을 req에 넣어둠
//위에서 부터 아래로 해석되기 땜에 위에 urlencoded가 있어야한다.
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
// npm i express-session
// 세션관리
// npm i dotenv
// 비밀번호 관리 back 폴더에 .env폴더 생성 숨길 변수를 적어둬라
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req,res)=>{
    res.send('hello express');
    //http는 res.write이지만 express는 send다.
});


app.get('/', (req,res)=>{
    res.send('hello api');
});

app.use('/posts',postsRouter);
app.use('/post',postRouter);
//app.use('/중복되는 url',postRouter);
app.use('/user',userRouter);
app.use('/hashtag',hashtagRouter);

// app.use((err,req,res,next)=>{

// });
// //에러처리 미들웨어 기본적으로 되어있으나 수정하고 싶을 경우 사용

app.listen(80,()=>{
    console.log('서버 실행 중');
});
// 서버에선 3065가 아니라 80으로 바꾼다.

//노드가 http 모듈 제공
// http가 서버역할을 해줌
// 프로젝트를 시작할땐 npm init을 터미널에 입력
// packege.js 를 만들어야한다.
// node app.js로 실행
// 실행하면 favicon.ico가 나오는데 url옆에 있는 아이콘이다.
// postman 다운받으면 좋을일 많다.


// app.get -> 가져오다.
// app.post -> 생성하다 애매하면 post 쓰자!
// app.put -> 전체 수정
// app.delete -> 제거
// app.patch -> 부분 수정
// app.options -> 찔러보기
// app.head -> 헤더만 가져오기


// npm i sequelize sequelize-cli mysql2
// sequelize 자바스크립트를 sql로 바꿔주는 도구
// mysql2 node랑 mysql를 연결해주는 드라이버
// mysql를 코드로 다룬다.
// npx sequelize init을 하면 시퀄라이즈 세팅이 된다
// config에서 config.json에 mysql 비밀번호, database 이름 삽입
// "port":"3306"도 넣어둬라

// npx sequelize db:create
// db생성
// node app 싱행

// npm i --D nodemon@2s
// 코드 변동 시 자동으로 서버 재실행
// package.json에서 scripts "dev":"nodemon app" 추가
// nodemoon app
// npm run dev