// import RoutePreview from "../components/RoutePreView";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import PrintRoute from "../components/PrintRoute";
import { useNavigate } from "react-router";
import "./MainSelected.scss";
import "./MainDefault.scss";

export default function Main() {
  const { userPaths, setUserPaths } = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="routes">
        {userPaths.map((path, i) => (
          <div
            className="path"
            key={path.id}
            onClick={() => navigate("settingRoute/" + String(path.id))}
          >
            <input
              type="text"
              value={path.name}
              onChange={(e) => {
                const nowPaths = [...userPaths];
                nowPaths[i] = { ...path, name: e.target.value };
                setUserPaths(nowPaths);
              }}
            />
            <div className="PrintRoute">
              {path.routes.map((route, key) => (
                <PrintRoute route={route} rkey={key} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="MainDefault">
        <div
          className="addRoute"
          onClick={() => {
            navigate("/addroute");
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}
