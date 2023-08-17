import './style.css';
const Contact = () =>{
    return(
        <>
           <section className="contact_section layout_padding">
    <div className="container ">
      <div className="heading_container ">
        <h2 className="">
          Request
          <span>
            A call Back
          </span>

        </h2>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 ">
          <form action="#">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Pone Number" />
            </div>
            <div>
              <input type="text" className="message-box" placeholder="Message" />
            </div>
            <div className="d-flex  mt-4 ">
              <button>
                SEND
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="map_section">
            <div id="map" className="w-100 h-100"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>

        
    )
}
export default Contact;