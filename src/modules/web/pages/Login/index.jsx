import { useCallback, useEffect, useState, Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Validator from 'form-input-validator';

import './Login.scss';
import Form from './components/Form';
import { login } from '../../service';

class Page extends Component{


    constructor(props) {
        super(props);
        this.validator = new Validator({
            email: "required|email|min:3",
            password: "required",
        });
        this.state = {
            username: '',
            email: '',
            password: '',
            refreshing: false,
            disableLogin: false,
            err: "init",
            errors: this.validator.errors
        }

    }

    onChange = (name, value) => {
        const { errors } = this.validator;

        errors.remove(name);
        this.setState({[name]: value})

        this.validator.validate(name, value).then(() => {
            this.setState({ errors, err: `${name}:${value}` });
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const { errors } = this.validator;
        const credentials = {email, password};
        this.validator.validateAll(credentials).then(success => {
            if (success) {
                this.submit(credentials);
            } else {
                this.setState({ errors });
            }
        });
    }

    submit(credentials) {
        this.props
            .dispatch(login(credentials))
            .catch(({ error, statusCode }) => {
                const { errors } = this.validator;
            });
    }
    
    render(){
        const {email, password, errors} = this.state;
        return (
            <>

                <h2 className='auth-page-title'>Sign In</h2>

                <div className='auth-desc'>Not a member yet? <span className="auth-nav-link" onClick={() => this.props.openAuthPage('signup')}>Create account here </span></div>
                <Form email={email} password={password} errors={errors} handleChange={this.onChange} handleSubmit={this.handleSubmit} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.web.authenticated
    };
};

export default connect(mapStateToProps)(Page);
