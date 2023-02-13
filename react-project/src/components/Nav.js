import { Routes, Route } from "react-router-dom";

export default function Nav() {
  function MainNav() {
    return <div className="nav">즐겨찾기</div>;
  }
  function SettingRouteNav() {
    return <div className="nav">Setting Route</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<MainNav />} />
      <Route path="/settingRoute/*" element={<SettingRouteNav />} />
    </Routes>
  );
}
