import "./App.css";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header"; // vite는 es module이어도 확장자까지 작성하지 않아도됨. 자동변환
import Main from "./components/Main";

/**
 * 컴포넌트
 * JavaScript로 HTML 태그를 반환하는 것.
 * 함수 이름을 따서 부름
 */
function App() {
    // 부모 컴포넌트

    // 전달해야할 props가 많은 경우 객체로 만들고
    // spread 연산자로 한번에 전달
    const buttonProps = {
        text: "메일",
        color: "red",
        a: 1,
        b: 2,
        c: 3,
    };

    return (
        <>
            {/* <Header/>
      <Main/>
      <Footer/> */}
            {/* props를 객체형태로 자식 컴포넌트에 매개변수로 전달. 객체에 프로퍼티 형태로 존재 */}
            <Button {...buttonProps} />
            <Button text={"카페"} />
            <Button text={"블로그"}>
                {/* HTML, 컴포넌트까지 children이라는 이름의 props로 전달할 수 있다. */}
                <div>자식 요소</div>
            </Button>
        </>
    );
}

export default App;
