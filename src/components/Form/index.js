import React from 'react';

import FormHeader from './FormHeader';
import CustomInput from './CustomInput';
import Feedback from './Feedback';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {username: '', password: '', general: ''},
            usernameValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'error');
    }

    validateField = (fieldName, value) => {
        let fieldErrors = this.state.errors,
            usernameValid = this.state.usernameValid,
            passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
            case 'username':
                usernameValid = value.length >= 4;
                fieldErrors.username = usernameValid ? '': 'Please, fill the field (minimum 4 characteres)';
            break;
            case 'password':
                passwordValid = value.length >= 4;
                fieldErrors.password = passwordValid ? '': 'Please, fill the field (minimum 4 characteres)';
            break;
                default:
            break;
        }
        this.setState({
            errors: fieldErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
      
    validateForm = () => {
        this.setState({
            formValid: this.state.usernameValid && this.state.passwordValid
        });
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {[name]: value},
            () => { this.validateField(name, value) }
        );
    }
    
    handleSubmit = (e) => {
        if (this.state.username === 'admin' && this.state.password === 'admin') {
            window.location.href = 'https://gauchazh.clicrbs.com.br/';
        } else {
            this.setState({
                errors: {
                    ...this.state.errors, 
                    general: 'Invalid credentials'
                }
            })
        }
        e.preventDefault();
    }

    render() {
        return(
            <form id="login-form" action="/" method="post" className="login-form" onSubmit={(event) => this.handleSubmit(event)}>
                <FormHeader />
                <section>
                    <fieldset>
                    <legend>form login</legend>
                        <div className={`form-item ${this.errorClass(this.state.errors.username)}`}>
                            <label htmlFor="username">
                                <span className="sr-only">USERNAME</span>
                                <CustomInput 
                                    type='text'
                                    validate="type-required"
                                    name="username" 
                                    placeholder="USERNAME" 
                                    value={this.state.username}
                                    handlerChange={(event) => this.handleUserInput(event)}
                                />
                                <Feedback message={this.state.errors.username} />
                            </label>
                        </div>
                        <div className={`form-item ${this.errorClass(this.state.errors.password)}`}>
                            <label htmlFor="password">
                                <span className="sr-only">PASSWORD</span>
                                <CustomInput 
                                    type='password'
                                    validate="type-required"
                                    name="password" 
                                    placeholder="PASSWORD" 
                                    value={this.state.password}
                                    handlerChange={(event) => this.handleUserInput(event)}
                                />
                                <Feedback message={this.state.errors.password} />
                            </label>
                        </div>
                        <div className="form-item">
                            <input type="submit" value="Sign in" className="btn-submit" disabled={!this.state.formValid} />
                            <Feedback message={this.state.errors.general} />
                        </div>
                        <div className="form-item">
                            <p className="extra">Don't have an account? <a href="#">Sign up here</a></p>
                        </div>
                    </fieldset>
                </section>
            </form>
        );
    }
}

export default Form;