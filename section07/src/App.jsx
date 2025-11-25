import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import {useEffect, useState} from 'react';

/**
 * React.js는 단방향 데이터 흐름
 * 부모에서 자식으로 위에서 아래로 전달
 */
function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    useEffect(() => {
        console.log(`count: ${count} / input: ${input}`);
    }, [count, input]);
    // 의존성 배열
    // dependency array
    // deps

    const onClickButton = (e) => {
        let num = Number(e.target.innerText);
        setCount((prev) => prev + num);
        // react 상태 변화 함수는 비동기
    };
    return (
        <div className='App'>
            <h1>Simple Counter</h1>
            <section>
                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
            </section>
            <section>
                <Viewer count={count} />
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;
