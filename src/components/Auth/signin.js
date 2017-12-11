import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import {signinUser} from '../../redux/actions/auth_actions'
import {withRouter} from "react-router-dom";


class Signin extends Component {
    constructor(props){
        super(props)

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleFormSubmit({email, password}){
        console.log(email, password)
        signinUser(this.props.history, {email, password})
    }

    render(){
        console.log(this)
        const {handleSubmit} = this.props

        return (
            <div className="container">
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <fieldset className="form-group">
                        <label>Email: </label>
                        <Field className="form-control" name="email" component="input" type="email" />
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Password: </label>
                        <Field className="form-control" name="password" component="input" type="password" />
                    </fieldset>
                    <button action="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        )
    }
}

export default withRouter(reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, null, signinUser)(Signin))
