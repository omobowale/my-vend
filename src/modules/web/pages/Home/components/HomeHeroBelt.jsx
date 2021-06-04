import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTag} from '@fortawesome/free-solid-svg-icons';
import { faClock, } from '@fortawesome/free-regular-svg-icons';
import timeImg from '../../../../../assets/img/common/vector-time.png';
import feedbackImg from '../../../../../assets/img/common/vector-feedback.png';
import supportImg from '../../../../../assets/img/common/vector-support.png';
import measuresImg from '../../../../../assets/img/common/vector-measures.png';
import ticketImg from '../../../../../assets/img/common/vector-ticket.png';


const HomeHeroBelt = () => {
    return (
        <section className="home_hero_belt">
            <div className="home_hero_belt-flex">
                <div className="home_hero_item col-sm-6">
                    <div className="home_hero_item-icon">
                        <img src={timeImg} className="img-fluid" />
                    </div>
                    <div className="home_hero_item--text">
                        <h6>365 DAYS A YEAR</h6>
                        ALWAYS AVAILABLE
                    </div>
                </div>
                <div className="home_hero_item col-sm-6">
                    <div className="home_hero_item-icon">
                        <img src={ticketImg} className="img-fluid" />
                    </div>
                    <div className="home_hero_item--text">
                        <h6>High discount</h6>
                        Save some momey
                    </div>
                </div>
                <div className="home_hero_item col-sm-6">
                    <div className="home_hero_item-icon">
                        <img src={feedbackImg} className="img-fluid" />
                    </div>
                    <div className="home_hero_item--text">
                        <h6>100% Positive</h6>
                        Feedbacks
                    </div>
                </div>
                <div className="home_hero_item col-sm-6">
                    <div className="home_hero_item-icon">
                        <img src={measuresImg} className="img-fluid" />
                    </div>
                    <div className="home_hero_item--text">
                        <h6>Price Comparison</h6>
                        Different Suppliers
                    </div>
                </div>
                <div className="home_hero_item col-sm-6">
                    <div className="home_hero_item-icon">
                        <img src={supportImg} className="img-fluid" />
                    </div>
                    <div className="home_hero_item--text">
                        <h6>24/7 Agents</h6>
                        For Support
                    </div>
                </div>

            </div>
        </section>
    )

}

export default HomeHeroBelt;