import React from "react";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";

import Spinner from "./UI/Spinner";

import {API, getInputValues} from "../helpers";

class LoginPage extends React.Component {
    state = {
        loading: false,
    };

    /**
     * Checks the credentials, and signs the user in if correct.
     * @param SubmitEvent e 
     */
    async checkLogin(e)
    {
        e.preventDefault();
        this.setState({
            loading: true,
        });
        const values = getInputValues(e.target.elements);

        const data = await API.call("POST", "auth/login", values);

        if((data && !data.error))
        {
            this.props.history.push("/");
            this.props.setRefreshToken(data.refreshToken, data.userRank);
        }else{
            alert("Wrong username, or password.");
            this.setState({
                loading: true,
            });
        }
    }

    render(){
      this.props.setRefreshToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Inlvc291MjAiLCJpYXQiOjE1MTYyMzkwMjJ9.X-9_WDDagMwz6JPLZs2nCfdqxrVc0ZJJey9RpX3sges")

      // this.props.setRefreshToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEyLCJpYXQiOjE2Mzk5MDUyNjMsImlzcyI6IiJ9.GB35BgJMWVxmJ0pbzjnto89JGrqtbVjbE0oDwERt_Mc", 0);
        return (<div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner visible={this.state.loading} />
            <form onSubmit={e => this.checkLogin(e)} className="d-flex flex-column align-self-center w-25">
                <label>Username:</label>
                <input name="username" className="form-control" type="input"/>
                <label>Password:</label>
                <input name="password" className="form-control" type="password"/>
                <button className="btn btn-primary mt-3">
                    Sign in
                </button>
                <div className="d-flex justify-content-center pt-2">
                    <Link to="/signup">New user</Link>
                </div>
            </form>
        </div>);
    }
}

export default withRouter(LoginPage);