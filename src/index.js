import React from "react";
import ReactDOM from "react-dom/";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

//local imports
import "./index.css";
import App from "./App";
import { ComponentContextProvider } from "./contexts/component_context";
import { ProductsContextProvider } from "./contexts/products_context";
import { FiterContextProvider } from "./contexts/filter_context";
import { CartContextProvider } from "./contexts/cart_context";
import { UserContextProvider } from "./contexts/user_context";

const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ibo9-nit.us.auth0.com"
      clientId="WhdTsb8cpcAMHsPLClRwJFlAvHEp07es"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserContextProvider>
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
      </UserContextProvider>
    </Auth0Provider>
  </React.StrictMode>,
  rootElement
);
