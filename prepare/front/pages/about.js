import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { END } from 'redux-saga';

import { Avatar, Card } from 'antd';
import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';
import { LOAD_USER_REQUEST } from '../reducers/user';

const About = () => {
    const { userInfo } = useSelector((state) => state.user);

    return (
        <AppLayout>
        <Head>
            <title>ZeroCho | NodeBird</title>
        </Head>
        {userInfo
            ? (
            <Card
                actions={[
                <div key="twit">
                    짹짹
                    <br />
                    {userInfo.Posts}
                </div>,
                <div key="following">
                    팔로잉
                    <br />
                    {userInfo.Followings}
                </div>,
                <div key="follower">
                    팔로워
                    <br />
                    {userInfo.Followers}
                </div>,
                ]}
            >
                <Card.Meta
                avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                title={userInfo.nickname}
                description="노드버드 매니아"
                />
            </Card>
            )
            : null}
            {/* 서버사이드 레더링이 되면 userInfo에 데이터가 찬다. */}
        </AppLayout>
    );
};

export const getStaticProps = wrapper.getStaticProps(async (context) => {
    console.log('getStaticProps');
    context.store.dispatch({
        type: LOAD_USER_REQUEST,
        data: 1,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});
// 서버사이드 렌더링
// 데이터가 바뀔 일이 없으면 getStaticProps 사용하고
// 접속하는 상황에 따라 화면이 바뀌어야한다면 getServerSideProps 자주 사용

export default About;