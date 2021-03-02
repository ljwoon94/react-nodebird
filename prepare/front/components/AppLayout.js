import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
//next에서 제공하는 Link 컴포넌트
import { Menu, Input, Row, Col } from 'antd';
// antd는 ant design으로 중국 디자인 사이트
// Row Col은 반응형 디자인을 만들기 위해 antd에서 지원
import 'antd/dist/antd.css'
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// react-redux 리액트와 리덕스를 연결해준다.
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    .ant-row{
        margin-right:0!important;
        margin-left:0!important;
    }
    .ant-cool:first-child{
        padding-left:0!important;
    }
    .ant-col:last-child{
        padding-right:0!important;
    }
`;
const SearchInput = styled(Input.Search)`
    verticalAlign: 'middle';
`;
// 컴포넌트에 스타일을 적용하고 싶을때 style{}를 사용하는것보다
// styled-components를 사용하는것이 좋다.

const AppLayout = ({ children }) => {
    const { me } = useSelector((state) => state.user);

    return (
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                {/* gutter 컬럼사이에 간격을 주는것 */}
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>

                <Col xs={24} md={12}>
                    {children}
                    {/* {children은 AppLayout 태그 안에 있는 자식 태그이다.} */}
                </Col>
                <Col xs={24} md={6} >
                    <a href="https://github.com/ljwoon94/react-nodebird" target="_blank" rel="noreferrer noopener">Made by JeongWoon Lee</a>
                </Col>
                {/* Col은 컬럼이다. xs는 태블릿기준 컬럼의 가로 길이 가로 길이는 최대 24이다.
                    Col 여러 개를 한줄에 넣고 싶으면 각 Col xs가 합쳐서 24가 넘어선 안된다.
                    테블릿 sm 모바일은 xs 모니터는 md 대화면은 lg

                    target="_blank" 을 사용할 땐
                    rel="noreferrer noopener" 도 같이 적자. 보안관련된 내용.
                */}
            </Row>
        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
    // node는 리턴 안에 들어가는 모든 것이다. 화면에 그릴 수 있는 모든것
    // prop 검증
};
// propTypes를 사용하려면 npm i prop-tyoes를 터미널 입력 설치 해야한다.
// prop검증 기능이 있다. 부모에서 자식에게 물려주는 값을 검증한다.
export default AppLayout;

// AppLayout 말고 다른 레이아웃을 적용하고 싶으면
// OtherLayout을 components에 만들어서 해보장