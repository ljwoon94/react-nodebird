import React from 'react';
import AppLayout from '../components/AppLayout';
//next에선 import React를 반드시 할 필요가 없다.
//next는 pages 폴더를 인식해서 개별적으로 페이지로 만든다.
const Home = () => {
    return (
        <AppLayout>
            <div>Hello, Next!</div>
        </AppLayout>
        // AppLayout은 components 폴더에 있다.
        // AppLayout 안에 있는 div는 {children}이 된다.
    );
}

export default Home;

console.log("");
// npm run dev 라고 입력하면 package.json 에 scripts에 정의해둔
// 스크립트가 실행된다. dev 말고 정의해둔 값을 입력하면 스크립트 실행된다.  