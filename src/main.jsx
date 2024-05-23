import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Provider } from "react-redux";
import { store } from "./store/store.js";

const App = lazy(() => import("./App.jsx"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
