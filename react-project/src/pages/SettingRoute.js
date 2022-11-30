import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import PrintRoute from "../components/PrintRoute";

export default function SettingRoute() {
  const { userPaths } = useContext(GlobalContext);
  const navigate = useNavigate();
  const params = useParams();
  const nowPath = userPaths.find(({ id }) => id === params.id);
  console.log(nowPath);
  return (
    <div className="settingRoute">
      <div>{params.id}</div>
      <div className="PrintRoute">
        {nowPath.routes.map((route, key) => (
          <PrintRoute route={route} key={key} />
        ))}
      </div>
    </div>
  );
}
