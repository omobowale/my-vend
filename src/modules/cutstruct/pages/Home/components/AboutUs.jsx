import { useRef, forwardRef } from 'react';
import about1 from '../../../../../assets/img/common/about-banner1.png';
import about2 from '../../../../../assets/img/common/about-banner2.png';

const AboutUs = forwardRef((props, ref) => {
    
    return (
        <section className="about-us-section" ref={ref} >
            <div className="page-container">
                <div className="nav-border" />
                <div className="single-page-nav">
                    <span className="single-page-dash" />
                    <div className="single-page-title"> about us </div>
                </div>
                <div className="nav-content-section">
                    <div className="about-image-container">
                        <img className="img-fluid " src={about1} />
                        <div className="stroke-text">construction</div>
                    </div>
                    {/* <div></div> */}
                    <div className="about-mission-container">
                        <h2 className="section-header">Our Mission</h2>

                        <p className="section-message">To build the most comprehensive and powerful digital construction marketplace, where you can find all construction business partners, products and services in one place.</p>
                    </div>
                    <div className="about-image-container-v">
                        <img className="img-fluid" src={about2} />
                    </div>
                </div>
            </div>
        </section>
    )

})

export default AboutUs;