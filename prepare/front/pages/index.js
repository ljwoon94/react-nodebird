import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
//next에선 import React를 반드시 할 필요가 없다.
//next는 pages 폴더를 인식해서 개별적으로 페이지로 만든다.
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import { END } from '@redux-saga/core';
import axios from 'axios';

const Home = () => {
    const dispatch = useDispatch();
    const me = useSelector((state) => state.user.me);
    const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector((state) => state.post);

    useEffect(()=>{
        if(retweetError){
            alert(retweetError);
        }
    },[retweetError]);

    
    useEffect(() => {
        function onScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length - 1]?.id;
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        lastId,
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            //종료하지 않으면 큰일남.
        };
    }, [hasMorePosts, loadPostsLoading, mainPosts]);
    // 스크롤 끝까지 내릴시 로딩 후 이미지 가져오기

    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => (<PostCard key={post.id} post={post} />))}
        </AppLayout>
        // AppLayout은 components 폴더에 있다.
        // AppLayout 안에 있는 div는 {children}이 된다. 
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context)=>{
    console.log('getServerSideProps start');
    const cookie = context.req ? context.req.headers.cookie : '';
    //쿠키정보가 여기에 들어감.
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    // 매우 중요
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_POSTS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    // context.store.dispatch(END);
    // await context.store.sagaTask.toPromise();
    // 문장이 존재해야 success가 응답함.

});

export default Home;


// npm run dev 라고 입력하면 package.json 에 scripts에 정의해둔
// 스크립트가 실행된다. dev 말고 정의해둔 값을 입력하면 스크립트 실행된다.
// antd, antd icon 따로 설치 
// antd는 ant design으로 중국 디자인 사이트
// antd 안먹히면 @ctrl/tinycolor 3.3.1 추가해라
// next를 사용하는 이유는 서버사이드 렌더링 때문
