/**
 * React Hooks
 * 클래스 컴포넌트의 기능을 사용할 수 있게 해줌
 * use를 붙여서 가져옴
 */

/**
 * 3가지 hook 관련된 팁
 * 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
 * 2. 조건부로 호출될 수 없다. (조건문, 반복문 내에서 사용 X) => 서로 다른 훅들의 호출 순서가 꼬일 수 있기 때문에
 * 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.
 * ㄴ 함수명 앞에 use 붙이면 알아서 훅으로 인식
 */

import useInput from '../hooks/useInput';

const HookExam = () => {
    const [input, onChange] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    );
};

export default HookExam;
