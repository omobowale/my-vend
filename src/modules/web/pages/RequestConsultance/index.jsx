import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Validator from 'form-input-validator';
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

import {constructionConsultantReq, getFeaturedProducts} from '../../service'
import './index.scss';
import FloatingDropdown from '../../../../components/common/Form/FloatingDropdown';
import FloatingText from '../../../../components/common/Form/FloatingText';
import SimpleSpinner from '../../../../components/common/Spinner/SimpleSpinner';


const validator = new Validator({
    email: "required|min:3",
    name: "required",
    interest: "required",
    contact: "",
    day: "",
    time: "",
});

function Page({ onHide, show, dispatch, }) {

    const [requestForm, setFormAttribute] = useState({interest: '', name: '', email: '', contact: '', day: '', time: ''});
    const [formError, setFormError] = useState(validator.errors);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoadingState] = useState(false);


    const onChange = (name, value) => {
        const { errors } = validator;

        errors.remove(name);
        setFormAttribute({...requestForm, [name]: value});

        validator.validate(name, value).then(() => {
            setFormError(errors);
        });
    }

    const handleSubmit = () => {

        const { errors } = validator;
        validator.validateAll(requestForm).then(success => {
            if (success) {
                setLoadingState(true);
                setCurrentPage(4);
                submit(requestForm);
            } else {
                setCurrentPage(4);
                setFormError(validator.errors);
            }
        });
    };

    const submit = (form) => {
        dispatch(constructionConsultantReq(form))
            .then(msg => {
                // console.log('success', msg)
                setLoadingState(false);
            })
            .catch(({ error, statusCode }) => {
                console.log('error', error, statusCode)
                setLoadingState(false);
                setCurrentPage(3);
            });
    };

    const closeModal = () => {
        setFormAttribute({interest: '', name: '', email: '', contact: '', day: '', time: ''});
        setCurrentPage(1);
        setLoadingState(false);
        onHide();
    }

    return (
        <Modal
            show={show}
            onHide={() => closeModal()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className="request-consultant-modal"
            centered
                >
            <Modal.Body className="">
                <div className={`consultancy ${currentPage == 1 ? "show" : "exit"}`} >

                    <div className="consultancy-header">                
                        <div className="paging"> <span className="current-page">1</span> <span className="total-page"> of 3</span></div>
                        <h2 className="heading-title">Construction Consultation</h2>
                        <p className="heading-desc">Kindly fill the form below with all the required information and one of our consultant will reach out to you oregarding tyour request</p>
                    </div>


                    <div className="consultancy-main-container">
                        <div className="section--title">About the <span>Project</span></div>

                        <div className="row mx-0">
                            <div className="col-12 col-sm-6">
                                <label className="label-text">Consultation Interest</label>              
                                <FloatingDropdown
                                    label="Consultation Interest"
                                    name="interest"
                                    showLabel={false}
                                    list={[ 
                                            {name: 'Construction Materials/Products and pricing'}, 
                                            {name: 'Construction Labour/Contractors and pricing'}, 
                                            {name: 'Construction Project Monitoring'}, 
                                            {name: 'Quantity Surveying Requirements'},
                                            {name: 'Bulk Construction Materials/Products sourcing'}
                                        ]}
                                    value={requestForm.interest}
                                    displayField='name'
                                    field='name'
                                    errors={formError}
                                    onChange={onChange}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="action-container right">
                        <button className="btn action-btn" onClick={() => setCurrentPage(2)}>Next</button>
                    </div>
                </div>

                <div className={`consultancy ${currentPage == 2 ? "show" : "exit"}`} >


                    <div className="consultancy-header">                
                        <div className="paging"> <span className="current-page">2</span> <span className="total-page"> of 3</span></div>
                        <h2 className="heading-title">Construction Consultation</h2>
                        <p className="heading-desc">Kindly fill the form below with all the required information and one of our consultant will reach out to you oregarding tyour request</p>
                    </div>


                    <div className="consultancy-main-container">
                        <div className="section--title">About you & <span>your company</span></div>

                        <div className="row mx-0">
                            <div className="col-12 col-sm-6">        
                                <FloatingText
                                    label="Full Name"
                                    name="name"
                                    showLabel={false}
                                    value={requestForm.name}
                                    field='name'
                                    errors={formError}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="col-12 col-sm-6">             
                                <FloatingText
                                    label="Phone Number"
                                    name="contact"
                                    showLabel={false}
                                    value={requestForm.contact}
                                    field='contact'
                                    errors={formError}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="col-12 col-sm-6">     
                                <FloatingText
                                    label="Email"
                                    name="email"
                                    showLabel={false}
                                    value={requestForm.email}
                                    field='email'
                                    errors={formError}
                                    onChange={onChange}
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div className="action-container">
                        <button className="btn action-btn" onClick={() => setCurrentPage(1)}>Back</button>
                        <button className="btn action-btn" onClick={() => setCurrentPage(3)}>Next</button>
                    </div>
                </div>
                <div className={`consultancy ${currentPage == 3 ? "show" : "exit"}`} >

                    <div className="consultancy-header">                
                        <div className="paging"> <span className="current-page">3</span> <span className="total-page"> of 3</span></div>
                        <h2 className="heading-title">Construction Consultation</h2>
                        <p className="heading-desc">Kindly fill the form below with all the required information and one of our consultant will reach out to you oregarding tyour request</p>
                    </div>


                    <div className="consultancy-main-container">
                        <div className="section--title">Make <span>appointment</span></div>

                        <div className="row mx-0">
                            <div className="col-12 col-sm-6">
                                <label className="label-text">Select a day</label>              
                                <FloatingDropdown
                                    label="a day"
                                    name="day"
                                    showLabel={false}
                                    list={[ 
                                            {name: 'Monday'}, 
                                            {name: 'Tuesday'}, 
                                            {name: 'Wednesday'}, 
                                            {name: 'Thursday'},
                                            {name: 'Friday'}
                                        ]}
                                    value={requestForm.day}
                                    displayField='name'
                                    field='name'
                                    errors={formError}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="label-text">Select Time</label>              
                                <FloatingDropdown
                                    label="time"
                                    name="time"
                                    showLabel={false}
                                    list={[ 
                                            {name: '08:00am'}, 
                                            {name: '08:30am'}, 
                                            {name: '09:00am'}, 
                                            {name: '09:30am'}, 
                                            {name: '10:00am'}, 
                                            {name: '10:30am'}, 
                                            {name: '11:00am'}, 
                                            {name: '11:30am'}, 
                                            {name: '12:00pm'},
                                            {name: '12:30pm'},
                                            {name: '01:00pm'},
                                            {name: '01:30pm'},
                                            {name: '02:00pm'},
                                            {name: '02:30pm'},
                                            {name: '03:00pm'},
                                            {name: '03:30pm'},
                                            {name: '04:00pm'},
                                            {name: '04:30pm'},
                                            {name: '05:00pm'}
                                        ]}
                                    value={requestForm.time}
                                    displayField='name'
                                    field='name'
                                    errors={formError}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="action-container">
                        <button className="btn action-btn" onClick={() => setCurrentPage(2)}>Back</button>
                        <button disabled={formError.any()} className="btn action-btn" onClick={() => handleSubmit()}>Book Consultation</button>
                    </div>
                </div>         

                <div className={`consultancy ${currentPage == 4 || loading ? "show" : "exit"}`} >
                    <span onClick={closeModal} className="consultancy-close-butn" > 
                        <FontAwesomeIcon icon={faTimes} className="icon" /> Close
                    </span>
                    {
                        loading && <SimpleSpinner />
                    }
                    {  !loading &&
                        <>
                            {formError.any() && 
                                <div onClick={() => setCurrentPage(1)} class="invalid-feedback">Unable to submit information. Please click here to go back to the form <FontAwesomeIcon icon={faArrowLeft} />.</div>
                            }
                            { !formError.any() &&
                                
                                <div className="success-message"> Thank you! </div>
                            }
                        </>
                    }
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
