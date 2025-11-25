import {useState} from 'react';

// 관련이 없는 기능은 별도의 컴포넌트로 분리시켜 의미없는 리랜더링 줄이기
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}>
                +
            </button>
        </div>
    );
};

export default Counter;
