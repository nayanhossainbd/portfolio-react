import { React } from "react";
import Projects from "../components/projects"
import Header from "../components/header"
import Intro from "../components/intro"
import About from "./about";
function Home(){
 
    return(
<div>
  < Header/>
  <Intro />
 <About/>
  <Projects />
</div>
    );
}
export default Home;