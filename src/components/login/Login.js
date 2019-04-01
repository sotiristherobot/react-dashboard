import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <form>
                <label>
                    Username:
                    <input type="text" name="username"/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password"/>
                </label>
            </form>
        );
    }
}
export default Login;
