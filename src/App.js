import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Products} from "./components/Products";

const App = () => (
  <Router>
    <Switch>
      <div className="container">
        <Route exact path="/" component={Products}/>
        <Route component={() => <h1>Page not found.</h1>}/>
      </div>
    </Switch>
  </Router>
);

export default App;
