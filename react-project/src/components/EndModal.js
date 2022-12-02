import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import "../static/modal.scss";
import axios from "axios";
import uuid from "react-uuid";
import { useNavigate } from "react-router";

export default function EndModal() {
  const { modalObj, setModalObj, userPaths, setUserPaths } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  async function getApi() {
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
            stId: modalObj.userStId,
            busRouteId: modalObj.userBRId,
            ord: modalObj.userStOrd,
          },
        })
        .then((res) => {
          const data = res.data.msgBody.itemList[0];
          const nowRoute = {
            ...modalObj,
            endStNm: data.stNm,
            endStId: data.stId,
            endStOrd: data.staOrd,
            modal: "",
          };
          const nowPath = {
            name: "",
            routes: [nowRoute],
            id: uuid(),
            createAt: new Date(),
          };
          setUserPaths([...userPaths, nowPath]);
          setModalObj({ modal: "" });
          navigate("/");
        });
    } catch (err) {
      console.log(err);
    }
    // resPath = {
    //   name: "",
    //   routes: [
    //     {
    //       type: "bus",
    //       rtNm: data.rtNm,
    //       busRouteId: data.busRouteId,
    //       startStNm: data.startStNm,
    //       startStId: data.stId,
    //       startStOrd: data.stOrd,
    //       endStNm: data.endStNm,
    //       endStId: data.endStId,
    //       endStOrd: data.endStOrd,
    //     },
    //   ],
    // };
    // setUserPaths([...userPaths]);
  }
  // {
  //   name: "집->시립대",
  //   routes: [
  //     {
  //       type: "bus",
  //       rtNm: "7019",
  //       busRouteId: "100100339",
  //       startStNm: "은가어린이공원구150번종점",
  //       startStId: "112000182",
  //       startStOrd: "21",
  //       endStNm: "서소문",
  //       endStId: "101000037",
  //       endStOrd: "45",
  //     },
  //   ],
  //   id: "11",
  // },

  return (
    <div className="bgModal">
      <div className="startModal">
        <h3>목적지로 설정하시겠습니까?</h3>
        <div className="buttons">
          <button onClick={() => getApi()}>확인</button>
          <button
            onClick={() => setModalObj((obj) => ({ ...obj, modal: "end" }))}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
