import React from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import shortid from 'shortid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faFacebook,
    faPinterest,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faMapMarker, 
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/img/logo/logo.png'

const informationLinked = [
    {
        title: 'SPECIALS',
        href: '/specials',
    },
    {
        title: 'NEW PRODUCTS',
        href: '/new-products',
    },
    {
        title: 'TOP SELLERS',
        href: '/top-sellers',
    },
    {
        title: 'ABOUT US',
        href: '/about',
    },
    {
        title: 'CONTACT US',
        href: 'contact-us'
    },
    {
        title: 'SITEMAP',
        href: 'sitemap'
    }
];

const categoriesLinks = [
    {
        title: 'HAND TOOLS',
        href: '/categories',
    },
    {
        title: 'POWER TOOLS',
        href: '/categories',
    },
    {
        title: 'GARDEN TOOLS',
        href: '/categories',
    },
    {
        title: 'ABRASIVES',
        href: '/categories',
    },
    {
        title: 'ELECTRICAL & LIGHTING',
        href: '/categories',
    },
];

const myAccountLinks = [
    {
        title: 'MY WISHLIST',
        text: '/wishlist',
    },
    {
        title: 'MY CREDIT CODE',
        href: '/credit-code',
    },
    {
        title: 'MY ADDRESSES',
        href: '/addresses',
    },
    {
        title: 'MY PERSONAL INFO',
        href: '/personal-info',
    },
];

const connectLinks = [
    {
        title: '42 avenue des Champs Elysées 75000 Paris France',
        icon: <FontAwesomeIcon color={'#FD8825'} icon={faMapMarker} />,
    },
    {
        title: 'Call Us Now: +(234)8092355555',
        icon: <FontAwesomeIcon color={'#FD8825'} icon={faPhone} />,
    },
    {
        title: 'Chat Us Now: +1(713)474-4127',
        icon: <FontAwesomeIcon color={'#FD8825'} icon={faWhatsapp} />,
    },
    {
        title: 'info@livevend.com',
        icon: <FontAwesomeIcon color={'#FD8825'} icon={faEnvelope} />,
    },
];

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

function Footer(props) {
    const location = useLocation();
    const CHAT_PATHNAME = '/peer/chats';
    return (
        <footer
            className={`footer ${location.pathname === CHAT_PATHNAME ? 'hide' : ''}`}
            >
            <div className="footer-top">
                <div className="container footer-container">
                    <div className="footer-copy-right-container">  
                        <div>
                            <Link to={'/'} className="logo mr-5">
                                <img
                                    src={logo}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div>
                            <p>Livevend.com is an online platform where you can get prices of construction materials and products. It also allows you to compare prices of construction materials across locations, brands, types, and get construction consultation services.</p>
                        </div>
                        <div>
                            <p>(c) 2021</p>
                        </div>
                    </div>
                    <div className="footer-links-container ">
                        <ul className="col-xs-6">
                            <li className="links-head">INFORMATION</li>
                            {informationLinked.map((item) => (
                                <li key={shortid.generate()}>
                                    <Link to={item.href} title={item.title}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="col-xs-6">
                            <li className="links-head">CATEGORIES</li>
                            {categoriesLinks.map(({ title, href, external }) => {
                                return (
                                <li key={shortid.generate()}>
                                    {external ? (
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={title}
                                    >
                                        {' '}
                                        {title}{' '}
                                    </a>
                                    ) : (
                                    <Link to={href} title={title}>
                                        {' '}
                                        {title}{' '}
                                    </Link>
                                    )}
                                </li>
                                );
                            })}
                        </ul>
                        <ul className="col-xs-6">
                            <li className="links-head">MY ACCOUNT</li>
                            {myAccountLinks.map(({ title, href }) => (
                                <li key={shortid.generate()}>
                                    <a
                                        href={href}
                                        title={title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul className="col-xs-6">
                            <li className="links-head">GET IN TOUCH</li>
                            {connectLinks.map(({ title, icon }) => (
                                <li key={shortid.generate()}>
                                    <p>
                                        <span>{icon} </span>
                                        <span>{title} </span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                <div className="footer-bottom-container">
                    
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
                </div>
            </div>
        </footer>
    );
}

export default withRouter(Footer);
