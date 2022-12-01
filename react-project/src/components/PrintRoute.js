import { BsCircleFill } from "react-icons/bs";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function PrintRoutes({ path }) {
  const { userPaths, setUserPaths } = useContext(GlobalContext);
  function deleteRoute(idx) {
    path.routes.splice(idx, 1);
    var paths = userPaths.filter(({ id }) => id !== path.id);
    const resPaths = [...paths, path].sort(
      (a, b) => Number(a.id) - Number(b.id)
    );
    setUserPaths(resPaths);
  }
  console.log(path);

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
          <button onClick={() => deleteRoute(i)}>-</button>
        </div>
      ))}
    </div>
  );
}
