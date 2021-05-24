import { Link } from 'react-router-dom';

import img15 from '../../../../../assets/img/logo/image 15.png'
import img16 from '../../../../../assets/img/logo/image 16.png'
import img17 from '../../../../../assets/img/logo/image 17.png'

const HomeBanner = () => {
    return (
        <section className="home_banner row">
            <div className="col-12 col-md-6 col-lg-6 img-container">
                <img src={img17} />
                <img src={img16} />
            </div>
            <div className="col-12 col-md-6 col-lg-6 img-container">
                <img src={img15} />
            </div>
        </section>
    )

}

export default HomeBanner;