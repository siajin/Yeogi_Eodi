// import RoutePreview from "../components/RoutePreView";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import PrintRoutes from "../components/PrintRoute";
import { useNavigate } from "react-router";
import "./MainSelected.scss";
import "./MainDefault.scss";
import "./Main.scss";

export default function Main() {
  const { userPaths, setUserPaths, setModalObj } = useContext(GlobalContext);
  const navigate = useNavigate();
  console.log(userPaths);
  return (
    <div className="main">
      <div className="paths">
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
            <PrintRoutes path={path} />
          </div>
        ))}
      </div>
      <div className="MainDefault">
        <div
          className="addPath"
          onClick={() => {
            setModalObj({ modal: "start" });
            navigate("/addPath");
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}
