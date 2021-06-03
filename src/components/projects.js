import { React } from "react";

function Projects(){
 
    return(
<div>

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
            <img className src={"img/png/mobile-app-landing-page-template.png"} alt="project-img" />
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
            <img className src={"img/png/mobile-app-landing-page-template.png"} alt="project-img" />
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
            <img className src={"img/png/mobile-app-landing-page-template.png"} alt="project-img" />
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
            <img className src={"img/png/mobile-app-landing-page-template.png"} alt="project-img" />
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
  

</div>
    );
}
export default Projects;
