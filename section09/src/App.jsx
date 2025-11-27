import {useState, useRef, useReducer} from 'react';
import './App.css';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';

/**
 * useReducer
 * 컴포넌트 내부에 새로운 state를 생성하는 React Hook
 * 모든 useState는 useReducer로 대체 가능
 * useReducer는 상태 관리 코드를 컴포넌트 외부로 분리할 수 있음
 *
 * 왜 reducer를 사용해야하나?
 * React는 UI를 렌더링하는 것이 주된 목표
 * 컴포넌트 내 상태관리 코드가 길게 존재하는 것은 주객이 전도
 */

const mockData = [
    {
        id: 0,
        isDone: true,
        content: 'React 공부하기',
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: '청소하기',
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: '게임하기',
        date: new Date().getTime(),
    },
    {
        id: 3,
        isDone: false,
        content: 'React 공부하기',
        date: new Date().getTime(),
    },
];

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map((item) => (item.id === action.targetId ? {...item, isDone: !item.isDone} : item));
        case 'DELETE':
            return state.filter((item) => item.id !== action.targetId);
        default:
            return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(4);
    const onCreate = (content) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            },
        });
    };

    const onUpdate = (targetId) => {
        dispatch({
            type: 'UPDATE',
            targetId,
        });
    };

    const onDelete = (targetId) => {
        dispatch({
            type: 'DELETE',
            targetId,
        });
    };
    return (
        <div className='App'>
            <Header />
            <Editor onCreate={onCreate} />
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;
