import React from "react";
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

//local imports
import "./index.css";
import App from "./App";
import ContextProvider from "./context";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<ContextProvider>
    <BrowserRouter><App /></BrowserRouter>
</ContextProvider>
);
