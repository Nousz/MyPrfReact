import React from "react";
import "./loginPage.styles.scss";
import { NavLink } from "react-router-dom";
import LoginImg from "../../assets/undraw_Login_re_4vu2.svg";
import api from "../../services/api";

import { Redirect } from 'react-router'

export default class LoginPage extends React.Component {
  constructor() {
    super();
    
    this.state = {
        redirect: false
    }
  }

  state = {
    username: "",
    email: "",
    password: "",
  };

  async handleLogin(e) {
    e.preventDefault();
    const { username, email, password } = this.state;

    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      this.setState((state, props) => { return {redirect: state.redirect = true}});
    } catch (error) {
        console.log(error)
      alert('Algo deu errado');
    }
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  render() {
    if(this.state.redirect) {
        return <Redirect to="/profile/" />
      }
    return (
      <div className="loginPageContainer">
        <div className="loginPageSideOne">
          <img className="loginImg" src={LoginImg} alt="Login" />
        </div>

        <div className="loginPageSideTwo">
          <div className="loginPageHeader">
            <span>Don't have an account?</span>
            <NavLink to="/register">Register</NavLink>
          </div>

          <div className="loginPageInputArea">
            <form
              onSubmit={(e) => this.handleLogin(e)}
              className="loginPageForm"
              action=""
            >
              <h1>Log In</h1>
              <div>
                <input
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                  name="email"
                  type="text"
                  placeholder="example@example.com"
                />
                <input
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                  name="password"
                  type="password"
                  placeholder="*****"
                />
              </div>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
