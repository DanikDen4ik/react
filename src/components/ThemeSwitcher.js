import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./store";

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme); // Получаем текущую тему
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{theme === "light" ? "Светлая тема" : "Темная тема"}</h1>
      <button onClick={handleToggle}>
        Переключить на {theme === "light" ? "темную" : "светлую"} тему
      </button>
    </div>
  );
};

export default ThemeSwitcher;
