import { Link } from 'react-router-dom';
import moment from 'moment';
import img3 from '../../../../../assets/img/common/image3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as hollowHeart } from '@fortawesome/free-regular-svg-icons';
import MiniProductItem from '../../../../../components/common/Product/MiniProductItem';


const RelatedProducts = ({products=[{name: 'Ceramic Wall Tiles 200mm X 300mm', price: 20000, tag:['Floor'], image: img3}]}) => {
    return (
        <div className="mini-products">
            <section className="mini-products-title">
                <div className="section--title">Related Products</div>
            </section>
            <section className="mini-products-content">
                
                <div className="stack-items">
                    
                    {products.map(product => (<MiniProductItem product={product} />))}

                </div>
    
            </section>
        </div>
    )

}

export default RelatedProducts;