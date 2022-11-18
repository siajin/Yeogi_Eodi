import './MainDefault.css';

const MainDefault = ({ routes, setSelected }) => {
    return (
        <div>
            <div className='title'>루트를 선택하세요.</div>
            {
                routes.map((route, id) => { return <EachRoute id={id} key={id} route={route} setSelected={setSelected} /> })
            }
            <div className='addRoute'>+</div>
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