import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./sass/main.scss"
import {  Route, Switch, Redirect,  BrowserRouter as Router } from 'react-router-dom'
import Home from "./View/Home.js"

const runScript = () => {
  if( window.$ ) {
    // do your action that depends on jQuery.
   let  script = document.createElement("script");

    script.src = "/assets/js/vendor/modernizr-3.5.0.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/vendor/jquery-1.12.4.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/popper.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/bootstrap.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/jquery.slicknav.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);


    script = document.createElement("script");
    script.src = "/assets/js/owl.carousel.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/slick.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/wow.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/animated.headline.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/jquery.magnific-popup.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/gijgo.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);


    script = document.createElement("script");
    script.src = "/assets/js/jquery.nice-select.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/jquery.sticky.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);


    script = document.createElement("script");
    script.src = "/assets/js/jquery.counterup.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/waypoints.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/jquery.countdown.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/hover-direction-snake.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/contact.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/jquery.form.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/jquery.validate.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/mail-script.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/jquery.ajaxchimp.min.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/plugins.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

    script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    script.crossorigin="anonymous"
    document.head.appendChild(script);

} else {
    // Load Jquey in to window
    let script = document.createElement("script");

    script.src = "https://code.jquery.com/jquery-2.2.4.min.js";
    script.async = true;
    script.crossorigin="anonymous"
  
    document.head.appendChild(script);

     // wait 50 milliseconds and try again.
    window.setTimeout( runScript, 50 );
}
 }



const  App =() => {
  React.useEffect( ()=>{
    console.log("Use effects get called")
   let script = document.createElement("script");
 
   script.src = "https://code.jquery.com/jquery-2.2.4.min.js";
   script.async = true;
   script.crossorigin="anonymous"
 
   document.head.appendChild(script);
   runScript();
  },[])
  return (
    <React.Fragment>
       <Router>
        <Switch>
        <Redirect exact from="/" to="/home" />
          <Route  path ="/home" component={()=><div ><Home runScript={runScript} /></div>} />

        </Switch>
    </Router>
    </React.Fragment>
);
}

export default App;
