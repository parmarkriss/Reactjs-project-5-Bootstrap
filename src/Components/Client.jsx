import './style.css';
const Client = () =>{
    return(
        <>
           <section className="client_section layout_padding">
    <div className="container layout_padding2-top">
      <div className="heading_container">
        <h2>
          Parent’s Feedback
        </h2>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="client_container layout_padding">
              <div className="img-box">
                <img src={require('./images/client.png')} alt=""/>
              </div>
              <div className="detail-box">
                <h4>
                  Rohali jonson
                </h4>
                <h6>
                  customer
                </h6>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in
                  some form, by injected humour, or randomised words which don't look even slightly believable. If you
                  are
                  going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                  the
                  middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                </p>
                <img src={require('./images/quote.png')} alt=""/>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="client_container layout_padding">
              <div className="img-box">
                <img src={require('./images/client.png')} alt=""/>
              </div>
              <div className="detail-box">
                <h4>
                  Rohali jonson
                </h4>
                <h6>
                  customer
                </h6>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in
                  some form, by injected humour, or randomised words which don't look even slightly believable. If you
                  are
                  going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                  the
                  middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                </p>
                <img src={require('./images/quote.png')} alt=""/>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="client_container layout_padding">
              <div className="img-box">
                <img src={require('./images/client.png')} alt=""/>
              </div>
              <div className="detail-box">
                <h4>
                  Rohali jonson
                </h4>
                <h6>
                  customer
                </h6>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in
                  some form, by injected humour, or randomised words which don't look even slightly believable. If you
                  are
                  going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                  the
                  middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                </p>
                <img src={require('./images/quote.png')} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>

    </div>
  </section>
        </>
    )
}
export default Client;