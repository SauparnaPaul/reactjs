import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: '',
             hasLoginFailed: false,
             showSuccessMessage: false
        }

        this.handleChange=this.handleChange.bind(this)
        this.loginClicked=this.loginClicked.bind(this)
    }
    

    handleChange=(e)=>{
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    loginClicked=()=>{
        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                console.log("executeBasicAuth")
                this.props.history.push(`/list`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
    }

    render() {
        return (
            <div>
              {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button onClick={this.loginClicked}>Login</button>  
            </div>
        )
    }
}
