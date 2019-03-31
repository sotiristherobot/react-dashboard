import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import Security from '../../helpers/Security';

class Main extends Component {
    render() {
        return (
            <div>
                {
                    !Security.isAuthorized()?
                        <Redirect to={'/login'} />:
                        <p>Main</p>
                }
            </div>
        )
    }
}
export default Main;
