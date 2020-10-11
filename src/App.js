import React from "react";
import {createStructuredSelector} from "reselect";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { setCurrentUser } from "./redux/user/user.action";
import { connect } from "react-redux";

import CheckOutpage  from "./pages/checkout/chcekout.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "././components/menu-item/header/header.component";
import SingInAndSingupPage from "./pages/sing-in-sing-up/sing-in-sing-up.componet";


import {
  auth,
  createUserProfileDocument,
} from "./components/firebse-util/firebase.utils";
import {selectCurrentUser} from "./redux/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(user);
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
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutpage}/>
          <Route
            exact
            path="/singin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SingInAndSingupPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapstatetoProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapstatetoProps, mapDispatchToProps)(App);
