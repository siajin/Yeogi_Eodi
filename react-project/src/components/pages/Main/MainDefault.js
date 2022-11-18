import './MainDefault.css';

const MainDefault = ({ routes, setSelected }) => {
    return (
        <div>
            {
                routes.map((route, id) => { return <EachRoute id={id} key={id} route={route} setSelected={setSelected} /> })
            }
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