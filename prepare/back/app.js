const express = require('express');
const postRouter = require('./routes/post');
// import from과 같다.
const db = require('./models');
const app =express();
db.sequelize.sync()
    .then(()=>{
        console.log('db 연결 성공');
    })
    .catch(console.error);

app.get('/', (req,res)=>{
    res.send('hello express');
    //http는 res.write이지만 express는 send다.
});

app.get('/', (req,res)=>{
    res.send('hello api');
});

app.get('/posts', (req,res)=>{
    res.json([
        {id:1, content:'hello'},
        {id:2, content:'hello2'},
        {id:3, content:'hello3'},
    ]);
    //데이터는 json으로 표현
});

app.use('/post',postRouter);
//app.use('/중복되는 url',postRouter);

app.listen(3065,()=>{
    console.log('서버 실행 중');
});


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

// npm i --D nodemon@2
// 코드 변동 시 자동으로 서버 재실행
// package.json에서 scripts "dev":"nodemon app" 추가
// nodemoon app
// npm run dev