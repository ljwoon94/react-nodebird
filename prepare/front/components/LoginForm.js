import React, {  useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user'


const ButtonWrapper = styled.div`
    margin-top: 10px;
`;
const FormWrapper = styled(Form)`
    padding: 10px;
`;
// styled를 사용하려면 '`' 백틱을 사용해야한다. ~모양에 있다.
// div 컴포넌트면서 css가 적용된다.
// 컴포넌트에 스타일을 적용하고 싶을때 style{}를 사용하는것보다
// styled-components를 사용하는것이 좋다.
const LoginForm = () => {
    const dispatch = useDispatch();
    const { logInLoading, logInError} = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    // 커스텀 훅을 사용 중복되는 코드 최소화 hooks/useInput.js

    useEffect(()=>{
        if(logInError){
            alert(logInError);
        }
    },[logInError]);

    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        dispatch(loginRequestAction({ email, password }));
    }, [email, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            {/* onFinish는 자동으로 e.preventDefault가 적용되어있다. */}
            <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                {/* primary 색깔을 담당 */}
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

export default LoginForm;