const http = require('http');
//노드가 http 모듈 제공
const server = http.createServer((req, res)=>{
    console.log(req.url, res.method);

    if(req.method==='GET'){
        if(req.url==='/api/posts'){

        }
    }   else if(req.method==='POST'){
        if(req.url ==='/api/post'){

        }
    }   else if(req.method==='DELETE'){
        if(req.url ==='/api/delete'){
            
        }
    }


    res.write('<h1>Hello node1</h1>');
    //res.write 응답. end는 마지막에 쓴다.
    //html 사용가능
    res.write('<h2>Hello node2</h2>');
    res.write('<h3>Hello node3</h3>');
    res.write('<h4>Hello node4</h4>');
    res.end("<h5>Hello node5</h5>");
});
server.listen(3065, ()=>{
    console.log('서버 실행 중');
});
// http가 서버역할을 해줌
// 프로젝트를 시작할땐 npm init을 터미널에 입력
// packege.js 를 만들어야한다.
// node app.js로 실행
// 실행하면 favicon.ico가 나오는데 url옆에 있는 아이콘이다.