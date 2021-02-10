import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
//next에서 제공하는 Link 컴포넌트

const AppLayout =({children})=>{
    return(
        <div>
            <div>
                <Link href="/"><a>노드버드</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
            {children}
            {/* {children은 AppLayout 태그 안에 있는 자식 태그이다.} */}
        </div>
    );
}

AppLayout.propTypes ={
    children: propTypes.node.isRequired,
    // node는 리턴 안에 들어가는 모든 것이다. 화면에 그릴 수 있는 모든것
    // prop 검증
};
// propTypes를 사용하려면 npm i prop-tyoes를 터미널 입력 설치 해야한다.
// prop검증 기능이 있다. 부모에서 자식에게 물려주는 값을 검증한다.
export default AppLayout;

// AppLayout 말고 다른 레이아웃을 적용하고 싶으면
// OtherLayout을 components에 만들어서 해보장