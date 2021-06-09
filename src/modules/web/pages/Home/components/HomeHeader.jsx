import { Link } from 'react-router-dom';
import shortid from 'shortid';
import home1 from '../../../../../assets/img/common/home-slider1.png'
import home2 from '../../../../../assets/img/common/home-slider2.jpg'
import home3 from '../../../../../assets/img/common/home-slider3.jpg'
import HomeCarousel from './HomeCarousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

const HomeHeader = ({featuredRef}) => {

    const carousels = () => {
        return [
            <div className="top-container" key={shortid.generate()}>
                <div className="img-background">
                    <img
                        src={home1}
                        alt="a freelancer"
                        className="full-screen"
                    />
                </div>
                <div className="container">
                    <div className="left-container">
                        
                        <div className="home_top-left">
                            <div className="home_top--text">
                                <h6 className="home_top--text-small ">
                                    The best way to
                                </h6>
                                <h1 className="home_top--text-main ">
                                    executing your
                                    projects just got Easier
                                </h1>
                                <h6 className="home_top--text-sub">
                                    Livevend helps you get price transparency for your construction materials and products. Access premium consultation services for your constuction projects.
                                </h6>

                                <div className="home_top--text-call-to-action" onClick={() => featuredRef.current && featuredRef.current.scrollIntoView({ behavior: 'smooth' }) }> 
                                    <span>Go to Construction Material</span>
                                    <span className="call-to-action-icon">
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            size={15}
                                            />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            <div className="top-container" key={shortid.generate()}>
                <div className="img-background">
                    <img
                        src={home2}
                        alt="a freelancer"
                        className="full-screen"
                    />
                </div>
                <div className="container">
                    <div className="left-container">
                        
                        <div className="home_top-left">
                            <div className="home_top--text">
                                <h6 className="home_top--text-small text-white fade80">
                                    The best way to
                                </h6>
                                <h1 className="home_top--text-main text-white">
                                    Welcome to the World of Construction Price Discovery.
                                </h1>
                                <h6 className="home_top--text-sub text-white fade80">
                                    Livevend.com is an online platform where you can access standard prices of construction products and materials. 
                                    It also allows you to seamlessly compare prices of construction materials across brands, locations and types.
                                </h6>

                                <div className="home_top--text-call-to-action" onClick={() => featuredRef.current && featuredRef.current.scrollIntoView({ behavior: 'smooth' }) }> 
                                    <span> Let's get Started</span>
                                    <span className="call-to-action-icon">
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            size={15}
                                            />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ,
            <div className="top-container" key={shortid.generate()}>
                <div className="img-background">
                    <img
                        src={home3}
                        alt=""
                        className="full-screen"
                    />
                </div>
                <div className="container">
                    <div className="left-container">                    
                        <div className="home_top-left">
                            <div className="home_top--text">
                                <h6 className="home_top--text-small">
                                    The best way to
                                </h6>
                                <h1 className="home_top--text-main">
                                    Have a Product You Want to Tell Everyone About?
                                </h1>
                                <h6 className="home_top--text-sub ">
                                Why not contact us so we could feature your construction products and materials on our platform to help reach a wide range of tailored audience which includes construction professionals, real estate businesses & private clients. 
                                </h6>
                                <div className="home_top--text-call-to-action" onClick={() => featuredRef.current && featuredRef.current.scrollIntoView({ behavior: 'smooth' }) }> 
                                    <span>Get listed from here</span>
                                    <span className="call-to-action-icon">
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            size={15}
                                            />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ]
    }

    return (
        <section className="home_top">
            <div className="top-container">
                <HomeCarousel media={carousels()} />
            </div>
        </section>
    )

}

export default HomeHeader;