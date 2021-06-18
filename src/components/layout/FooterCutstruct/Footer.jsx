import React, {forwardRef} from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import shortid from 'shortid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faFacebook,
    faPinterest
} from '@fortawesome/free-brands-svg-icons';
import footerImage from '../../../assets/img/common/footer-image.png'


const socialLinks = [
    {
        title: 'Facebook',
        icon: <FontAwesomeIcon color={'#FD8825'} icon={faFacebook} />,
        href: 'https://facebook.com/livevend',
    },
    {
        title: 'Twitter',
        icon: <FontAwesomeIcon color={'#FD8825'} icon={faTwitter} />,
        href: 'https://www.twitter.com/livevend',
    },
    {
        title: 'LinkedIn',
        icon: <FontAwesomeIcon color={'#FD8825'} icon={faPinterest} />,
        href: 'https://www.linkedin.com/company/livevend',
    },
];

const Footer = forwardRef((props, ref) =>{
    const location = useLocation();
    const CHAT_PATHNAME = '/peer/chats';
    return (
        <footer
            className={`footer-cutstruct ${location.pathname === CHAT_PATHNAME ? 'hide' : ''}`}
            >
            <div className="footer-cutstruct-top">
                <div className="footer-container">
                    <div className="nav-border" />

                    <div className="footer-right-container">  
                        <div className="footer-img-container">
                            <img
                                src={footerImage}
                                className="img-fluid"
                                alt="logo"
                            />
                        </div>
                    </div>
                    <div className="footer-links-container ">

                        <h2 className="footer-header" ref={ref} >Contact Us</h2>

                        <div className="row">
                            <ul className="col-6">
                                <li className="links-head">FOR CLIENTS</li>
                                
                                <li key={shortid.generate()}>
                                    <p>+ 234 890 456 7890</p>
                                    <p>client@custruct.com</p>
                                </li>
                            </ul>
                            <ul className="col-6">
                                <li className="links-head">OFFICE ADDRESS</li>
                                
                                <li key={shortid.generate()}>
                                    <p>16, somewhere in the middle,</p>
                                    <p>of no where</p>
                                    <p>Lagos, Nigeria</p>
                                </li>

                            </ul>
                            <ul className="col-6">
                                <li className="links-head mt-5">FOR CONTRACTORS</li>
                                
                                    <li key={shortid.generate()}>
                                        <p>+ 234 890 456 7890</p>
                                        <p>client@custruct.com</p>
                                    </li>
                                
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-cutstruct-bottom">
                <div className="footer-cutstruct-bottom-container">
                    <div className="nav-border" />

                    <div className="footer-social-media">
                        <ul>
                            {socialLinks.map(({ title, icon, href }) => (
                                <li key={shortid.generate()}>
                                    <a
                                        href={href}
                                        title={title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-copy-right">
                        <p>Cutstruct 2021 (c). All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
})

export default withRouter(Footer);
