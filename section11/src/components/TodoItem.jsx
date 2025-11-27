import {memo, useContext} from 'react';
import './TodoItem.css';
import {TodoDispatchContext} from '../App';

const TodoItem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
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

export default memo(TodoItem);
