// 간단한 회원정보 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import {useRef, useState} from 'react';

/**
 * useRef = reference
 * 레퍼런스 객체를 생성.
 * 컴포넌트 내부의 변수로 활용 가능함. = useState()
 * 어떤 경우에도 리렌더링을 유발하지 않음 !== useState()
 * DOM 조작에 많이 이용
 */
const Register = () => {
    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        bio: '',
    });
    const countRef = useRef(0);
    // {current: undefinded} 객체의 current key값으로 현재값 저장
    /**
     * 의문점 1
     * DOM 조작이 아닌 경우. 왜 let count = 0; 과 같이 JS 변수를 사용하지 않나?
     * input 조작 시 onChange 발생하면서 state 값이 변경
     * ㄴ state 변경으로 Register 컴포넌트 리렌터링.
     * ㄴ js 변수 값 초기화
     */
    /**
     * 의문점 2
     * 그럼 JS를 컴포넌트 외부에 선언하면 되지 않나?
     * 컴포넌트를 한 번 사용하면 동작 O
     * 단 컴포넌트를 재사용하여 1개 이상일 경우
     * JS 변수를 공유하여 값이 변경됨.
     * 컴포넌트를 2번 선언하는 건 그 파일 내 Register를 2번 호출하는 것
     * 함수 밖에 있는 변수가 2번 호출 되는 것이 X => 따라서 값을 공유하게 됨
     */
    const inputRef = useRef();

    console.log(input);

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        // console.log(e.target.value, e.target.name);

        setInput({
            ...input,
            [e.target.name]: e.target.value,
            // 객체 관련 문법
            // [변수] => 객체의 key값을 변수로 설정.
            // input의 name = state 객체의 key
        });
    };

    // const onChangeName = (e) => {
    //     setInput({
    //         ...input, // 기존 input 객체 안에 있는 다른 값 유지
    //         name: e.target.value,
    //     });
    // };

    const onSubmit = () => {
        if (input.name === '') {
            // 이름을 입력하는 DOM 요소에 포커스
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <div>
                <input ref={inputRef} name='name' value={input.name} onChange={onChange} placeholder='이름' />
            </div>
            <div>
                <input name='birth' value={input.birth} onChange={onChange} type='date' />
            </div>
            <div>
                <select name='country' value={input.country} onChange={onChange}>
                    <option value=''></option>
                    <option value='kr'>한국</option>
                    <option value='us'>미국</option>
                    <option value='uk'>영국</option>
                </select>
            </div>
            <div>
                <textarea name='bio' value={input.bio} onChange={onChange}></textarea>
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;
