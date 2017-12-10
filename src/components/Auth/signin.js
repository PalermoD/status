import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'


class Signin extends Component {
    constructor(props){
        super(props)

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }
    handleFormSubmit({email, password}){
            console.log(email, password)
    }

    render(){
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

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin)
