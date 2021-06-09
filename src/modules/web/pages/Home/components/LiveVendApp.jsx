import { Link } from 'react-router-dom';

import appstore from '../../../../../assets/img/common/app-store.png'
import googlestore from '../../../../../assets/img/common/google-store.png'
import livevend from '../../../../../assets/img/common/live-vend-app.png'
import livevendproject from '../../../../../assets/img/common/live-vend-project-app.png'

const LiveVendApp = () => {
    return (
        <div className="livevend-app-section">
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
                                <span>Download</span> Livevend Pro App <span>Now!</span>
                            </h1>
                            <h6 className="app-section--text-sub ">
                                To get Your construction Projects Done Right, From the comfort of your smartphone. 
                            </h6>
                            <div className="app-section--text-stores">
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