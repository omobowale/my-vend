import { Link } from 'react-router-dom';

import appstore from '../../../../../assets/img/common/app-store.png';
import googlestore from '../../../../../assets/img/common/play-store.svg';
import livevend from '../../../../../assets/img/common/live-vend-app.png';
import livevendproject from '../../../../../assets/img/common/live-vend-project-app.png';
import background from '../../../../../assets/img/common/product-background.png';

const LiveVendApp = () => {
    return (
        <div className="livevend-app-section">
            
            <div className="background-img">
                <img className="img-fluid" src={background} />
            </div>
            <div className="clear-shift"></div>
            <div className="livevend-app-section-content">
            <div className="container">
                <div className="img-background">
                    <img
                        src={livevend}
                        alt="a freelancer"
                        className="livevend-app"
                    />
                    <img
                        src={livevendproject}
                        alt="a freelancer"
                        className="livevend-project-app"
                    />
                </div>
                <div className="right-container">
                    
                        <div className="app-section--text">
                            <h1 className="app-section--text-main text-capitalize ">
                                <span>Mobile App</span> LiveVendPro App
                            </h1>
                            <h6 className="app-section--text-sub ">
                                the LiveVendPro App helps you monitor your key project metrics - cost and time, for a more efficient project execution. eliminate the stressful paperworks with our personalized dashboard stored on the cloud TO TRACK YOUR project PROGRESS IN REal-time.
                            </h6>
                            
                        </div>

                        <div className="app-store-container ">
                            <div className="app-store-container-left">
                                <div className="store-text">
                                    <span>Download</span> LiveVendPRO app <span>Now!</span>
                                </div>
                            </div>
                            <div className="app-store-container-stores">
                                <Link className="livevend-app-section-img">
                                    <img
                                        className="img-fluid"
                                        src={googlestore}
                                        alt="a freelancer"
                                    />
                                </Link>
                                <Link className="livevend-app-section-img" >
                                    <img
                                        className="img-fluid"
                                        src={appstore}
                                        alt="a freelancer"
                                    />
                                </Link>
                            </div>
                        </div>
                    
                </div>
            </div>
            </div>
        </div>
                
    )

}

export default LiveVendApp;