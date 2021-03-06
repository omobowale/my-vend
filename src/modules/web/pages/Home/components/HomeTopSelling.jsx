import { Link } from 'react-router-dom';
import shortid from 'shortid';
import img3 from '../../../../../assets/img/logo/image 3.png'

import MainProductItem from '../../../../../components/common/Product/MainProductItem';
import DealCountDown from './DealCountDown';
import DealOfTheWeek from './DealOfTheWeek';

const HomeTopSelling = ({products=[]}) => {
    return (
        <>
            <section className="home_featured_nav">
                <div className="section--title">Top Selling Products</div>
            </section>
            <section className="home_top_seller">
                <div className="home_top_seller-content">
                    <div className="col">
                        <div className="stack-items">
                            
                            {products.slice(0,4).map( (product) => (
                                <MainProductItem className="flexitem" key={shortid.generate()} product={product} />
                            ))}
                           
                        </div>
                        <div className="stack-items pt-2">
                            
                            {products.slice(4,8).map( (product) => (
                                <MainProductItem className="flexitem" key={product.id} product={product} />
                            ))}

                        </div>
                    
                    </div>

                    <DealOfTheWeek  />

                </div>    
            </section>
        </>
    )

}

export default HomeTopSelling;