import './App.css';
import {useState} from 'react';

function App02() {
  /**
   * useState()
   * [state, setState] 두 개의 값을 배열로 반환
   * state: 현재값. 초기값
   * setState: 상태를 변화시킬 함수
   * 컴포넌트의 state 값이 바뀌면 컴포넌트가 return을 다시한다.
   * 그래서 화면을 다시 그린다. 그리고 변경된 state 값도 화면에 다시 그린다.
   */
  // const state = useState();
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === 'OFF' ? 'ON' : 'OFF');
          }}>
          {light === 'OFF' ? '켜기' : '끄기'}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          +
        </button>
      </div>
    </>
  );
}

export default App02;
