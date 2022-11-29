import { useState } from 'react';
import './AddRoute.scss';

const AddRoute = () => {

    const [type, setType] = useState('');

    return (
        <div className='AddRoute'>
            <div className="title">AddRoute</div>
                <div className='buttonWrapper'>
                    <button className={(type == 'bus') ? 'selected' : ''} onClick={() => setType('bus')}>버스</button>
                    <button className={(type == 'subway') ? 'selected' : ''} onClick={() => setType('subway')}>지하철</button>
                </div>
                <input placeholder='🔍노선번호입력' />
        </div>
    )
}

export default AddRoute;