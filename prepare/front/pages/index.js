import React from 'react';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
//next에선 import React를 반드시 할 필요가 없다.
//next는 pages 폴더를 인식해서 개별적으로 페이지로 만든다.
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
    const { me } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => (<PostCard key={post.id} post={post} />))}
        </AppLayout>
        // AppLayout은 components 폴더에 있다.
        // AppLayout 안에 있는 div는 {children}이 된다. 
    );
};

export default Home;


// npm run dev 라고 입력하면 package.json 에 scripts에 정의해둔
// 스크립트가 실행된다. dev 말고 정의해둔 값을 입력하면 스크립트 실행된다.
// antd, antd icon 따로 설치 
// antd는 ant design으로 중국 디자인 사이트
// antd 안먹히면 @ctrl/tinycolor 3.3.1 추가해라