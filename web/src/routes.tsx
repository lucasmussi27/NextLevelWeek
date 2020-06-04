import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPoint from "./pages/RegisterPoint";

const Routes = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={RegisterPoint} />
    </BrowserRouter>
  )
}

export default Routes;