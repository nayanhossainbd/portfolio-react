import { React } from "react";
function About(){
    return(
<div>
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
                <h3 className="timeline-header"><a href="{home}">Web Developer </a>at AR Trade International</h3>
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
                <h3 className="timeline-header"><a href="{home}">Web Developer </a>at Intezie Limited</h3>
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
            <img className="img-fluid" src="./dist/img/svg/html-svgrepo-com.svg" alt="" />
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
            <img className="img-fluid" src="./dist/img/svg/css-svgrepo-com.svg" alt="" />
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
            <img className="img-fluid" src="./dist/img/svg/php-svgrepo-com.svg" alt="" />
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
            <img className="img-fluid" src="./dist/img/svg/laravel-svgrepo-com.svg" alt="" />
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
            <img className="img-fluid" src="./dist/img/svg/wordpress-svgrepo-com.svg" alt="" />
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
            <img className="img-fluid" src="./dist/img/svg/javascript-svgrepo-com.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
    );
}
export default About;