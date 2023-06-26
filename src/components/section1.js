/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { img1, img2, img3, img4, img5, img6, img8, bannerimg, img11,img12,img13,img14,img15,img16 } from "./imagegallery";
import logo8 from './imagegallery/AT-Fashion-Logo.png.webp'
import "../App.css";
import M from "./Models";
import EventsAtAtraski from "./EventsAtAtraski";
import Collaboration from "./Collaboration";
import Services from "./Services";
import Cities from "./Cities";
// import { img1, img11, img12, img13, img14, img2, img3, img4, img5, img6, img7 } from "./imagegallery";

const Section1 = () => {


  return (
    <div>

      <div
        className="background-image-res"

        style={{
          backgroundImage: `url(${logo8})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          marginTop: '50px',
          height: '60vh',
          position: 'relative',
          zIndex: '-1'

        }}
      >

      </div>

      <div class="portfolio">
        <h1 style={{ textAlign: 'center', color: 'white', margin: '50px' }}>Our Models</h1>
        <div class="row mb-3" >
          <div class="col-md-3">
            <div class="image-container">
              <img src={img16} alt="Image 1" />
              <div class="overlay">
                <div class="overlay-content">

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="image-container">
              <img src={img15} alt="Image 2" />
              <div class="overlay">
                <div class="overlay-content">

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="image-container">
              <img src={img3} alt="Image 3" />
              <div class="overlay">
                <div class="overlay-content">

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="image-container">
              <img src={img4} alt="Image 4" />
              <div class="overlay">
                <div class="overlay-content">

                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="row mb-3">
          <div class="col-md-3">
            <div class="image-container">
              <img src={img5} alt="Image 1" />
              <div class="overlay">
                <div class="overlay-content">

                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="image-container">
              <img src={img6} alt="Image 3" />
              <div class="overlay">
                <div class="overlay-content">

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="image-container">
              <img src={img11} alt="Image 4" />
              <div class="overlay">
                <div class="overlay-content">

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="image-container">
              <img src={img12} alt="Image 4" />
              <div class="overlay">
                <div class="overlay-content">

                </div>
              </div>
            </div>
          </div>
          
        </div>

        
      </div>



      {/* <EventsAtAtraski/> */}
      <Services />
      <Collaboration />
      {/* <Cities/>
      <M/> */}



      {/* footer starts  */}
      <footer className=" text-white" style={{ backgroundColor: '#333' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p><i className="fa fa-envelope"></i> Email: abhyuday.majhi@atraski.com</p>
              <p><i className="fa fa-envelope"></i>Email: priti.jhawar@atraski.com</p>              <p><i className="fa fa-phone"></i> Contact No: 9163720198</p>
              <p><i className="fa fa-phone"></i> Contact No: 7596009785</p>
            </div>
            <div className="col-md-6 text-md-right">
              <p>Atraski India
                O-8, Block B, Chittaranjan Park, New Delhi, Delhi- 110019</p>
              <p>Atraski India (Kolkata Office)
                38 Kamalapur (West)
                Dum Dum Cant, Kolkata - 700028</p>
              <Link className="footer-link" to="/privacy">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </footer>

      {/*  footer ends  */}

    </div>
  );
};

export default Section1;
