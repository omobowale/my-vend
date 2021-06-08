import { Link } from 'react-router-dom';
import moment from 'moment';
import img3 from '../../../../../assets/img/common/image3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as hollowHeart } from '@fortawesome/free-regular-svg-icons';
import MiniProductItem from '../../../../../components/common/Product/MiniProductItem';


const RelatedProducts = ({relatedProducts=[]}) => {
    return (
        <div className="mini-products">
            <section className="mini-products-title">
                <div className="section--title">Related Products</div>
            </section>
            <section className="mini-products-content">
                
                <div className="stack-items">
                    
                    {relatedProducts.map(product => (<MiniProductItem key={product.id} product={product} />))}

                    {!relatedProducts.length && <div className="no-result"> Unfortunately, we did not find anything that matches these criteria. </div>}

                </div>
    
            </section>
        </div>
    )

}

export default RelatedProducts;