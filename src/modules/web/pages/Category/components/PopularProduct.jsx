import { Link } from 'react-router-dom';
import moment from 'moment';
import img3 from '../../../../../assets/img/common/image3.png'
import MiniProductItem from '../../../../../components/common/Product/MiniProductItem';


const PopularProducts = ({popularProducts=[]}) => {
    return (
        <div className="popular-products">
            <section className="popular-products-title">
                <div className="section--title">Popular Products</div>
            </section>
            <section className="popular-products-content">
                
                <div className="stack-items">
                   
                    {popularProducts.map(product => (<MiniProductItem key={product.id} product={product} />))}
                   
                    {!popularProducts.length && <div className="no-result"> Unfortunately, we did not find anything that matches these criteria. </div>}

                </div>
    
            </section>
        </div>
    )

}

export default PopularProducts;