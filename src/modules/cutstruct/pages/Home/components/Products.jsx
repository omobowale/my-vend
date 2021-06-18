import { forwardRef } from 'react';
import LiveVendApp from './LiveVendApp';

const Products = forwardRef((props, ref)  => {
    
    return (
        <>
        <section className="product-section" ref={ref} >
            <div className="page-container">
                <div className="nav-border" />
                <div className="single-page-nav">
                    <span className="single-page-dash" />
                    <div className="single-page-title"> products </div>
                </div>
                <div className="nav-content-section">
                    <div className="product-section-container">
                        <h2 className="section-header">Construction projects made easy, and better.</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="product-section">
            <div className="page-container">
                <div className="nav-border" />
                <LiveVendApp />
            </div>
        </section>
        </>
    )

})

export default Products;