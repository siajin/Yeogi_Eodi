import { BsCircleFill } from "react-icons/bs";
import './MainSelected.scss';

const MainSelected = ({ selectedRoute, setSelected }) => {
    return (
        <div>
            <button onClick={() => { setSelected(-1) }}>처음으로 돌아가기</button>
            <PrintRoute selectedRoute={selectedRoute} />
        </div>
    )
}

const PrintRoute = ({ selectedRoute }) => {
    return (
        <div className="PrintRoute">
            {
                selectedRoute.eachUnits.map((unit, i) => { return <PrintEachRouteUnit unit={unit} key={i} /> })
            }
        </div>
    )
}

const PrintEachRouteUnit = ({ unit }) => {
    return (
        <div className="PrintEachRouteUnit" onClick={() => { alert() }}>
            <div className="iconWrapper">
                <div className="f1"><BsCircleFill /></div>
                <div className="line" />
                <div className="f2"><BsCircleFill /></div>
            </div>
            <div className="textWrapper">
                <div className="b3">{unit.departure}</div>
                <div className="empty" />
                <div className="b4">{unit.destination}</div>
            </div>
        </div>
    )
}


export default MainSelected