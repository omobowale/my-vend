import { Link } from 'react-router-dom';
import shortid from 'shortid';
import home1 from '../../../../../assets/img/logo/2671.png'
import home2 from '../../../../../assets/img/logo/47861.png'
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
                                <h6 className="home_top--text-small">
                                    The best way to
                                </h6>
                                <h1 className="home_top--text-main">
                                    executing your
                                    projects just got Easier
                                </h1>
                                <h6 className="home_top--text-sub ">
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
            </div>
            ,
            <div className="top-container" key={shortid.generate()}>
                <div className="img-background">
                    <img
                        src={home2}
                        alt=""
                        className='img-fluid'
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
                                    Manage Your Project
                                </h1>
                                <h6 className="home_top--text-sub ">
                                    Livevend helps you get price transparency for your construction materials and products. Access premium consultation services for your constuction projects. 
                                </h6>
                                <div className="home_top--text-call-to-action" onClick={() => featuredRef.current && featuredRef.current.scrollIntoView({ behavior: 'smooth' }) }> 
                                    <span>Get Started</span>
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