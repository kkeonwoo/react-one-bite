export default function Buttons({ children, text, color = "black" }) {
    // 이벤트 객체
    // e = synthetic base event
    // 모든 웹 브라우저의 이벤트 객체를 하나로
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return (
        <button onClick={onClickButton} style={{ color: color }}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
}
// props 기본값 설정
// 25년도 이후 defaultprops 기능 사라짐
// 1. 구조분해할당으로 받아오고
// 2. 거기에 =""으로 값 저장

// props를 넘겨주는 값이 없을 수도 있기 때문에(undefinded)
// 함수를 바로 사용하는 것은 위험
