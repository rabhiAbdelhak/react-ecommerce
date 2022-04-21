import React from "react";
import ReactDOM from "react-dom";

//local imports
import ContextProvider from "./context";

//local imports
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
