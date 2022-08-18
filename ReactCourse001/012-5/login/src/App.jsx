import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import "./pages/LoginPage/styles.css"
import AppRoutes from "./App.Routes";

const App = () => {
  return <div className="app">
    <AppRoutes />
    </div>;
};

export default App;
