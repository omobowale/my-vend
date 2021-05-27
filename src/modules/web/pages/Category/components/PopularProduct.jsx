import { Link } from 'react-router-dom';
import moment from 'moment';
import img3 from '../../../../../assets/img/common/image3.png'



const PopularProducts = ({products=[]}) => {
    return (
        <>
            <section className="">
                <div className="section--title">Popular Products</div>
            </section>
            <section className="">
                <div className="popular-products-content">
                
                    <div className="stack-items">
                        
                        
                        <div className="stack-item">
                            <div className="stack-content">
                                <div className="stack-content-img">
                                    <img src={img3} className="img-fluid" />
                                </div>
                                <div className="stack-content-text">
                                    <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                    <div className="stack-content-bottom">
                                        <div className="pricing">
                                            <p className="starting_from_main">
                                            2,000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="stack-item">
                            <div className="stack-content">
                                <div className="stack-content-img">
                                    <img src={img3} className="img-fluid" />
                                </div>
                                <div className="stack-content-text">
                                    <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                    <div className="stack-content-bottom">
                                        <div className="pricing">
                                            <p className="starting_from_main">
                                            2,000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
        </>
    )

}

export default PopularProducts;