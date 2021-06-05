import { Link } from 'react-router-dom';
import moment from 'moment';
import img3 from '../../../../../assets/img/common/image3.png'
import MiniProductItem from '../../../../../components/common/Product/MiniProductItem';


const PopularProducts = ({products=[{name: 'Ceramic Wall Tiles 200mm X 300mm', price: 20000, tag:['Floor'], image: img3}]}) => {
    return (
        <div className="popular-products">
            <section className="popular-products-title">
                <div className="section--title">Popular Products</div>
            </section>
            <section className="popular-products-content">
                
                <div className="stack-items">
                   
                    {products.map(product => (<MiniProductItem key={product.id} product={product} />))}
                   
                </div>
    
            </section>
        </div>
    )

}

export default PopularProducts;