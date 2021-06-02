import { Link } from 'react-router-dom';
import moment from 'moment';
import shortid from 'shortid';

import ProductItem from './ProductItem';

const ProductList = ({products=[]}) => {
    return (
            <section>
                <div className="product-list">
                    <div className="col">
                        <div className="stack-items row ">
                            
                            {products.map( (product) => (
                                <ProductItem key={shortid.generate()} product={product} />
                            ))}
                        </div>
                    </div>
                </div>    
            </section>
    )

}

export default ProductList;