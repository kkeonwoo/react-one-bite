import {memo} from 'react';
import './TodoItem.css';

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };
    const onClickButton = () => {
        onDelete(id);
    };
    return (
        <div className='TodoItem'>
            <input readOnly checked={isDone} onChange={onChangeCheckbox} type='checkbox' />
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickButton}>삭제</button>
        </div>
    );
};

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단
//     // T => props 바뀌지 않음 -> 리렌더링 x
//     // F => props 바뀜 -> 리렌더링 o

//     if (prevProps.id !== nextProps.id) return false;
//     if (prevProps.isDone !== nextProps.isDone) return false;
//     if (prevProps.date !== nextProps.date) return false;
//     if (prevProps.content !== nextProps.content) return false;

//     return true;
// });

export default memo(TodoItem);
