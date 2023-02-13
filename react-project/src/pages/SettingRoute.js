import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import PrintRoute from "../components/PrintRoute";

export default function SettingRoute() {
  const { userPaths } = useContext(GlobalContext);
  const navigate = useNavigate();
  const params = useParams();
  const nowPath = userPaths.find(({ id }) => id === params.id);

  return (
    <div className="settingRoute">
      <div onClick={() => navigate(-1)}>BACK</div>
      <div>{params.id}</div>
      <PrintRoute path={nowPath} />
      <button>+</button>
    </div>
  );
}
