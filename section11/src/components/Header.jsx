import {memo} from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='Header'>
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

// const momizedHeader = memo(Header);
// export default momizedHeader;
export default memo(Header);
