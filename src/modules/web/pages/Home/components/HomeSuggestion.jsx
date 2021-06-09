import { Link } from 'react-router-dom';
import moment from 'moment';
import sug from '../../../../../assets/img/common/Suggested.png'

import MainProductItem from '../../../../../components/common/Product/MainProductItem';

const HomeTopSelling = ({products=[]}) => {
    return (
        <>
            <section className="home_top_suggested">
                <div className="home_top_suggested-content">
                    <div className="suggestion-container">
                        <img className="img-fluid" src={sug} />
                    </div> 
                        <div className="stack-items">
                            
                            {products.map( (product) => (
                                <MainProductItem className="listing"  key={product.id} showRating={true} product={product} />
                            ))}
 
                        </div>
                    </div> 
            </section>
        </>
    )

}

export default HomeTopSelling;