import { BsCircleFill } from "react-icons/bs";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function PrintRoutes({ path }) {
  const { userPaths, setUserPaths } = useContext(GlobalContext);
  function deleteRoute(idx) {
    path.routes.splice(idx, 1);
    console.log(path);
    var paths = userPaths.filter(({ id }) => id !== path.id);
    console.log([...paths, path]);
    setUserPaths([...paths, path]);
  }

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
            <div className="b3">{route.departure}</div>
            <div className="empty" />
            <div className="b4">{route.destination}</div>
          </div>
          <button onClick={() => deleteRoute(i)}>-</button>
        </div>
      ))}
    </div>
  );
}
