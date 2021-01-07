
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  import './App.css';
  import Header from "./components/header";
  import About from './components/about';
  import Home from './components/home';
  
  export function Menu() {
    return (
      <Router>
  
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
            <li  className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/header">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
  
        <div>
        
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <Header />
              <About />
            </Route>
            <Route path="/header">
              <Header />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  
  
  export default Menu;
  