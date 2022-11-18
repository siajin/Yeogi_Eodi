import { useState } from "react";
import MainDefault from "./MainDefault";
import MainSelected from "./MainSelected";

const Main = ({ routes }) => {

    const [selected, setSelected] = useState(-1);

    // 루트 선택되어 있으면 => 해당 루트 보여주기( == MainSelected)
    // 아니면 => 즐겨찾기 페이지( == MainDefault)
    return (
        selected == -1 ? <MainDefault routes={routes} setSelected={setSelected} /> : <MainSelected setSelected={setSelected} selectedRoute={routes[selected]}/>
    );
};




export default Main;