import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faFacebook,
    faPinterest,
    faInstagramSquare
} from '@fortawesome/free-brands-svg-icons';
import shortid from 'shortid';
import SearchForm from '../common/SearchForm/SearchForm';


const SubscriptionSection = ({}) => {

    const socialLinks = [
        {
            title: 'Facebook',
            icon: <FontAwesomeIcon color={'#000'} icon={faFacebook} />,
            href: 'https://facebook.com/livevend',
        },
        {
            title: 'Twitter',
            icon: <FontAwesomeIcon color={'#000'} icon={faTwitter} />,
            href: 'https://www.twitter.com/livevend',
        },
        {
            title: 'LinkedIn',
            icon: <FontAwesomeIcon color={'#000'} icon={faInstagramSquare} />,
            href: 'https://www.linkedin.com/company/livevend',
        }
    ];
      
    return (

        <div  className="bg-theme-secondary p-5 subscription-section">
            <div className="container">
                <div className="row m-0">

                    <div className="col-md-4 subscription-section-first">
                        <div className="subscription-section-first-container">
                            <h3 className="text-header">Subscribe To Our Newsletter</h3>
                            <p className="">We have been transforming ideas and visions into award winning projects</p>
                        </div>
                    </div>
                    <div className="col-md-5 subscription-section-middle">

                        <div className="subscription-section-middle-container">
                            <div className="search-subscription">
                                <form
                                    className="search-form"
                                    autoComplete="off"
                                    >
                                    <input
                                        type="text"
                                        name="search-field"
                                        placeholder="Enter your email here"
                                        list="suggestions"
                                    />
                                    <button type="submit" className="button search-button">
                                        <span className="">Subscribe</span>
                                    </button>
                                </form>
                            </div>
                            <p>Yes, I want to receive news and offers related to PriceRunner's product range, competitions and recommendations via email. I can withdraw my consent at any time. Read more in our Privacy Policy.</p>
                        </div>
                    </div>

                    <div className="col-md-3 subscription-section-last">
                        <div className="subscription-section-last-container">
                            <div className="text-label">Let's Connect:</div>
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
            </div> 
        </div>

    )

}

export default SubscriptionSection;