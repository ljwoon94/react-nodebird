import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
    const followerList = [{ nickname: '이정운' }, { nickname: '호호호' }, { nickname: '하하하' }];
    const followingList = [{ nickname: '이정운' }, { nickname: '호호호' }, { nickname: '하하하' }];

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로워 목록" data={followerList} />
                <FollowList header="팔로잉 목록" data={followingList} />
            </AppLayout>
        </>
    );
}

export default Profile;