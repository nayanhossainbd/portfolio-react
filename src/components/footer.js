import { React } from "react";
function Footer() {
    return (
    <div>
        <div className="container">
    <h4>Get In Touch_</h4>
    <div className="row">
      <div className="col-md-4">
        <span className="d-block">Phone: <small>+88 01704458206</small></span>
        <span className="d-block">Phone: <small>+88 01648292110</small></span>
        <span className="d-block">Email: <small>nayanhossainbd786.gmail.com</small></span>
        <span className="d-block">Email: <small>nayanhossainbd@outlook.com</small></span>
        <div><a href="https://github.com/nayanhossainbd">Github</a></div>
        <div><a href="https://facebook.com/nayanhossain.official">Facebook</a></div>
        <div><a href="https://linkedin.com/in/nayanhossainbd786">Linkedin</a></div>
      </div>
      <div className="col-md-5">
        <h4>Or just write me a letter here_</h4>
        <div className="contact-form">
          <form>
            <div className="card-body">
              <div className="form-group">
                {/* <label for="name">Full Name_</label> */}
                <input type="text" className="form-control" id="name" placeholder="Enter Name" />
              </div>
              <div className="form-group">
                {/* <label for="email">Email_</label> */}
                <input type="email" className="form-control" id="email" placeholder="Enter your Email" />
              </div>
              <div className="form-group">
                {/* <label for="message">Message</label> */}
                <textarea type="text" className="form-control" placeholder="Type your Message_" defaultValue={""} />
              </div>
              <button type="submit" className="btn btn-secondary">Submit</button>
            </div>
            {/* /.card-body */}
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Main Footer */}
  <footer className="main-footer">
    {/* To the right */}
    <div className="float-right d-none d-sm-inline">
      Meet me if you <a href="mailto:nayanhossainbd786.gmail.com" >want</a>
    </div>
   
    <strong>Copyright © 2018-   <a href="mailto:nayanhossainbd786.gmail.com">Nayan Hossain</a>.</strong> All rights reserved.
  </footer>
    </div>
    );
}
export default Footer;
