import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/paper-dashboard.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/css/navbar.css";
import "react-multi-carousel/lib/styles.css";

import "./index.css";
//import "assets/demo/demo.css";
//import "perfect-scrollbar/css/perfect-scrollbar.css";

import Register from "./views/Register";
import Login from "./views/Login";
import NotFound from "./views/NotFound";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/main/*" element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
