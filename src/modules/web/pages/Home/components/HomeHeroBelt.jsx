import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTag} from '@fortawesome/free-solid-svg-icons';
import { faClock, } from '@fortawesome/free-regular-svg-icons';

const HomeHeroBelt = () => {
    return (
        <section className="home_hero_belt">
            <div className="home_hero_belt-flex">
                <div className="home_hero_item col-sm-6">
                    <div className="home_hero_item-icon">
                        <FontAwesomeIcon icon={faClock} className="icon" />
                    </div>
                    <div className="home_hero_item--text">
                        <h6>365 DAYS A YEAR</h6>
                        ALWAYS AVAILABLE
                    </div>
                </div>
                <div className="home_hero_item col-sm-6">
                    <div className="home_hero_item-icon">
                        <FontAwesomeIcon icon={faTag} className="icon" />
                    </div>
                    <div className="home_hero_item--text">
                        <h6>High discount</h6>
                        Save some momey
                    </div>
                </div>
                <div className="home_hero_item col-sm-6">
                    <div className="home_hero_item-icon">
                        <FontAwesomeIcon icon={faTag} className="icon" />
                    </div>
                    <div className="home_hero_item--text">
                        <h6>100% Positive</h6>
                        Feedbacks
                    </div>
                </div>
                <div className="home_hero_item col-sm-6">
                    <div className="home_hero_item-icon">
                        <FontAwesomeIcon icon={faTag} className="icon" />
                    </div>
                    <div className="home_hero_item--text">
                        <h6>Price Comparison</h6>
                        Different Suppliers
                    </div>
                </div>
                <div className="home_hero_item col-sm-6">
                    <div className="home_hero_item-icon">
                        <FontAwesomeIcon icon={faTag} className="icon" />
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