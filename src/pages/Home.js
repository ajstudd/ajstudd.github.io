import { useState } from "react";

import Header from "./components/Header";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

export default (props) => {
  const [mode, setMode] = useState("login");
  return (
    <>
      <Header />
      <div
        style={{
          width: 350,
          minWidth: 300,
          height: "58%",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
        }}
      >
        {mode === "login" ? (
          <Login
            changeMode={() => setMode(mode === "login" ? "register" : "login")}
          />
        ) : (
          <Register
            changeMode={() => setMode(mode === "login" ? "register" : "login")}
          />
        )}
      </div>
    </>
  );
};
