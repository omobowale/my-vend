import { useCallback, useEffect, useState, Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Validator from 'form-input-validator';

import './Login.scss';
import Form from './components/Form';

class Page extends Component{


    constructor(props) {
        super(props);
        this.validator = new Validator({
            email: "required|min:3",
            role: "required",
            password: "required",
        });
        this.state = {
            role: '',
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
    
    successActions = () => {
        
        // this.props.closeModal();
        // this.props.openIntendedRoute();
    
    } 


    postLogin = () => {
        // const state = location.state;
        // localStorage.removeItem('checkPending');
        // localStorage.removeItem('shared-review');

        // if (state && state.from) {
        //     window.location.href = state.from.pathname;
        // } else {
        //     window.location.href = '/';
        // }
    }

    handleSubmit = (e) => {
        
        e.preventDefault();

        const {email, password} = this.state;
        const { errors } = this.validator;

        this.validator.validateAll({email, password}).then(success => {
            if (success) {
                // this.setState({ err: "success", disableLogin: true });
                // if(Transformer.validEmail(email)){
                //     this.props.dispatch(findUserRequest({email: email})).then(data => {
                //         if(data.buyer){
                //             this.login(data.buyer.username, password );
                //         }
                //         this.setState({disableLogin: false });
                //     }).catch(error => {})
                // }else{
                //     this.login(email, password);
                // }
            } else {
                this.setState({
                    errors,
                    err: "error"
                });
            }
        });
    }

    login = async (username, password) => {
        const {dispatch} = this.props;
        
        try {
            
            
            this.setState({disableLogin: false})
        } catch (error) {
            
            this.setState({disableLogin: false})
        }

    };
    
    render(){
        const {email, role, password, errors} = this.state;
        return (
            <div>

                <h2 className='auth-page-title'>Create account</h2>

                <div className='auth-desc'>Already member? <span className="auth-nav-link" onClick={() => this.props.openAuthPage('login')}>Sign in </span></div>
                <Form email={email} role={role} password={password} errors={errors} handleChange={this.onChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.web.authenticated
    };
};

export default connect(mapStateToProps)(Page);
