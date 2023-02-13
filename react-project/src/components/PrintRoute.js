import { BsCircleFill } from "react-icons/bs";
import { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";

export default function PrintRoutes({ path }) {
  const params = useParams();
  const { userPaths, setUserPaths } = useContext(GlobalContext);
  const [busArrival, setBusArrival] = useState(
    new Array(path.routes.length * 2)
  );

  function deleteRoute(idx) {
    path.routes.splice(idx, 1);
    var paths = userPaths.filter(({ id }) => id !== path.id);
    const resPaths = [...paths, path].sort((a, b) => {
      return new Date(b.expiration_date) - new Date(a.expiration_date);
    });
    setUserPaths(resPaths);
  }
  async function getArrival(stId, busRouteId, ord, i, copyBusArrival) {
    const url = "http://127.0.0.1:8000/api/getArrInfoByRoute";
    // const serviceKey =
    //   "3b8fT3jknHopLMG2c9X9Oie3fBGDDu1lUxG7z4kz5NhBXyRYE9HT6tj0b7f3XjF329+EV69Wwynx+0qO4LtJBw==";

    const serviceKey =
      "J3miO+8zpvkreFK5siLt1qsaitbnKTNX76soIQumktM7dcfjgeWHxANJT8nYJ6wo/R8pMkeeC+zuFwG6WIrxhw==";
    try {
      await axios
        .get(url, {
          params: {
            serviceKey: serviceKey,
            stId,
            busRouteId,
            ord,
          },
        })
        .then(async (res) => {
          // console.log(res.data.msgBody.itemList[0]);
          if (res) {
            console.log(i, res, res.data);
            const data = res.data.msgBody.itemList[0];

            copyBusArrival.push({ ...data });
            setBusArrival(copyBusArrival);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  // useEffect(() => {
  //   path.routes.map((route, i) => {
  //     console.log(i);
  //     let copyBusArrival = [];
  //     setInterval(() => {
  //       getArrival(
  //         route.startStId,
  //         route.busRouteId,
  //         route.startStOrd,
  //         i,
  //         copyBusArrival
  //       );
  //     }, 10000);
  //     console.log(copyBusArrival);
  //     setBusArrival(copyBusArrival);
  //   });
  // }, []);

  console.log(busArrival);

  return (
    <div className="PrintRoute">
      {path.routes.map((route, i) => (
        <div className="PrintRoute" key={i}>
          <div className="iconWrapper">
            <div className="f1">
              <BsCircleFill />
            </div>
            <div className="line" />
            <div className="f2">
              <BsCircleFill />
            </div>
          </div>
          <div className="textWrapper">
            <div className="b3">{route.startStNm}</div>
            <div className="empty" />
            <div className="b4">{route.endStNm}</div>
          </div>
          {params.id && <button onClick={() => deleteRoute(i)}>-</button>}
          {/* <div className="arrival">{busArrival.map()}</div> */}
        </div>
      ))}
    </div>
  );
}
