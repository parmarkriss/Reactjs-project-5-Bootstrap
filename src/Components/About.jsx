import './style.css'
const About = () =>{
    return(
        <>
          <section className="about_section ">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <img src={require('./images/about-img.jpg')} alt=""/>
          </div>
        </div>
        <div className="col-md-5 col-lg-4">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                A Few words about us
              </h2>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
              desktop publishing packages and web
            </p>
            <div>
              <a href="">
                Read More
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}

export default About;