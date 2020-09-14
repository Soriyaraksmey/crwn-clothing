import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "././components/menu-item/header/header.component";
import SingInAndSingupPage from "./pages/sing-in-sing-up/sing-in-sing-up.componet";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/singin" component={SingInAndSingupPage} />
      </Switch>
    </div>
  );
}

export default App;
