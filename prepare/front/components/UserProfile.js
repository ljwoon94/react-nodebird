import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">하하<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followers">팔로워<br />0</div>,
            ]}
        >
            {/* 버튼은 actions으로 구현 */}
            <Card.Meta
                avatar={<Avatar>JW</Avatar>}
                title="JeongWoon Lee"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}
export default UserProfile;