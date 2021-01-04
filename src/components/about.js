import { React } from "react";
function About(){
    return(
<div>
  <section id="about" className="my-5">
    <div className="container">
      <h4 className="bg-white">Hi_</h4>
      <div className="row">
        <p>I am Junior Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner,
          hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools</p>
        <div className="download-btn">
          <button type="submit" className="btn btn-secondary"><i className="fas fa-download" /> Download CV</button>
        </div>
      </div>
    </div>
  </section>
  <section className="content mt-3">
    <div className="container">
      {/* Timelime example  */}
      <div className="row">
        <div className="col-md-6">
          {/* The time line */}
          <div className="timeline">
            {/* timeline time label */}
            <div className="time-label">
              <h4 className="bg-white">Educations</h4>
            </div>
            {/* /.timeline-label */}
            {/* timeline item */}
            <div>
              <i className="fas fa-graduation-cap bg-blue" />
              <div className="timeline-item">
                <span className="time"><i className="far fa-calendar-alt" /> 2015 - 2019</span>
                <h3 className="timeline-header">Pabna Polytechnic Institute.</h3>
                <div className="timeline-body">
                  Diploma in Computer Engineering
                </div>
              </div>
            </div>
            {/* timeline item */}
            <div>
              <i className="fas fa-graduation-cap bg-blue" />
              <div className="timeline-item ">
                <span className="time"><i className="far fa-calendar-alt" /> 2010 - 2015</span>
                <h3 className="timeline-header">Kalika Pur Abdul Jobbar Khan Smrity High School</h3>
                <div className="timeline-body">
                  Secondary School Certificate
                </div>
              </div>
            </div>
          </div>
          {/* END timeline item */}
        </div>
        <div className="col-md-6">
          <div className="timeline">
            {/* timeline time label */}
            <div className="time-label">
              <h4 className="bg-white">Employements</h4>
            </div>
            {/* /.timeline-label */}
            {/* timeline item */}
            <div>
              <i className="fas fa-globe-asia" />
              <div className="timeline-item">
                <h3 className="timeline-header"><a href="#">Web Developer </a>at AR Trade International</h3>
                <div className="timeline-body">
                  <small> From September 01,2020 To Present </small>
                </div>
              </div>
            </div>
            {/* END timeline item */}
            {/* timeline item */}
            {/* timeline item */}
            <div>
              <i className="fas fa-globe-asia" />
              <div className="timeline-item">
                <h3 className="timeline-header"><a href="#">Web Developer </a>at Intezie Limited</h3>
                <div className="timeline-body">
                  <small> From August 01,2019 To May 31,2020 </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.col */}
      </div>
    </div>
    {/* /.timeline */}
  </section>
  <div className="container">
    <h4 className="bg-default">General Skills</h4>
    <div className="row my-3">
      <div className="col-sm-2 skill">
        <div className="position-relative p-3">
          <div className="ribbon-wrapper ribbon-lg">
            <div className="ribbon bg-white text-lg text-purple">
              HTML
            </div>
          </div>
          <div className="image ">
            <img className="img-fluid" src="./dist/img/svg/html-svgrepo-com.svg" alt />
          </div>
        </div>
      </div>
      <div className="col-sm-2 skill">
        <div className="position-relative p-3 ">
          <div className="ribbon-wrapper ribbon-lg">
            <div className="ribbon bg-white text-lg text-purple">
              CSS
            </div>
          </div>
          <div className="image ">
            <img className="img-fluid" src="./dist/img/svg/css-svgrepo-com.svg" alt />
          </div>
        </div>
      </div>
      <div className="col-sm-2 skill">
        <div className="position-relative p-3  ">
          <div className="ribbon-wrapper ribbon-lg">
            <div className="ribbon bg-white text-lg text-purple">
              PHP
            </div>
          </div>
          <div className="image ">
            <img className="img-fluid" src="./dist/img/svg/php-svgrepo-com.svg" alt />
          </div>
        </div>
      </div>
      <div className="col-sm-2 skill">
        <div className="position-relative p-3  ">
          <div className="ribbon-wrapper ribbon-lg">
            <div className="ribbon bg-white text-lg text-purple">
              Laravel
            </div>
          </div>
          <div className="image ">
            <img className="img-fluid" src="./dist/img/svg/laravel-svgrepo-com.svg" alt />
          </div>
        </div>
      </div>
      <div className="col-sm-2 skill">
        <div className="position-relative p-3  ">
          <div className="ribbon-wrapper ribbon-lg">
            <div className="ribbon bg-white text-lg text-purple">
              Wordpress
            </div>
          </div>
          <div className="image ">
            <img className="img-fluid" src="./dist/img/svg/wordpress-svgrepo-com.svg" alt />
          </div>
        </div>
      </div>
      <div className="col-sm-2 skill">
        <div className="position-relative p-3  ">
          <div className="ribbon-wrapper ribbon-lg">
            <div className="ribbon bg-white text-lg text-purple">
              Javascript
            </div>
          </div>
          <div className="image ">
            <img className="img-fluid" src="./dist/img/svg/javascript-svgrepo-com.svg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /.content-wrapper */}
  <div className="container">
    <h4 className="mb-3">My projects_</h4>
    <div className="row mb-3">
      <div className="col-md-6">
        <ul className="menu">
          <li className type="button" data-filter="all">All</li>
          <li className type="button" data-filter=".category-a">Web Design</li>
          <li className type="button" data-filter=".category-b">Web Development</li>
          <li className type="button" data-filter=".category-c">Wordpress </li>
        </ul>
      </div>
    </div>
    <div className="row projects_mixer">
      <div className="mix category-a" data-order={1}>
        <div className="row project">
          <div className="col-md-6 col-lg-5 project_img">
            <img className src="./dist/img/png/mobile-app-landing-page-template.png" alt="project-img" />
          </div>
          <div className="col-md-6 col-lg-7 project_info">
            <h3 className="project_title">Admin template for Photo Service</h3>
            <p className="project_description">
              Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye.
              Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
            </p>
            <p className="project_stack">Used stack:</p>
            <ul className="tags">
              <li>html5</li>
              <li>css3</li>
              <li>JavaScript</li>
              <li>BEM</li>
              <li>bower</li>
              <li>grunt</li>
            </ul>
            <a href className="project-card__link">www.xample.com</a>
          </div>
        </div>
      </div>
      <div className="mix category-b" data-order={2}>
        <div className="row project">
          <div className="col-md-6 col-lg-5 project_img">
            <img className src="./dist/img/png/mobile-app-landing-page-template.png" alt="project-img" />
          </div>
          <div className="col-md-6 col-lg-7 project_info">
            <h3 className="project_title">Admin template for Photo Service</h3>
            <p className="project_description">
              Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye.
              Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
            </p>
            <p className="project_stack">Used stack:</p>
            <ul className="tags">
              <li>html5</li>
              <li>css3</li>
              <li>JavaScript</li>
              <li>BEM</li>
              <li>bower</li>
              <li>grunt</li>
            </ul>
            <a href className="project-card__link">www.xample.com</a>
          </div>
        </div>
      </div>
      <div className="mix category-b category-c" data-order={3}>
        <div className="row project">
          <div className="col-md-6 col-lg-5 project_img">
            <img className src="./dist/img/png/mobile-app-landing-page-template.png" alt="project-img" />
          </div>
          <div className="col-md-6 col-lg-7 project_info">
            <h3 className="project_title">Admin template for Photo Service</h3>
            <p className="project_description">
              Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye.
              Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
            </p>
            <p className="project_stack">Used stack:</p>
            <ul className="tags">
              <li>html5</li>
              <li>css3</li>
              <li>JavaScript</li>
              <li>BEM</li>
              <li>bower</li>
              <li>grunt</li>
            </ul>
            <a href className="project-card__link">www.xample.com</a>
          </div>
        </div> 
      </div>
      <div className="mix category-a category-d" data-order={4}> <div className="row project">
          <div className="col-md-6 col-lg-5 project_img">
            <img className src="./dist/img/png/mobile-app-landing-page-template.png" alt="project-img" />
          </div>
          <div className="col-md-6 col-lg-7 project_info">
            <h3 className="project_title">Admin template for Photo Service</h3>
            <p className="project_description">
              Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye.
              Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
            </p>
            <p className="project_stack">Used stack:</p>
            <ul className="tags">
              <li>html5</li>
              <li>css3</li>
              <li>JavaScript</li>
              <li>BEM</li>
              <li>bower</li>
              <li>grunt</li>
            </ul>
            <a href className="project-card__link">www.xample.com</a>
          </div>
        </div></div>
    </div>
  </div>
  <div className="container">
    <h4>Latest Post_</h4>
    <div className="row">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <img src="./dist/img/png/photo1.png" alt className="img-fluid" />
          </div>
          <div className="card-footer">
            <span>27 October,2020</span>
            <a href="#">
              <h3>Lorem ipsum dolor sit.</h3>
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit laborum expedita mollitia
              vitae fugit?
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <img src="./dist/img/jpg/photo4.jpg" alt className="img-fluid" />
          </div>
          <div className="card-footer">
            <span>27 October,2020</span>
            <a href="#">
              <h3>Lorem ipsum dolor sit.</h3>
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit laborum expedita mollitia
              vitae fugit?
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <img src="./dist/img/jpg/photo3.jpg" alt className="img-fluid" />
          </div>
          <div className="card-footer">
            <span>27 October,2020</span>
            <a href="#">
              <h3>Lorem ipsum dolor sit.</h3>
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit laborum expedita mollitia
              vitae fugit?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <h1>Get In Touch_</h1>
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
      Meet me if you want
    </div>
    {/* Default to the left */}
    <strong>Copyright © 2018-  <a href="#">Nayan Hossain</a>.</strong> All rights reserved.
  </footer>
</div>
    );
}
export default About;