import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./app";
import Dashboard from "./components/Dashboard/Dashboard";
import DeviceCardList from "./components/Dashboard/DeviceCardList";
import DeviceCard from "./components/Dashboard/DeviceCard";
import ReadingsGraph from "./components/Dashboard/ReadingsGraph";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/DeviceCardList" component={DeviceCardList} />
      <Route path="/DeviceCard" component={DeviceCard} />
      <Route path="/ReadingsGraph" component={ReadingsGraph} />
    </div>
  </Router>
);

export default Routes;
