import {useParams} from 'react-router-dom';

const Edit = () => {
    const params = useParams();
    console.log(params);

    return <div>{params.id}번 Edit</div>;
};

export default Edit;
