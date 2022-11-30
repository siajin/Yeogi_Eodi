import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

export default function ContextWrapper(props) {
  const [userPaths, setUserPaths] = useState([
    {
      name: "집->시립대1",
      routes: [
        {
          type: "subway",
          num: "5",
          departure: "마천",
          destination: "답십리",
        },
        {
          type: "bus",
          num: "420",
          departure: "답십리역.동부시장",
          destination: "서울시립대입구",
        },
      ],
      id: "11",
    },
    {
      name: "집->시립대2",
      routes: [
        {
          type: "subway",
          num: "5",
          departure: "마천",
          destination: "왕십리",
        },
        {
          type: "subway",
          num: "경의중앙선",
          departure: "왕십리",
          destination: "회기",
        },
      ],
      id: "12",
    },
    {
      name: "집->방산고",
      routes: [
        {
          type: "bus",
          num: "3315",
          departure: "마천청소년수련관",
          destination: "송파구청.방이맛골",
        },
      ],
      id: "13",
    },
  ]);

  return (
    <GlobalContext.Provider
      value={{
        userPaths,
        setUserPaths,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
