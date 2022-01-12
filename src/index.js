import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./hooks/UserContext";

import Login from "./Container/Login";
import GlobalStyle from "./styles/globalStyles";
import Register from "./Container/Register";

ReactDOM.render(
  <>
    <UserProvider>
      <Login />
    </UserProvider>
    <GlobalStyle />
    <ToastContainer autoClose={2500} />
  </>,
  document.getElementById("root")
);
