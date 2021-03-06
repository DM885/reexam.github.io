import React from "react";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";

import Spinner from "./UI/Spinner";

import {API, getInputValues} from "../helpers";
//import App from "../App";
//const cors = require('cors')
//App.use(cors);

class SignUpPage extends React.Component {
    state = {
        loading: false,
    };

    /**
     * Checks the userdata, and signs the user up if correct.
     * @param SubmitEvent e 
     */
    async signUp(e)
    {
        e.preventDefault();
        const userInput = getInputValues(e.target.elements);
        
        if(userInput.username.length === 0)
        {
            alert("A username is required");
        }else if(userInput.password.length === 0)
        {
            alert("A password is required");
        }else if(userInput.password !== userInput.passwordRepeat){
            alert("The two given password are not the same");
        }else{
            this.setState({
                loading: true,
            });
            const data = await API.call("POST", "auth/register", userInput);
            this.setState({
                loading: false,
            });
            if((data))
            {
                alert("Your user has been created!!");
                this.props.history.push("/");
            }else{
                alert("A unkown error orcurred, try again");
            }
        }
    }

    render(){
        this.props.setRefreshToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Inlvc291MjAiLCJpYXQiOjE1MTYyMzkwMjJ9.X-9_WDDagMwz6JPLZs2nCfdqxrVc0ZJJey9RpX3sges", 0)

      // this.props.setRefreshToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEyLCJpYXQiOjE2Mzk5MDUyNjMsImlzcyI6IiJ9.GB35BgJMWVxmJ0pbzjnto89JGrqtbVjbE0oDwERt_Mc", 0);

        return (<div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner visible={this.state.loading} />
            <form onSubmit={e => this.signUp(e)} className="d-flex flex-column align-self-center w-25">
                <label>Username:</label>
                <input name="username" required className="form-control" type="input"/>
                <label>Password:</label>
                <input name="password" required className="form-control" type="password"/>
                <label>Repeat password:</label>
                <input name="passwordRepeat" required className="form-control" type="password"/>
                <button className="btn btn-primary mt-3">
                    Create account
                </button>
                <div className="d-flex justify-content-center pt-2">
                    <Link to="/">Go back</Link>
                </div>
            </form>
        </div>);
    }
}

export default withRouter(SignUpPage);