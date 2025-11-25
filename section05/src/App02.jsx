import './App.css';
import Bulb from './components/Bulb';
import Counter from './components/Counter';

/**
 * 리액트 컴포넌트가 리렌더링 되는 상황
 * 1. 자신이 관리하는 state 값이 변경될 때
 * 2. 전달받은 props가 변경될 때
 * 3. 부모 컴포넌트가 리렌더링될 때
 */

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

    return (
        <>
            <Bulb />
            <Counter />
        </>
    );
}

export default App02;
