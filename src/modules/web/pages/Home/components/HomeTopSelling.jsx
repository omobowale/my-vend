import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTag} from '@fortawesome/free-solid-svg-icons';
import { faClock, } from '@fortawesome/free-regular-svg-icons';

import img3 from '../../../../../assets/img/logo/image 3.png'

import './MiniProfile.scss';

const HomeTopSelling = () => {
    return (
        <>
            <section className="home_featured_nav">
                <div className="section--title">Top Selling Products</div>
            </section>
            <section className="home_featured_items">
                <div className="stack-row-items">
                    <div className="stack-items">
                        <div className="stack-item">
                            <div className="stack-content">
                                <img src={img3} />
                                <div className="mini-profile-text">
                                    <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                    <div className="mini-profile-bottom">
                                        <div className="pricing">
                                            <p className="starting_from_caption">from</p>
                                            <p className="starting_from_main">
                                            2,000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="stack-item">
                            <div className="stack-content">
                                <img src={img3} />
                                <div className="mini-profile-text">
                                    <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                    <div className="mini-profile-bottom">
                                        <div className="pricing">
                                            <p className="starting_from_caption">from</p>
                                            <p className="starting_from_main">
                                            2,000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="stack-item">
                            <div className="stack-content">
                                <img src={img3} />
                                <div className="mini-profile-text">
                                    <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                    <div className="mini-profile-bottom">
                                        <div className="pricing">
                                            <p className="starting_from_caption">from</p>
                                            <p className="starting_from_main">
                                            2,000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="stack-item">
                            <div className="stack-content">
                                <img src={img3} />
                                <div className="mini-profile-text">
                                    <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                    <div className="mini-profile-bottom">
                                        <div className="pricing">
                                            <p className="starting_from_caption">from</p>
                                            <p className="starting_from_main">
                                            2,000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="stack-item">
                            <div className="stack-content">
                                <img src={img3} />
                                <div className="mini-profile-text">
                                    <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                    <div className="mini-profile-bottom">
                                        <div className="pricing">
                                            <p className="starting_from_caption">from</p>
                                            <p className="starting_from_main">
                                            2,000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="stack-item">
                            <div className="stack-content">
                                <img src={img3} />
                                <div className="mini-profile-text">
                                    <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                    <div className="mini-profile-bottom">
                                        <div className="pricing">
                                            <p className="starting_from_caption">from</p>
                                            <p className="starting_from_main">
                                            2,000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="stack-item ">
                    
                </div>     
            </section>
        </>
    )

}

export default HomeTopSelling;