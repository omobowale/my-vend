import { useRef } from 'react';
import { Link } from 'react-router-dom';

import FeaturedProductItem from './FeaturedProductItem';
import shortid from 'shortid';

const HomeFeatured = ({mainProduct={}, featuredProducts=[]}) => {
    
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

                    <FeaturedProductItem className="stack-item main-item" showBtn={true} key={shortid.generate()} product={mainProduct} showSaveIcon={true} />

                </div>
                <div className="col-12 col-sm-12 col-md-9 col-lg-9 stack-items row">

                    {featuredProducts.slice(0,2).map( (product) => (
                        <FeaturedProductItem className="stack-item horizontal col-6 col-sm-6 col-md-6 col-lg-6" key={shortid.generate()} product={product} showSaveIcon={true} />
                    ))}

                    {featuredProducts.slice(2,5).map( (product) => (
                        <FeaturedProductItem className="stack-item horizontal col-6 col-sm-6 col-md-4 col-lg-4" key={shortid.generate()} product={product} showSaveIcon={true} />
                    ))}

                </div>      
            </section>
        </>
    )

}

export default HomeFeatured;