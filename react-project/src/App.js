import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import AddRoute from "./components/AddRoute";
import Nav from "./components/Nav";
import SettingRoute from "./pages/SettingRoute";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/settingRoute/:id" element={<SettingRoute />} />
        <Route path="addroute" element={<AddRoute />} />
      </Routes>
    </div>
  );
};

export default App;
