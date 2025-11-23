import "./Main.css";

/**
 * jsx 자바스크립트 확장판
 * 주의사항
 * 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
 * 2. 숫자, 문자열, 배열 값만 렌더링 된다.
 * 3. 모든 태그는 닫혀있어야한다.
 * 4. 최상위 태그는 반드시 하나여야만 한다.
 */
const Main = () => {
    // const number = 10;
    const user = {
        name: "이건우",
        isLogin: true,
    };
    if (user.isLogin) {
        return <div className='logout'>로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }
    // return (
    //     <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>
    //     // <main>
    //     //     <h1>메인</h1>
    //     //     <h2>{number}</h2>
    //     // </main>
    // );
};

export default Main;
