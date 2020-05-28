import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Navbar from "./component/Navbar";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/article" component={Article}></Route>
        <Route exact path="/article/:id" component={Detail}></Route>
      </Switch>
    </Router>
  );
}

export default App;
