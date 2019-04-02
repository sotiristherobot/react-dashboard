import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        //TODO Moved state up to a higher component.
        this.state = {
            username: null,
            password: null
        };
        this.submitButtonHandler = this.submitButtonHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    submitButtonHandler(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <form method="POST" className="login-form" onSubmit={this.submitButtonHandler}>
                <label className="login-form-item">
                    Username: <input type="text" name="username" onChange={this.changeHandler}/>
                </label>
                <label className="login-form-item">
                    Password: <input type="password" name="password" onChange={this.changeHandler}/>
                </label>
                <input className="login-form-item" type="submit" value="Submit" />
            </form>
        );
    }
}
export default Login;
