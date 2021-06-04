import { Link } from 'react-router-dom';
import moment from 'moment';
import img3 from '../../../../../assets/img/logo/image 3.png'
import sug from '../../../../../assets/img/common/Suggested.png'

import './MiniProfile.scss';
import ProductMiniProfile from './ProductMiniProfile';
import DealCountDown from './DealCountDown';
import { renderRating } from '../../../../../utils/rating';

const HomeTopSelling = ({products=[]}) => {
    return (
        <>
            <section className="home_top_suggested">
                <div className="home_top_suggested-content">
                    <div className="suggestion-container">
                        <img src={sug} />
                    </div> 
                        <div className="stack-items">
                            
                            {products.map( (product) => (
                                <ProductMiniProfile showRating={true} product={product} />
                            ))}
 
                        </div>
                    </div> 
            </section>
        </>
    )

}

export default HomeTopSelling;