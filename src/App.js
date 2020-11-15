import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/app.scss";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
