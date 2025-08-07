import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton"; 
// import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <HelmetProvider> */}
      <App />
      <ScrollToTopButton /> {/* //me */}
      {/* </HelmetProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
