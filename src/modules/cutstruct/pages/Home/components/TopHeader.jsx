import { forwardRef } from 'react';

const TopHeader = (props)  => {
    
    return (
            <div className="page-container">
                <div className="home-banner-container-text">
                    <div className="nav-border" />

                    <div className="home-top-container">
                        <h1 className="home-banner-text-main">Leveraging technology to transform the construction industry.</h1>
                    </div>
                    <div className="home-bottom-container">
                        <p className="home-banner-text-sub">Finding construction materials and getting price estimates for your projects can be a pain. It is even more challenging to find reliable suppliers and contractors that can deliver the materials and execute the project you want without exploiting you and costing you more time and money. For a sector that is worth over $12.5 trillion globally, this is a huge challenge and LiveVend solves this problem.</p>
                        <p className="home-banner-text-sub">LiveVend is an online platform where you can get prices of construction materials in real-time; find vetted suppliers and get expert consultations for your projects. The LiveVendPro App also helps you monitor your key project metrics - cost and time, for a more efficient project execution.</p>
                        <p className="home-banner-text-sub">We have built an innovative solution to help eliminate the pains experienced in the construction industry - that means lower buying costs, less effort and more satisfaction. The Livevend platform has been created to make things easier and safer for everybody. Whether you are a builder, project manager, contractor or private individual, execute more while cutting your costs and stress with LiveVend.</p>
                        
                        <div className="hero-banner-container">
                            <div className="hero-item">
                                <p className="hero-item-bold">28</p>
                                <span className="hero-item-text">Suppliers onboarded</span>
                            </div>

                            <div className="hero-item">
                                <p className="hero-item-bold">102</p>
                                <span className="hero-item-text">Properities Built</span>
                            </div>
                            <div className="hero-item">
                                <p className="hero-item-bold">19</p>
                                <span className="hero-item-text">Products listed</span>
                            </div>
                        </div>
                    
                        {/* <div className="nav-border" /> */}
                    
                    </div>
                    <div className="text-background-clear"></div>

                </div>
            </div>
    )

}

export default TopHeader;