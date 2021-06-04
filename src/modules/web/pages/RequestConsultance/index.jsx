import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Validator from 'form-input-validator';
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PageSeo from './components/PageSeo'

import {getFeaturedProducts} from '../../service'
import './index.scss';
import authBanner from '../../../../assets/img/common/auth-banner.png'
import logo from '../../../../assets/img/logo/Logo1.png';
import FloatingDropdown from '../../../../components/common/Form/FloatingDropdown';


const validator = new Validator({
    email: "required|min:3",
    name: "required",
    consultationInterest: "required",
    phoneNumber: "",
    appointmentDay: "",
    appointmentTime: "",
});

function Page({ onHide, show, dispatch, }) {

    const [requestForm, setFormAttribute] = useState({consultationInterest: '', name: '', email: '', phoneNumber: '', appointmentDay: '', appointmentTime: ''});
    const [formError, setFormError] = useState(validator.errors);


    const onChange = (name, value) => {
        const { errors } = validator;

        errors.remove(name);
        setFormAttribute({...requestForm, [name]: value});

        validator.validate(name, value).then(() => {
            setFormError(errors);
        });
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
                >
            <Modal.Body className="consultancy">
                <div className="consultancy-header">                
                    <div className="paging"> <span className="current-page">1</span> <span className="total-page"> of 3</span></div>
                    <h2 className="heading-title">Construction Consultation</h2>
                    <p className="heading-desc">Kindly fill the form below with all the required information and one of our consultant will reach out to you oregarding tyour request</p>
                </div>


                <div className="consultancy-main-container">
                    <div className="section--title">About the <span>Project</span></div>

                    <div className="col-6">
                        <label className="label-text">Consultation Interest</label>              
                        <FloatingDropdown
                            label="Consultation Interest"
                            name="consultationInterest"
                            showLabel={false}
                            list={[ 
                                    {name: 'Construction Materials/Products and pricing'}, 
                                    {name: 'Construction Labour/Contractors and pricing'}, 
                                    {name: 'Construction Project Monitoring'}, 
                                    {name: 'Quantity Surveying Requirements'},
                                    {name: 'Bulk Construction Materials/Products sourcing'}
                                ]}
                            value={requestForm.consultationInterest}
                            displayField='name'
                            field='name'
                            errors={formError}
                            onChange={onChange}
                        />
                    </div>

                </div>
                <div className="action-container">
                    <button className="btn action-btn">Next</button>
                </div>

                <div className="consultancy-main-container">
                    <div className="section--title">About you & <span>your company</span></div>

                    
                    <div className="col-6">
                        <label className="label-text">Consultation Interest</label>              
                        <FloatingDropdown
                            label="Consultation Interest"
                            name="consultationInterest"
                            showLabel={false}
                            list={[ 
                                    {name: 'Construction Materials/Products and pricing'}, 
                                    {name: 'Construction Labour/Contractors and pricing'}, 
                                    {name: 'Construction Project Monitoring'}, 
                                    {name: 'Quantity Surveying Requirements'},
                                    {name: 'Bulk Construction Materials/Products sourcing'}
                                ]}
                            value={requestForm.consultationInterest}
                            displayField='name'
                            field='name'
                            errors={formError}
                            onChange={onChange}
                        />
                    </div>

                </div>
                <div className="action-container">
                    <button className="btn action-btn">Next</button>
                </div>

                <div className="consultancy-main-container">
                    <div className="section--title">Make <span>appointment</span></div>

                    <div className="row">
                        <div className="col-5 ml-4">
                            <label className="label-text">Select a day</label>              
                            <FloatingDropdown
                                label="a day"
                                name="appointmentDay"
                                showLabel={false}
                                list={[ 
                                        {name: 'Monday'}, 
                                        {name: 'Tuesday'}, 
                                        {name: 'Wednesday'}, 
                                        {name: 'Thursday'},
                                        {name: 'Friday'}
                                    ]}
                                value={requestForm.appointmentDay}
                                displayField='name'
                                field='name'
                                errors={formError}
                                onChange={onChange}
                            />
                        </div>

                        <div className="col-5">
                            <label className="label-text">Select Time</label>              
                            <FloatingDropdown
                                label="time"
                                name="appointmentTime"
                                showLabel={false}
                                list={[ 
                                        {name: '09:00am'}, 
                                        {name: '10:00am'}, 
                                        {name: '11:00am'}, 
                                        {name: '12:00pm'},
                                        {name: '01:00pm'},
                                        {name: '02:00pm'},
                                        {name: '03:00pm'},
                                        {name: '04:00pm'},
                                        {name: '05:00pm'}
                                    ]}
                                value={requestForm.appointmentTime}
                                displayField='name'
                                field='name'
                                errors={formError}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="action-container">
                    <button className="btn action-btn">Book Consultation</button>
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
