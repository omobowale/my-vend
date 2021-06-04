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
                            
                            { products.map( (product) => (
                                <ProductItem key={shortid.generate()} product={product} />
                            ))}


                            {!products.length && <div className="no-result"> Unfortunately, we did not find anything that matches these criteria. </div>}
                        </div>
                    </div>
                </div>    
            </section>
    )

}

export default ProductList;