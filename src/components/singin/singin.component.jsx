import React, { Component } from "react";
import CustomeButton from "../custom-button/custome-button.component";
import FormInput from "../form-input-component/form-input.component";
import { auth, singinwithGoogle } from "../firebse-util/firebase.utils";
import "./sin-ing.component.scss";

class Singin extends Component {
  state = {
    email: "",
    password: "",
    emailerr: null,
    passworderr: null,
  };

  handlesubmit = async (e) => {
    e.preventDefault();
    this.setState({ emailerr: null, passworderr: null });
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      const err = error;
      if (err.code === "auth/user-not-found") {
        this.setState({ emailerr: "Acoount does not exists." });
      }
      if (err.code === "auth/wrong-password") {
        this.setState({ passworderr: "Password incorrect." }, () =>
          console.log(this.state)
        );
      }
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { emailerr, passworderr } = this.state;
    return (
      <div className="sing-in">
        <h2 className="title">I alrady have an account</h2>
        <span>Sing in with your email and password</span>

        <form onSubmit={this.handlesubmit}>
          {emailerr ? <p className="errralert">{emailerr}</p> : ""}

          <FormInput
            type="email"
            name="email"
            handelChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          {passworderr ? <p className="errralert">{passworderr}</p> : ""}
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handelChange={this.handleChange}
            required
          />
          <div className="Button">
            <CustomeButton type="submit">SING IN</CustomeButton>
            <CustomeButton
              type="button"
              onClick={singinwithGoogle}
              isgoogleSingin
            >
              Sing in with google
            </CustomeButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Singin;
