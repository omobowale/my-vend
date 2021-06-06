import MiniProductItem from './MiniProductItem';


const RelatedProducts = ({products=[], title="Related Products"}) => {
    return (
        <div className="mini-products">
            <section className="mini-products-title">
                <div className="section--title">{title}</div>
            </section>
            <section className="mini-products-content">
                
                <div className="stack-items">
                    
                    {products.map(product => (<MiniProductItem key={product.id} product={product} />))}

                    {!products.length && <div className="no-result"> Unfortunately, we did not find anything that matches these criteria. </div>}

                </div>
    
            </section>
        </div>
    )

}

export default RelatedProducts;