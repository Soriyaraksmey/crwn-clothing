import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

const hats = () => <h1>Hello</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={hats} />
      </Switch>
    </div>
  );
}

export default App;
