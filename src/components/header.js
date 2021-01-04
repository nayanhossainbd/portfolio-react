import {  react} from "react";
function Header() {
    return (
<div>
  {/* Navbar */}
  <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
    <div className="container">
      <a href="/" className="navbar-brand">
        <img src="dist/img/png/logo.png" alt="NayanHossain Logo" className="brand-image img-circle elevation-3" style={{"opacity":".8"}} />
        {/* <span class=" text-grey">Nayan Hossain</span> */}
      </a>
      <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse order-3" id="navbarCollapse">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-link">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* /.navbar */}
  <header style={{}}>
    <div className="container">
      <div className="row personal-profile">
        <div className="col-md-4 ">
          <div className="personal-profile__avatar">
            <img className="img-fluid" src="./dist/img/jpg/profile.jpg" alt="avatar" />
          </div>
        </div>
        <div className="col-md-8 personal-profile">
          <h2 className="personal-name">Nayan Hossain</h2>
          <span className="personal-designation">Fullstack Developer <small> Laravel </small> <small>PHP</small></span>
          <div className="profile-info">
            <h5> Age: <small>20</small></h5>
            <h5>Phone: <small href="tel:+880 17 04045 8206"> +880 17 04045 8206</small></h5>
            <h5>Email: <small href="mailto:nayanhossainbd.786@gmail.com">nayanhossainbd.786@gmail.com</small></h5>
            <h5>Address: <small>94/1 Crescent Road, Dhanmondi -1205, Dhaka</small></h5>
            <div className="profile-social">
              <a href="https://github.com/nayanhossainbd" target="_blank"><i className="fab fa-github" /></a>
              <a href="https://linkedin.com/in/nayanhossainbd" target="_blank"><i className="fab fa-linkedin" /></a>
              <a href="https://facebook.com/nayanhossain.official" target="_blank"><i className="fab fa-facebook-f" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
  );
}

export default Header;