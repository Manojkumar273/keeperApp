import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Update from "./components/Update"
import Result from "./components/Result"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

const routing = (
    <BrowserRouter>
    <Routes>
       <Route key={"1"} path="/" element={<App />} exact/> 
       <Route key={"2"} path="/update" element={<Update/>} />
       <Route key={"3"} path="/search" element={<Result/>} />
    </Routes>
    </BrowserRouter>
)



ReactDOM.render(routing, document.getElementById("root"));
