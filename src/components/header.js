import AboutInfo  from "../data/aboutinfo";
function Header() {
    return (
<div>

  <header style={{}}>
    <div className="container">
      <div className="row personal-profile">
        <div className="col-md-4 ">
          <div className="personal-profile__avatar">
            <img className="img-fluid" src={"img/jpg/profile.jpg"} alt="avatar" />
          </div>
        </div>
       
        <div className="col-md-8 personal-profile">
          <h2 className="personal-name">{AboutInfo.name}</h2>
          <span className="personal-designation">{AboutInfo.title} <small> {AboutInfo.expertise}</small></span>
          <div className="profile-info">
            <h5> Age: <small>{AboutInfo.age}</small></h5>
            <h5>Phone: <small href="tel:+880 17 04045 8206"> {AboutInfo.phone}</small></h5>
            <h5>Email: <small href="mailto:nayanhossainbd.786@gmail.com">{AboutInfo.email}</small></h5>
            <h5>Address: <small>{AboutInfo.address}</small></h5>
            <div className="profile-social">
              <a href="{https://github.com/nayanhossainbd}" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
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