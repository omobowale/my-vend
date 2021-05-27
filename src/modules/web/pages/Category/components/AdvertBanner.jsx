import { Link } from 'react-router-dom';

import img15 from '../../../../../assets/img/logo/image 15.png'
import img16 from '../../../../../assets/img/logo/image 16.png'
import img17 from '../../../../../assets/img/logo/image 17.png'

const AdvertBanner = () => {
    return (
        <section className="home_banner row">
            <div className="col-12 col-md-6 col-lg-6 left-container">
                <div className="img-container">
                    <img className="img-fluid" src={img17} />
                </div>
                <div className="img-container">
                    <img className="img-fluid" src={img16} />
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 img-container">
                <img className="img-fluid" src={img15} />
            </div>
        </section>
    )

}

export default AdvertBanner;