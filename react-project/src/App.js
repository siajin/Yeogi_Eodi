import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import AddPath from "./components/AddPath";
import Nav from "./components/Nav";
import SettingRoute from "./pages/SettingRoute";
import { useContext } from "react";
import GlobalContext from "./context/GlobalContext";
import StartModal from "./components/StartModal";
import EndModal from "./components/EndModal";

const App = () => {
  const { modalObj } = useContext(GlobalContext);
  return (
    <div className="App">
      {modalObj.modal === "startModal" && <StartModal />}
      {modalObj.modal === "endModal" && <EndModal />}
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/settingRoute/:id" element={<SettingRoute />} />
        <Route path="AddPath" element={<AddPath />} />
      </Routes>
    </div>
  );
};

export default App;
