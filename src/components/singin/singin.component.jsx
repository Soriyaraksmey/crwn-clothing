import React, { Component } from "react";
import CustomeButton from "../custom-button/custome-button.component";
import FormInput from "../form-input-component/form-input.component";
import { singinwithGoogle } from "../firebse-util/firebase.utils";
import "./sin-ing.component.scss";

class Singin extends Component {
  state = {
    email: "",
    password: "",
  };

  handlesubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sing-in">
        <h2 className="title">I alrady have an account</h2>
        <span>Sing in with your email and password</span>

        <form onSubmit={this.handlesubmit}>
          <FormInput
            type="email"
            name="email"
            handelChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handelChange={this.handleChange}
            required
          />
          <div className="Button">
            <CustomeButton type="submit">SING IN</CustomeButton>
            <CustomeButton onClick={singinwithGoogle} isgoogleSingin>
              Sing in with google
            </CustomeButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Singin;
