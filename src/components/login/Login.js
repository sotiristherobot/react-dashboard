import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <form className="login-form">
                <label className="login-form-item">
                    Username:
                    <input type="text" name="username"/>
                </label>
                <label className="login-form-item">
                    Password:
                    <input type="password" name="password"/>
                </label>
            </form>
        );
    }
}
export default Login;
