import { forwardRef } from 'react';

const Service = forwardRef((props, ref)  => {
    
    return (
        <section className="service-section" ref={ref} >
            <div className="page-container">
                <div className="nav-border" />
                <div className="single-page-nav">
                    <span className="single-page-dash" />
                    <div className="single-page-title"> service </div>
                </div>

                <div className="nav-content-section">
                    <div className="service-section-container">
                        <h2 className="section-header">Build the future, together</h2>
                        <div className="service-list-container">
                            <ul>
                                <li><p>Compare Price for Materials</p></li>
                                <li><p>Hire Contractors</p></li>
                            </ul>

                            <ul>
                                <li><p>Manage Project</p></li>
                                <li><p>Consult with Experts</p></li>
                            </ul>
                            <ul>
                                <li><p>Find Vetted Supplier</p></li>
                                <li><p>Save Progress on the Cloud</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

})

export default Service;