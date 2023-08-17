import './style.css'
const Header = () => {
    return (
        <>
            <div className='hero_area'>
                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <a className="navbar-brand" href="index.html">
                                <img src={require('./images/logo.png')} alt="Logo" />
                                <span>
                                    Brighton
                                </span>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index.html">
                                                Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about.html"> About </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="program.html"> Programs </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html"> Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

                <section className=" slider_section position-relative" style={{ backgroundImage: '' }}>
                    <div className="container">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            {/* <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                            </ol> */}
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail-box">
                                                <h1>
                                                    A Perfect Learning Center <br />
                                                    <span>
                                                        For Your Kids
                                                    </span>
                                                </h1>
                                                <p>
                                                    It is a long established fact that a reader will be distracted
                                                    by the readable content of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters, as
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn-1">
                                                        Read More
                                                    </a>
                                                    <a href="" className="btn-2">
                                                        Contact us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div class="col-md-6">
                                            <div class="detail-box">
                                                <h1>
                                                    A Perfect Learning Center <br />
                                                    <span>
                                                        For Your Kids
                                                    </span>
                                                </h1>
                                                <p>
                                                    It is a long established fact that a reader will be distracted
                                                    by the readable content of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters, as
                                                </p>
                                                <div class="btn-box">
                                                    <a href="" class="btn-1">
                                                        Read More
                                                    </a>
                                                    <a href="" class="btn-2">
                                                        Contact us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="detail-box">
                                                <h1>
                                                    A Perfect Learning Center <br />
                                                    <span>
                                                        For Your Kids
                                                    </span>
                                                </h1>
                                                <p>
                                                    It is a long established fact that a reader will be distracted
                                                    by the readable content of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters, as
                                                </p>
                                                <div class="btn-box">
                                                    <a href="" class="btn-1">
                                                        Read More
                                                    </a>
                                                    <a href="" class="btn-2">
                                                        Contact us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="detail-box">
                                                <h1>
                                                    A Perfect Learning Center <br />
                                                    <span>
                                                        For Your Kids
                                                    </span>
                                                </h1>
                                                <p>
                                                    It is a long established fact that a reader will be distracted
                                                    by the readable content of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters, as
                                                </p>
                                                <div class="btn-box">
                                                    <a href="" class="btn-1">
                                                        Read More
                                                    </a>
                                                    <a href="" class="btn-2">
                                                        Contact us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="detail-box">
                                                <h1>
                                                    A Perfect Learning Center <br />
                                                    <span>
                                                        For Your Kids
                                                    </span>
                                                </h1>
                                                <p>
                                                    It is a long established fact that a reader will be distracted
                                                    by the readable content of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters, as
                                                </p>
                                                <div class="btn-box">
                                                    <a href="" class="btn-1">
                                                        Read More
                                                    </a>
                                                    <a href="" class="btn-2">
                                                        Contact us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="detail-box">
                                                <h1>
                                                    A Perfect Learning Center <br />
                                                    <span>
                                                        For Your Kids
                                                    </span>
                                                </h1>
                                                <p>
                                                    It is a long established fact that a reader will be distracted
                                                    by the readable content of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters, as
                                                </p>
                                                <div class="btn-box">
                                                    <a href="" class="btn-1">
                                                        Read More
                                                    </a>
                                                    <a href="" class="btn-2">
                                                        Contact us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
export default Header;