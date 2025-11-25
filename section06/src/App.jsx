import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import {useState} from 'react';

/**
 * React.js는 단방향 데이터 흐름
 * 부모에서 자식으로 위에서 아래로 전달
 */
function App() {
    const [count, setCount] = useState(0);
    const onClickButton = (e) => {
        let num = Number(e.target.innerText);
        setCount((prev) => prev + num);
    };
    return (
        <div className='App'>
            <h1>Simple Counter</h1>
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
