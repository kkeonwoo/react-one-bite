import './App.css';
import {createContext, useReducer, useRef} from 'react';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import {Routes, Route} from 'react-router-dom';
import Notfound from './pages/Noutfound';
/**
 * 1. "/" : 모든 일기를 조회하는 Home 페이지
 * 2. "/new" : 새로운 일기를 작성하는 New 페이지
 * 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
 * 4. "*" : Default 페이지. not found
 */
/**
 * 주의사항
 * 1. routes컴포넌트 안에는 route컴포넌트만 존재할 수 있음
 * 2. routes컴포넌트 밖에 있는 요소는 모든 페이지 공통으로 렌더링됨.
 */

const mockData = [
    {
        id: 1,
        createDate: new Date().getTime(),
        emotionId: 1,
        content: '1번 일기 내용',
    },
    {
        id: 2,
        createDate: new Date().getTime(),
        emotionId: 2,
        content: '2번 일기 내용',
    },
];

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map((item) => {
                String(item.id) === String(action.data.id) ? action.data : item;
            });
        case 'DELETE':
            return state.filter((item) => {
                String(item.id) !== String(action.data.id);
            });
        default:
            return state;
    }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
    const idRef = useRef(3);
    const [data, dispatch] = useReducer(reducer, mockData);

    // 새로운 일지 추가
    const onCreate = (createDate, emotionId, content) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                createDate,
                emotionId,
                content,
            },
        });
    };
    // 기존 일기 수정
    const onUpdate = (id, createDate, emotionId, content) => {
        dispatch({
            type: 'UPDATE',
            data: {
                id,
                createDate,
                emotionId,
                content,
            },
        });
    };
    // 기존 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: 'DELETE',
            data: {
                id,
            },
        });
    };
    return (
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider
                value={{
                    onCreate,
                    onUpdate,
                    onDelete,
                }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/new' element={<New />} />
                    <Route path='/diary/:id' element={<Diary />} />
                    <Route path='/Edit/:id' element={<Edit />} />
                    <Route path='*' element={<Notfound />} />
                </Routes>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    );
}

export default App;
