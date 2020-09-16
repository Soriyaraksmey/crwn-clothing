import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "././components/menu-item/header/header.component";
import SingInAndSingupPage from "./pages/sing-in-sing-up/sing-in-sing-up.componet";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebse-util/firebase.utils";

class App extends React.Component {
  state = {
    curentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              curentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.setState({ curentUser: user });
      }
    });
  }
  //"componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount()."
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header curentUser={this.state.curentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/singin" component={SingInAndSingupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
