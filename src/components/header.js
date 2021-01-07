
function Header() {
    return (
<div>
  {/* Navbar */}
 
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
              <a href="https://github.com/nayanhossainbd" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
              <a href="https://linkedin.com/in/nayanhossainbd" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /></a>
              <a href="https://facebook.com/nayanhossain.official" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></a>
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