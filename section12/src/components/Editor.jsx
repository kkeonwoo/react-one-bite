import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const emotionList = [
    {
        emotionId: 1,
        emotionName: '완전 좋음',
    },
    {
        emotionId: 2,
        emotionName: '좋음',
    },
    {
        emotionId: 3,
        emotionName: '그럭저럭',
    },
    {
        emotionId: 4,
        emotionName: '나쁨',
    },
    {
        emotionId: 5,
        emotionName: '끔찍',
    },
];

const getStringedDate = (targetDate) => {
    // input type="Date"의 value 값을 아래 형식에 맞춰 넣어야 화면에 나옴
    // 날짜 -> YYYY-MM-DD
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if (month < 10) {
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
};

const Editor = ({initData, onSubmit}) => {
    const [input, setInput] = useState({
        createDate: new Date(),
        emotionId: 3,
        content: '',
    });

    const nav = useNavigate();

    useEffect(() => {
        if (initData) {
            setInput({
                ...initData,
                createDate: new Date(Number(initData.createDate)),
            });
        }
    }, [initData]);

    const onChangeInput = (e) => {
        // e.target.name => 어떤 요소에 입력이 들어온건지
        // e.target.value=> 입력값이 무엇인지
        let name = e.target.name;
        let value = e.target.value;

        if (name === 'createDate') {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value,
        });
    };

    const onClickSubmitButton = () => {
        onSubmit(input);
    };

    return (
        <div className='Editor'>
            <section className='date_section'>
                <h4>오늘의 날짜</h4>
                <input type='date' name='createDate' value={getStringedDate(input.createDate)} onChange={onChangeInput} />
            </section>
            <section className='emotion_section'>
                <h4>오늘의 감정</h4>
                <div className='emotion_list_wrapper'>
                    {emotionList.map((item) => {
                        return (
                            <EmotionItem
                                key={item.emotionId}
                                {...item}
                                isSelected={item.emotionId === input.emotionId}
                                onClick={() =>
                                    // 컴포넌트는 이벤트를 직접 일으켜야함
                                    // 이벤트 객체를 만들어서 전달해야함
                                    onChangeInput({
                                        target: {
                                            name: 'emotionId',
                                            value: item.emotionId,
                                        },
                                    })
                                }
                            />
                        );
                    })}
                </div>
            </section>
            <section className='content_section'>
                <h4>오늘의 일기</h4>
                <textarea name='content' value={input.content} onChange={onChangeInput} placeholder='오늘은 어떘나요?'></textarea>
            </section>
            <section className='button_section'>
                <Button onClick={() => nav(-1)} text={'취소하기'} />
                <Button onClick={onClickSubmitButton} text={'작성완료'} type={'POSITIVE'} />
            </section>
        </div>
    );
};

export default Editor;
