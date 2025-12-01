import {useNavigate, useParams} from 'react-router-dom';
import Editor from '../components/Editor';
import Header from '../components/Header';
import Button from '../components/Button';
import {useContext, useEffect, useState} from 'react';
import {DiaryDispatchContext, DiaryStateContext} from '../App';

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    useEffect(() => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));

        if (!currentDiaryItem) {
            window.alert('존재하지 않는 일기입니다.');
            nav('/', {replace: true});
            // 이벤트 핸들러가 아닌 처음 컴포넌트가 생성될 때 navigation이 실행되면 오류 발생
        }

        setCurDiaryItem(currentDiaryItem);
    }, [params.id]);

    const onClickDelete = () => {
        if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
            onDelete(params.id);
            nav('/', {replace: true});
        }
    };

    const onSubmit = (input) => {
        if (window.confirm('일기를 정말 수정할까요?')) {
            onUpdate(params.id, input.createDate.getTime(), input.emotionId, input.content);
            nav('/', {replace: true});
        }
    };

    return (
        <div>
            <Header title={'일기 수정하기'} leftChild={<Button text={'< 뒤로가기'} onClick={() => nav(-1)} />} rightChild={<Button text={'삭제하기'} type={'NEGATIVE'} onClick={onClickDelete} />} />
            <Editor onSubmit={onSubmit} initData={curDiaryItem} />
        </div>
    );
};

export default Edit;
