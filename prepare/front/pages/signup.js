import React, { useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';

import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    // 커스텀 훅으로 중복되는 내용 최소화 /hooks/useInput.js
    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, [password]);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(id, nickname, password);
    }, [password, passwordCheck, term]);


    return (
        <AppLayout>
            <Head>
                <title>회원가입 페이지 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} onChange={onChangeId} required />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input name="user-nick" value={nickname} onChange={onChangeNickname} required />
                </div>
                <div>
                    <label htmlFor="user-password">패스워드</label>
                    <br />
                    <Input name="user-password" value={password} onChange={onChangePassword} required />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호 체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>잘 할 것을 동의 합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit">가입</Button>
                    {/* htmlType을 submit으로 하면 위에 Form onFinish 이벤트가 호출. */}
                </div>
            </Form>
        </AppLayout >
    );
};


export default Signup;