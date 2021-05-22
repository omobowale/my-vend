import { Link } from 'react-router-dom';
import shortid from 'shortid';
import home1 from '../../../../../assets/img/logo/2671.png'
import home2 from '../../../../../assets/img/logo/47861.png'
import HomeCarousel from './HomeCarousel';

const HomeHeader = () => {

    const carousels = () => {
        return [
            <div className="top-container" key={shortid.generate()}>
                <div className="img-background">
                    <img
                        src={home1}
                        alt="a freelancer"
                        className={`full-screen  `}
                    />
                </div>
                <div className="left-container">
                    
                    <div className="home_top-left">
                        <div className="home_top--text">
                            <h6 className="home_top--text-small">
                                The best way to
                            </h6>
                            <h1 className="home_top--text-main bold">
                                Execute Your Project
                            </h1>
                            <h6 className="home_top--text-sub ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies senectus nec porta aliquam. Sed auctor ut ullamcorper massa leo, fermentum. 
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            ,
            <div className="top-container" key={shortid.generate()}>
                <div className="img-background">
                    <img
                        src={home2}
                        alt="a freelancer"
                        className={`full-screen  `}
                    />
                </div>
                <div className="left-container">
                    
                    <div className="home_top-left">
                        <div className="home_top--text">
                            <h6 className="home_top--text-small">
                                The best way to
                            </h6>
                            <h1 className="home_top--text-main bold">
                                Manage Your Project
                            </h1>
                            <h6 className="home_top--text-sub ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies senectus nec porta aliquam. Sed auctor ut ullamcorper massa leo, fermentum. 
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        ]
    }

    return (
        <section className="home_top">
            <div className="top-container">
                <HomeCarousel media={carousels()} />
            </div>

            {/* <div className="top-container">
                <div className="img-background">
                    <img
                        src={home1}
                        alt="a freelancer"
                        className={`full-screen  `}
                    />
                </div>
                <div className="left-container">
                    
                    <div className="home_top-left">
                        <div className="home_top--text">
                            <h6 className="home_top--text-small">
                                The best way to
                            </h6>
                            <h1 className="home_top--text-main bold">
                                Execute Your Project
                            </h1>
                            <h6 className="home_top--text-sub ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies senectus nec porta aliquam. Sed auctor ut ullamcorper massa leo, fermentum. 
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
         */}
        </section>
    )

}

export default HomeHeader;