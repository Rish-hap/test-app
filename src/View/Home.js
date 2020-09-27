import React from "react"
import Bets from "./Bets"

const Home  = (props) => {
const [show_bets, set_show_bets] = React.useState(false)
React.useEffect(()=>{

},[])

    return (
        <React.Fragment>
    <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src="assets/img/hero/logo-2.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Preloader Start --> */}
    <header>
        {/* <!-- Header Start --> */}
        <div className="header-area header-transparent">
            <div className="main-header header-sticky">
                <div className="container-fluid">
                    <div className="menu-wrapper d-flex align-items-center justify-content-between">
                        {/* <!-- Logo --> */}
                        <div className="logo">
                            <a><img src="assets/img/hero/logo-2.png" alt=""/></a>
                        </div>
                        {/* <!-- Main-menu --> */}
                        <div className="main-menu f-right d-none d-lg-block">
                            <nav>
                                <ul id="navigation">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li>
                                        {/* <ul className="submenu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog_details.html">Blog Details</a></li>
                                            <li><a href="elements.html">Elements</a></li>
                                        </ul> */}
                                    </li>
                                    <li><a href="contact.html"></a></li>
                                </ul>
                            </nav>
                        </div>          
                        {/* <!-- Header-btn --> */}
                        <div className="header-btns d-none d-lg-block f-right">
                           <a  className="btn">Contact me</a>
                       </div>
                       {/* <!-- Mobile Menu --> */}
                       <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}
</header>
<main>
    {/* <!--? slider Area Start--> */}
    <div className="slider-area position-relative">
        <div className="slider-active">
            {/* <!-- Single Slider --> */}
            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9 col-md-10">
                            <div className="hero__caption">
                                <span data-animation="fadeInLeft" data-delay="0.1s">Start Betting</span>
                                <h1 data-animation="fadeInLeft" data-delay="0.4s">Keep On Earning</h1>
                                <a href="courses.html" className="border-btn hero-btn" data-animation="fadeInLeft" data-delay="0.8s">Start</a>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
    </div>
    {/* <!-- slider Area End-->
    <!-- Traning categories Start --> */}
    <section className="traning-categories black-bg">
        <div className="container-fluid">
        <div className="row">
                <div className="col-xl-12">
                    <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                        <h2>Today's Matches</h2>
                    </div>
                </div>
            </div>
            <div className="row  text-center">

            {/* <div className="col-lg-4 col-md-6">
                    <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                        <div className="cat-icon">
                            <img style={{width:'100%'}} src="assets/img/hero/kkr-vs-rr.jpg"  alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">RR VS KKR</a></h5>
                            <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                        </div>
                    </div>
                </div> */}
                <div className="col-xl-6 col-lg-6 align-center">
                    <div className="single-topic text-center mb-30">
                        <div className="topic-img">
                          <img style={{width:'100%'}} src="assets/img/hero/kkr-vs-rr.jpg"  alt=""/>
                            <div className="topic-content-box">
                                <div className="topic-content">
                                    <h3>KKR Vs RR</h3>
                                    <p>Match Will Start In <br/> 15:00 Minutes</p>
                                    <a onClick={()=>set_show_bets(true)} className="border-btn">View Bets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-xl-6 col-lg-6">
                    <div className="single-topic text-center mb-30">
                        <div className="topic-img">
                            <img src="assets/img/gallery/cat2.png" alt=""/>
                            <div className="topic-content-box">
                                <div className="topic-content">
                                    <h3>Group traning</h3>
                                    <p>You’ll look at graphs and charts in Task One, how to approach the task and <br/> the language needed for a successful answer.</p>
                                    <a  className="border-btn">View Bets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>


    {show_bets && <Bets />}
    {/* <!-- Traning categories End-->
    <!--? Team --> */}
    <section className="team-area fix">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                        <h2 >Upcomming Matches</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s" >
                        <div className="cat-icon">
                            <img style={{width:'100%'}} src="assets/img/hero/rcb-vs-mi.jpg" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">RCB Vs MI</a></h5>
                            <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                        <div className="cat-icon">
                            <img style={{width:'100%'}} src="assets/img/hero/dcvssrh.jpg" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">DC Vs SRH</a></h5>
                            <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                        <div className="cat-icon">
                            <img style={{width:'100%'}} src="assets/img/hero/kkr-vs-rr.jpg"  alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">RR VS KKR</a></h5>
                            <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <section className="pricing-area section-padding40 fix">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                        <h2>Pricing</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                        <div className="properties__card">
                            <div className="about-icon">
                                <img src="assets/img/icon/price.svg" alt=""/>
                            </div>
                            <div className="properties__caption">
                                <span className="month">6 month</span>
                                <p className="mb-25">$30/m  <span>(Single className)</span></p>
                                <div className="single-features">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Free riding </p>
                                    </div>
                                </div>
                                <div className="single-features">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Unlimited equipments</p>
                                    </div>
                                </div>
                                <div className="single-features">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Personal trainer</p>
                                    </div>
                                </div>
                                <div className="single-features">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Weight losing classNamees</p>
                                    </div>
                                </div>
                                <div className="single-features mb-20">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Month to mouth</p>
                                    </div>
                                </div>
                                <a href="#" className="border-btn border-btn2">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                        <div className="properties__card">
                            <div className="about-icon">
                                <img src="assets/img/icon/price.svg" alt=""/>
                            </div>
                            <div className="properties__caption">
                                <span className="month">6 month</span>
                                <p className="mb-25">$30/m  <span>(Single className)</span></p>
                                <div className="single-features">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Free riding </p>
                                    </div>
                                </div>
                                <div className="single-features">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Unlimited equipments</p>
                                    </div>
                                </div>
                                <div className="single-features">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Personal trainer</p>
                                    </div>
                                </div>
                                <div className="single-features">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Weight losing classNamees</p>
                                    </div>
                                </div>
                                <div className="single-features mb-20">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Month to mouth</p>
                                    </div>
                                </div>
                                <a href="#" className="border-btn border-btn2">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                        <div className="properties__card">
                            <div className="about-icon">
                                <img src="assets/img/icon/price.svg" alt=""/>
                            </div>
                            <div className="properties__caption">
                                <span className="month">6 month</span>
                                <p className="mb-25">$30/m  <span>(Single className)</span></p>
                                <div className="single-features">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Free riding </p>
                                    </div>
                                </div>
                                <div className="single-features">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Unlimited equipments</p>
                                    </div>
                                </div>
                                <div className="single-features">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Personal trainer</p>
                                    </div>
                                </div>
                                <div className="single-features">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Weight losing classNamees</p>
                                    </div>
                                </div>
                                <div className="single-features mb-20">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <p>Month to mouth</p>
                                    </div>
                                </div>
                                <a href="#" className="border-btn border-btn2">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section className="about-area2 fix pb-padding pt-50 pb-80">
        <div className="support-wrapper align-items-center">
            <div className="right-content2">
                
                <div className="right-img wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <img src="assets/img/gallery/about.png" alt=""/>
                </div>
            </div>
            <div className="left-content2">
               
                <div className="section-tittle2 mb-20 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                    <div className="front-text">
                        <h2 className="">About Me</h2>
                        <p>You’ll look at graphs and charts in Task One, how to approach the task and the language needed 
                            for a successful answer. You’ll examine Task Two questions and learn how to plan, write and 
                        check academic essays.</p>
                        <p className="mb-40">Task One, how to approach the task and the language needed for a successful answer. You’ll 
                        examine Task Two questions and learn how to plan, write and check academic essays.</p>
                        <a href="courses.html" className="border-btn">My Courses</a>
                    </div>
                </div>
            </div>
        </div>
    </section> */}


    {/* <section className="home-blog-area pt-10 pb-50">
        <div className="container">
          
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9 col-sm-10">
                    <div className="section-tittle text-center mb-100 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                        <h2>From Blog</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="home-blog-single mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                        <div className="blog-img-cap">
                            <div className="blog-img">
                                <img src="assets/img/gallery/blog1.png" alt=""/>
                            </div>
                            <div className="blog-cap">
                                <span>Gym & Fitness</span>
                                <h3><a href="blog_details.html">Your Antibiotic One Day To 10 Day Options</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="home-blog-single mb-30 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".6s">
                        <div className="blog-img-cap">
                            <div className="blog-img">
                                <img src="assets/img/gallery/blog2.png" alt=""/>
                            </div>
                            <div className="blog-cap">
                                <span>Gym & Fitness</span>
                                <h3><a href="blog_details.html">Your Antibiotic One Day To 10 Day Options</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
  
    {/* <div className="video-area section-bg2 d-flex align-items-center"  data-background="assets/img/gallery/video-bg.png">
        <div className="container">
            <div className="video-wrap position-relative">
                <div className="video-icon" >
                    <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0"><i className="fas fa-play"></i></a>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- video_end -->
    <!-- ? services-area --> */}
    <section className="services-area">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                        <div className="features-icon">
                            <img src="assets/img/icon/icon1.svg" alt=""/>
                        </div>
                        <div className="features-caption">
                            <h3>Location</h3>
                            <p>Some random locatin</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                        <div className="features-icon">
                            <img src="assets/img/icon/icon2.svg" alt=""/>
                        </div>
                        <div className="features-caption">
                            <h3>Phone</h3>
                            <p>(90) 7895986645</p>
                            <p>  (78) 267 256 2578</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services mb-40 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                        <div className="features-icon">
                            <img src="assets/img/icon/icon3.svg" alt=""/>
                        </div>
                        <div className="features-caption">
                            <h3>Email</h3>
                            <p>crypticOcean@gmail.com</p>
                            <p>contact56@crypticOcean.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<footer>
    {/* <!--? Footer Start--> */}
    <div className="footer-area black-bg">
        <div className="container">
            <div className="footer-top footer-padding">
                {/* <!-- Footer Menu --> */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="single-footer-caption mb-50 text-center">
                            {/* <!-- logo --> */}
                            <div className="footer-logo wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                <a href="index.html"><img src="assets/img/hero/logo-2.png" alt=""/></a>
                            </div>
                            {/* <!-- Menu -->
                            <!-- Header Start --> */}
                            <div className="header-area main-header2 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                                <div className="main-header main-header2">
                                    <div className="menu-wrapper menu-wrapper2">
                                        {/* <!-- Main-menu --> */}
                                        <div className="main-menu main-menu2 text-center">
                                            <nav>
                                                <ul>
                                                    <li><a >Home</a></li>
                                                    <li><a >About</a></li>
                                                    {/* <li><a >Courses</a></li>
                                                    <li><a>Pricing</a></li>
                                                    <li><a >Gallery</a></li> */}
                                                    <li><a >Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Header End -->
                            <!-- social --> */}
                            <div className="footer-social mt-30 wow fadeInUp" data-wow-duration="3s" data-wow-delay=".8s">
                                <a><i className="fab fa-twitter"></i></a>
                                <a><i className="fab fa-facebook-f"></i></a>
                                <a ><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer Bottom --> */}
            <div className="footer-bottom">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-12">
                        <div className="footer-copy-right text-center">
                            {/* <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by dev_rish
                              {/* Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> */}
                              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- Footer End--> */}
  </footer>
  {/* <!-- Scroll Up --> */}
  <div id="back-top" >
    <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
</div>



        </React.Fragment>
    )
}

export default Home