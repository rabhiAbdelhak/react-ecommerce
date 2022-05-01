import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//local imports
import "./index.css";
import App from "./App";
import { ComponentContextProvider } from "./contexts/component_context";
import { ProductsContextProvider } from "./contexts/products_context";
import { FiterContextProvider } from "./contexts/filter_context";
import { CartContextProvider } from "./contexts/cart_context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ComponentContextProvider>
      <ProductsContextProvider>
        <FiterContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartContextProvider>
        </FiterContextProvider>
      </ProductsContextProvider>
    </ComponentContextProvider>
  </React.StrictMode>
);
