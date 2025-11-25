import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import {useEffect, useState, useRef} from 'react';
import Even from './components/Even';
/**
 * React.js는 단방향 데이터 흐름
 * 부모에서 자식으로 위에서 아래로 전달
 */
function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const isMount = useRef(false);

    // 1. 마운트 : 탄생
    useEffect(() => {
        console.log('mount');
    }, []);
    // 2. 업데이트
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log('update');
    });
    // 3. 언마운트 : 죽음
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
                {count % 2 === 0 ? <Even /> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;
