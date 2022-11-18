import { useNavigate } from 'react-router';
import './MainDefault.scss';

const MainDefault = ({ routes, setSelected }) => {
    const navigate = useNavigate();
    return (
        <div className='MainDefault'>
            <div className='title'>루트를 선택하세요.</div>
            {
                routes.map((route, id) => { return <EachRoute id={id} key={id} route={route} setSelected={setSelected} /> })
            }
            <div className='addRoute' onClick={() => {
                navigate('/addroute');
            }}>+</div>
        </div>
    )
}

const EachRoute = ({ route, setSelected, id }) => {
    return (
        <div className="EachRoute" onClick={() => { setSelected(id) }}>
            {route.name}
        </div>
    )
}

export default MainDefault;