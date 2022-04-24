import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//local imports
import "./index.css";
import App from "./App";
import {ComponentContextProvider} from "./contexts/component_context";
import { ProductsContextProvider } from "./contexts/products_context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ComponentContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsContextProvider>
    </ComponentContextProvider>
  </React.StrictMode>
);
