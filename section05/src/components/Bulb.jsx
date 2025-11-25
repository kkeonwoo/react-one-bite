import {useState} from 'react';

const Bulb = () => {
    /**
     * 리액트 컴포넌트는 자신의 state가 변경되지 않아도
     * 부모 state가 변경되면 리렌더링됨
     */
    const [light, setLight] = useState('OFF');
    console.log(light);

    return (
        <div>
            {light === 'ON' ? <h1 style={{backgroundColor: 'orange'}}>ON</h1> : <h1 style={{backgroundColor: 'gray'}}>OFF</h1>}
            <div>
                <button
                    onClick={() => {
                        setLight(light === 'OFF' ? 'ON' : 'OFF');
                    }}>
                    {light === 'OFF' ? '켜기' : '끄기'}
                </button>
            </div>
        </div>
    );
};

export default Bulb;
