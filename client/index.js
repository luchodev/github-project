import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import { CookiesProvider } from "react-cookie";

import App from "./components/App";
import "./sass/main.scss";
//TODO: next line
//import "react-datepicker/dist/react-datepicker.css";

render(
   <CookiesProvider>
      <Router>
         <App />
      </Router>
   </CookiesProvider>,
   document.getElementById("root")
);
