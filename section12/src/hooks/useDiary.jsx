import {useEffect, useState, useContext} from 'react';
import {DiaryStateContext} from '../App';
import {useNavigate} from 'react-router-dom';

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    useEffect(() => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(id));

        if (!currentDiaryItem) {
            window.alert('존재하지 않는 일기입니다.');
            nav('/', {replace: true});
            // 이벤트 핸들러가 아닌 처음 컴포넌트가 생성될 때 navigation이 실행되면 오류 발생
        }

        setCurDiaryItem(currentDiaryItem);
    }, [id]);

    return curDiaryItem;
};

export default useDiary;
