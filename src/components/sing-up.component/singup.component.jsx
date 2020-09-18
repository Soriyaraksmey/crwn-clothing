import React from "react";
import FormInput from "../form-input-component/form-input.component";
import CustomeButton from "../custom-button/custome-button.component";

import {
  auth,
  createUserProfileDocument,
} from "../firebse-util/firebase.utils";

import "./sign-up.styles.scss";

class Singup extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handlechange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sing-up">
        <h2 className="title">I do have an account</h2>
        <span>Sing up with email and your password</span>
        <form className="sing-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handelChange={this.handlechange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handelChange={this.handlechange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handelChange={this.handlechange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handelChange={this.handlechange}
            label="Confirm Password"
            required
          />
          <CustomeButton type="submit">SING UP</CustomeButton>
        </form>
      </div>
    );
  }
}

export default Singup;
