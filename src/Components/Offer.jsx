import './style.css';
const Offer = () => {
    return (
        <>
            <section className="offer_section hero_next_section-margin layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            what we offer
                        </h2>
                        <p>
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The point
                            of using Lorem
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="content-box">
                                <div className="img-box">
                                   <img src={require('./images/shield.png')} alt="" style={{width: '50px'}} />
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        safety first
                                    </h6>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-box">
                                <div className="img-box">
                                  <img src={require('./images/photo-size.png')} alt="" style={{width: '50px'}} />
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        small className Size
                                    </h6>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-box">
                                <div className="img-box">
                                  <img src={require('./images/help.png')} alt="" style={{width: '50px'}} />
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        infant care
                                    </h6>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-box">
                                <div className="img-box">
                                <img src={require('./images/education.png')} alt="" style={{width: '50px'}} />
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        cretive lessons
                                    </h6>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-box">
                                <div className="img-box">
                                  <img src={require('./images/vegan.png')} alt="" style={{width: '50px'}} />
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        certified teachers
                                    </h6>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-box">
                                <div className="img-box">
                                  <img src={require('./images/planet-earth.png')} alt="" style={{width: '50px'}} />
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        happy environment
                                    </h6>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Offer;