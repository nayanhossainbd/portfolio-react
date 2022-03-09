import React  from "react";

const Intro =() => {
    const [state]= React.useState({
        title:'Md Nayan Hossain',
        description:'I am Assistant Officer at MSA Textiles Limited and i am  able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools'
        
    });
    return(
<div>
  <section id="about" className="my-5">
    <div className="container">
      <h4 className="bg-white">Hi_</h4>
      <div className="row">
        <p>{state.description}</p>
        <div className="download-btn">
          <button type="submit" className="btn btn-secondary"><i className="fas fa-download" /> Download CV</button>
        </div>
      </div>
    </div>
  </section>

  
</div>
    );
}
export default Intro;
