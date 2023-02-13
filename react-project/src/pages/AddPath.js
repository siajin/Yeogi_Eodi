import { useState } from "react";
import "../static/AddPath.scss";
import { busNameIdList } from "../api/busNameIdList";
import { subNameIdList } from "../api/subNameIdList";
import { useEffect } from "react";
import busStInfo from "../api/busStInfo.json";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { useNavigate } from "react-router";

const AddPath = () => {
  const { modalObj, setModalObj } = useContext(GlobalContext);
  const [type, setType] = useState("bus");
  const [busName, setBusName] = useState("");
  const [busNameList, setBusNameList] = useState([]);
  const [busStList, setBusStList] = useState([]);
  const [subName, setSubName] = useState("");
  const [subNameList, setSubNameList] = useState([]);
  const [isStaion, setIsStation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (busName) {
      setBusNameList(
        busNameIdList.filter(({ name }) =>
          name.slice(0, busName.length).includes(busName)
        )
      );
    } else {
      setBusNameList([]);
      setBusStList([]);
    }
  }, [busName]);

  useEffect(() => {
    if (subName) {
      setSubNameList(
        subNameIdList.filter(({ name }) =>
          name.slice(0, subName.length).includes(subName)
        )
      );
    } else {
      setSubNameList([]);
    }
  }, [subName]);

  function busStation(routeId) {
    setBusStList(busStInfo.filter(({ busRouteId }) => busRouteId === routeId));
  }

  return (
    <div className="AddPath">
      <div onClick={() => navigate(-1)}>BACK</div>
      <div className="title">AddPath</div>
      <div className="buttonWrapper">
        <button
          className={type === "bus" ? "selected" : ""}
          onClick={() => setType("bus")}
        >
          버스
        </button>
        <button
          className={type === "sub" ? "selected" : ""}
          onClick={() => setType("sub")}
        >
          지하철
        </button>
      </div>

      {!isStaion &&
        (type === "bus" ? (
          <div className="busNameList">
            <input
              placeholder="🔍노선번호입력"
              value={busName}
              onChange={(e) => setBusName(e.target.value)}
            />
            {busNameList.map((bus, i) => (
              <div
                onClick={() => {
                  busStation(bus.id);
                  setIsStation(true);
                }}
                key={i}
              >
                <div>{bus.name}</div>
                <div>&gt;</div>
              </div>
            ))}
          </div>
        ) : (
          type === "sub" && (
            <div className="subNameList">
              <input
                placeholder="🔍역이름입력"
                value={subName}
                onChange={(e) => setSubName(e.target.value)}
              />
              {subNameList.map((sub, i) => (
                <div key={i}>
                  <div>{sub.name}</div>
                  <div>{sub.line}</div>
                  <div>&gt;</div>
                </div>
              ))}
            </div>
          )
        ))}
      {isStaion && (
        <div className="busStList">
          <div onClick={() => setIsStation("bus")}>BACK</div>
          {busStList.map(({ busRouteId, stId, stOrd, stNm }, i) => (
            <div
              className={modalObj.startStId === stId ? "startSt" : ""}
              onClick={() => {
                if (modalObj.modal === "start")
                  setModalObj({
                    userStId: stId,
                    userBRId: busRouteId,
                    userStOrd: stOrd,
                    modal: "startModal",
                  });
                if (modalObj.modal === "end")
                  setModalObj({
                    ...modalObj,
                    userStId: stId,
                    userBRId: busRouteId,
                    userStOrd: stOrd,
                    modal: "endModal",
                  });
              }}
              key={i}
            >
              <div>
                {i + 1}. {stNm}
              </div>
              <div>&gt;</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddPath;
