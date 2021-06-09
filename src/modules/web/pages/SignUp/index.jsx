import { useCallback, useEffect, useState, Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Validator from 'form-input-validator';

import './Login.scss';
import Form from './components/Form';
import { register } from '../../service';

class Page extends Component{


    constructor(props) {
        super(props);
        this.validator = new Validator({
            email: "required|min:3",
            last_name: 'required',
            first_name: 'required',
            // role: "required",
            password: "required",
        });
        this.state = {
            role: '',
            email: '',
            last_name :'',
            first_name: '',
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
        const { email, password, first_name, last_name, role } = this.state;
        const { errors } = this.validator;
        const credentials = {email, password, first_name, last_name};
        this.validator.validateAll(credentials).then(success => {
            if (success) {
                this.submit(credentials);
            } else {
                this.setState({ errors });
            }
        });
    }

    submit(credentials) {
        const {closeModal} = this.props;
        this.props
            .dispatch(register(credentials)).then(data => closeModal() )
            .catch(({ error, statusCode }) => {
                const { errors } = this.validator;
            });
    }
    
    render(){
        const {email, role, last_name, first_name, password, errors} = this.state;
        return (
            <>

                <h2 className='auth-page-title'>Create account</h2>

                <div className='auth-desc'>Already member? <span className="auth-nav-link" onClick={() => this.props.openAuthPage('login')}>Sign in </span></div>
                <Form email={email} role={role} last_name={last_name} first_name={first_name} password={password} errors={errors} handleChange={this.onChange} handleSubmit={this.handleSubmit} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.web.isAuthenticated
    };
};

export default connect(mapStateToProps)(Page);
