import { Link } from 'react-router-dom';

import img15 from '../../../../../assets/img/logo/image 15.png'
import img16 from '../../../../../assets/img/logo/image 16.png'
import img17 from '../../../../../assets/img/logo/image 17.png'

const HomeBanner = () => {
    return (
        <section className="home_banner">
            <img src={img17} />
            <img src={img16} />
            <img src={img15} />
        </section>
    )

}

export default HomeBanner;