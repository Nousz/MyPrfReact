import React from 'react';
import './registerPage.styles.scss';
import { NavLink } from 'react-router-dom';
import LoginImg from '../../assets/undraw_Login_re_4vu2.svg';

class RegisterPage extends React.Component {
    constructor() {
        super();
    }

    state = {
        name: '',
        email: '',
        password: '',
        bio: '',
        contact: [],
        skills: [],
        socialNetwork: [],
    }

    render() {
        return (
            <div className="registerPageContainer">

                <div className="registerPageSideOne">
                    <img className="loginImg" src={LoginImg} alt="Login" />
                </div>

                <div className="registerPageSideTwo">
                    <div className="registerPageHeader">
                        <span>Have an account?</span>
                        <NavLink to="/">Log in</NavLink>
                    </div>

                    <div className="registerPageInputArea">

                        <form className="registerPageForm" action="">
                            <h1>Register</h1>
                            <div>
                                <input type="text" placeholder="Your name" />
                                <input type="text" placeholder="example@example.com" />
                                <input type="password" placeholder="*****" />
                                <textarea className="bio" type="text" placeholder="Your bio here" />
                                <div className="skills">
                                    <div>
                                        <input type="text" placeholder="Social network link" />
                                        <button>Add</button>
                                    </div>

                                    <div>
                                        <input type="text" placeholder="Skill" />
                                        <button>Add</button>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Contact" />
                                        <button>Add</button>
                                    </div>
                                </div>

                            </div>
                            <button className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default RegisterPage;
