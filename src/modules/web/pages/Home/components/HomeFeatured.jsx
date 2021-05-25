import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTag} from '@fortawesome/free-solid-svg-icons';
import { faClock, } from '@fortawesome/free-regular-svg-icons';

import img3 from '../../../../../assets/img/logo/image 3.png'

import ProductMiniProfile from './ProductMiniProfile';
import shortid from 'shortid';

const HomeFeatured = ({products=[]}) => {
    const featured = [
        {
            image: ["https://livevend.s3.us-east-2.amazonaws.com/wheelbarrow.jpg"],
            tag: [
            "white",
            "cement"
            ],
            name: "White Cement 50kg",
            slug: "white-cement-50kg",
            price: 50000,
            currency: {
                _id: "609e7f9d206aa04dae9bc512",
                name: "Naira",
                short: "NGN",
                symbol: "₦",
            },
            location: "lagos",
            desc: "This is the product description",
            quantity: "5 Pieces",
            measurement: "50 by 50",
            type: "Standard",
            weight: 50,
        },
        {
            image: ["https://livevend.s3.us-east-2.amazonaws.com/wheelbarrow.jpg"],
            tag: [
            "white",
            "cement"
            ],
            name: "White Cement 50kg",
            slug: "white-cement-50kg",
            price: 50000,
            currency: {
                _id: "609e7f9d206aa04dae9bc512",
                name: "Naira",
                short: "NGN",
                symbol: "₦",
            },
            location: "lagos",
            desc: "This is the product description",
            quantity: "5 Pieces",
            measurement: "50 by 50",
            type: "Standard",
            weight: 50,
        },
        {
            image: [img3],
            tag: [
            "white",
            "cement"
            ],
            name: "White Cement 50kg",
            slug: "white-cement-50kg",
            price: 50000,
            currency: {
                _id: "609e7f9d206aa04dae9bc512",
                name: "Naira",
                short: "NGN",
                symbol: "₦",
            },
            location: "lagos",
            desc: "This is the product description",
            quantity: "5 Pieces",
            measurement: "50 by 50",
            type: "Standard",
            weight: 50,
        }

    ];
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
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 stack-row-items">
                    <div className="stack-item main-item">
                        <div className="stack-content">
                            <img src={img3} />
                            <div className="stack-content-text">
                                <h4 className="work"> High  Grade LiveVend Cement</h4>
                                <div className="stack-content-bottom">
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
                <div className="col-12 col-sm-12 col-md-9 col-lg-9 stack-items row">

                    <div className="stack-item horizontal col-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="stack-content">
                            <img src={img3} />
                            <div className="stack-content-text">
                                <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                <div className="stack-content-bottom">
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


                    {products.map( (product) => (
                        <ProductMiniProfile className="stack-item horizontal col-6 col-sm-6 col-md-6 col-lg-6" key={shortid.generate()} product={product} showSaveIcon={true} />
                    ))}

                    {featured.map( (product) => (
                        <ProductMiniProfile className="stack-item horizontal col-6 col-sm-6 col-md-6 col-lg-6" key={shortid.generate()} product={product} showSaveIcon={true} />
                    ))}

                </div>      
            </section>
        </>
    )

}

export default HomeFeatured;