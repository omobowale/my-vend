import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTag} from '@fortawesome/free-solid-svg-icons';
import { faClock, } from '@fortawesome/free-regular-svg-icons';

import img3 from '../../../../../assets/img/logo/image 3.png'

import './MiniProfile.scss';

const HomeFeatured = ({products}) => {
    return (
        <>
            <section className="home_featured_nav">
                <div className="section--title">Featured</div>
                <nav className="navigation">
                    <ul>
                        <li className="m-t-three">
                            <Link
                                to="#"
                                className="active"
                            >
                                Products
                            </Link>
                        </li>
                        <li className="m-t-three">
                            <Link
                                to="#"
                            >
                                Suppliers
                            </Link>
                        </li>
                        <li className="m-t-three">

                            <Link to="#"
                                >
                                Contractors
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className="row home_featured_items">
                <div className="col-lg-3 stack-row-items">
                    <div className="stack-item main-item">
                        <div className="stack-content">
                            <img src={img3} />
                            <div className="mini-profile-text">
                                <h4 className="work"> High  Grade LiveVend Cement</h4>
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
                <div className="col-lg-9 stack-items row">

                    <div className="stack-item horizontal col-6 col-sm-6 col-md-6 col-lg-6">
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

                    <div className="stack-item horizontal col-6 col-sm-6 col-md-6 col-lg-6">
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
    
                    <div className="stack-item horizontal col-6 col-sm-6 col-md-4 col-lg-4">
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

                    <div className="stack-item horizontal col-6 col-sm-6 col-md-4 col-lg-4">
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
                    <div className="stack-item horizontal col-6 col-sm-6 col-md-4 col-lg-4">
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
            </section>
        </>
    )

}

export default HomeFeatured;