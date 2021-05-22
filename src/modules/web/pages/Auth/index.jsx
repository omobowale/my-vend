import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PageSeo from './components/PageSeo'

// import Button from '../../../../components/common/Button/Button';
import TransparentSpinner from '../../../../components/common/Spinner/TransparentSpinner';

import {getFeaturedProducts} from '../../service'
import './auth.scss';
import authBanner from '../../../../assets/img/common/auth-banner.png'
import logo from '../../../../assets/img/logo/Logo1.png'
import Login from '../Login';
import SignUp from '../SignUp';


function Page({ onHide, show, authPage='', openAuthPage, dispatch, authenticated=false }) {


    if (authenticated) {
        return <Redirect to="/" />;
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
                >
            <Modal.Body className="auth">
                    <div className="auth-main-container">
                       <div className="logo-container">
                           <img src={logo} />
                       </div>
                       <div className="auth-form-container">
                            {(authPage.toLowerCase() == 'login' || authPage.toLowerCase() == 'signin') && <Login dispatch={dispatch} openAuthPage={openAuthPage} closeModal={onHide} />}
                            {(authPage.toLowerCase() == 'register' || authPage.toLowerCase() == 'signup') && <SignUp dispatch={dispatch} openAuthPage={openAuthPage} closeModal={onHide} />}
                        </div>
                    </div>
                    <div className="auth-banner">
                        <img src={authBanner} />
                        <span onClick={onHide} className="close-butn" > 
                            <FontAwesomeIcon icon={faTimes} className="icon" />
                        </span>
                    </div>
            

            </Modal.Body>
                
        </Modal>
    );
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.web.isAuthenticated
    };
};

export default connect(mapStateToProps)(Page);
