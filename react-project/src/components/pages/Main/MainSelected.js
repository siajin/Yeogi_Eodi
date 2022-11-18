const MainSelected = ({ selectedRoute, setSelected }) => {
    return (
        <div>
            <button onClick={() => { setSelected(-1) }}>back</button>
            <PrintRoute selectedRoute={selectedRoute} />
        </div>
    )
}

const PrintRoute = ({ selectedRoute }) => {
    return (
        <div>
            {
                selectedRoute.eachUnits.map((unit, i) => { return <PrintEachRouteUnit unit={unit} key={i} /> })
            }
        </div>
    )
}

const PrintEachRouteUnit = ({ unit }) => {
    return (
        <div>
            a
        </div>
    )
}


export default MainSelected