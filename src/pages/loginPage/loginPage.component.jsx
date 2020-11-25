import React from 'react';
import './loginPage.styles.scss';
import { NavLink } from 'react-router-dom';
import LoginImg from '../../assets/undraw_Login_re_4vu2.svg';
import { render } from '@testing-library/react';

export default class LoginPage extends React.Component {
    constructor() {
        super();
    }

    render() {

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

                        <form className="loginPageForm" action="">
                            <h1>Log In</h1>
                            <div>
                                <input type="text" placeholder="example@example.com" />
                                <input type="password" placeholder="*****" />
                            </div>
                            <button className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
