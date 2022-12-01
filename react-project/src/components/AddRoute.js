import { useState } from "react";
import "./AddRoute.scss";
import { busNameIdList } from "../api/busNameIdList";
import { useEffect } from "react";
import stInfo from "../api/stInfo.json";

const AddRoute = () => {
  const [type, setType] = useState("");
  const [busName, setBusName] = useState("");
  const [busNameList, setBusNameList] = useState([]);
  const [busStList, setBusStList] = useState([]);

  useEffect(() => {
    if (busName) {
      setBusNameList(
        busNameIdList.filter(({ name }) => name.includes(busName)).slice(0, 10)
      );
    } else {
      setBusNameList([]);
      setBusStList([]);
    }
  }, [busName]);

  function busStation(routeId) {
    setBusStList(stInfo.filter(({ busRouteId }) => busRouteId === routeId));
  }

  return (
    <div className="AddRoute">
      <div className="title">AddRoute</div>
      <div className="buttonWrapper">
        <button
          className={type === "bus" ? "selected" : ""}
          onClick={() => setType("bus")}
        >
          버스
        </button>
        <button
          className={type === "subway" ? "selected" : ""}
          onClick={() => setType("subway")}
        >
          지하철
        </button>
      </div>
      <input
        placeholder="🔍노선번호입력"
        value={busName}
        onChange={(e) => setBusName(e.target.value)}
      />
      {busNameList.map((bus) => (
        <div
          onClick={() => {
            busStation(bus.id);
          }}
        >
          {bus.name}
        </div>
      ))}
      {busStList.map((st) => (
        <div>{st.stNm}</div>
      ))}
    </div>
  );
};

export default AddRoute;
