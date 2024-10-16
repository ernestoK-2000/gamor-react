import { useRef, useState } from "react";
import "./App.css";
import { AppTheme } from "./models/models";
import NavBar from "./components/NavBar/NavBar";
import MainCard from "./components/MainCard/MainCard";
import CategorySection from "./components/CategoriesSection/CategorySection";
import { Outlet } from "react-router-dom";

function App() {
  function onClick() {
    theme === AppTheme.LIGHT
      ? setTheme(AppTheme.DARK)
      : setTheme(AppTheme.LIGHT);
  }

  const [theme, setTheme] = useState(AppTheme.LIGHT);

  return (
    <div className={"App " + theme}>
      <NavBar theme={theme} setTheme={setTheme}></NavBar>
      <Outlet context={theme} />
    </div>
  );
}

export default App;
