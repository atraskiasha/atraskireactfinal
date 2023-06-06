/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// import './Upcoming.css';
// import './Blogger.css';
import { Container, Row, Col } from 'react-bootstrap';

import { Link} from 'react-router-dom';
import blogger1 from './imagegallery/Piyush-1.jpg'
import blogger2 from './imagegallery/Sumedha-1.jpg'
import blogger3 from './imagegallery/Simran-2.jpg'
import blogger4 from './imagegallery/81829159_746328929187181_7991821624035015901_n.jpg'
import blogger5 from './imagegallery/118189043_650084005620930_6818501205128761498_n.jpg'
import blogger6 from './imagegallery/ishani.jpg'
import blogger7 from './imagegallery/Huma.jpg'
import blogger8 from './imagegallery/vishnu.jpg'
import fashion from './imagegallery/AT-Fashion-Logo.png.webp';

import Upcoming from './Upcoming';
// import bloger from '../components/imagegallery/blogger.png';


const Blogger = () => {

  


  return (
    <div>
      <h1 className="text-center text-white" style={{ margin: '20px' }}>Blogger's Mela</h1>
      <h3 className="text-center text-white" style={{ margin: '20px' }}>Bloggers who have worked with us!</h3>




      {/* Gallery  */}
      <Container>
      <Row>
        <Col md={6}>
          <Row>
          <Col md={6} className="gallery-col">
              <img src={blogger1} alt="Image 1" />
              <div className="image-overlay ">
                  <span className="image-title">PIYUSH RATHI</span>
              </div>
            </Col>
            <Col md={6} className="gallery-col">
            <img src={blogger2} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">SUMEDHA SHARMA</span>
              </div>
            </Col>
          </Row>
          <Row>
          <Col md={6} className="gallery-col">
            <img src={blogger3} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">PRARTHANA JAGAN</span>
              </div>
            </Col>
            <Col md={6} className="gallery-col">
            <img src={blogger4} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">ISHANI MITRA</span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
          <Col md={6} className="gallery-col">
            <img src={blogger5} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">SIMRAN POPTANI</span>
              </div>
            </Col>
            <Col md={6} className="gallery-col">
            <img src={blogger6} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">ANMOL WADHWANI</span>
              </div>
            </Col>
          </Row>
          <Row>
          <Col md={6} className="gallery-col">
            <img src={blogger7} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">HUMA JOAD</span>
              </div>
            </Col>
            <Col md={6} className="gallery-col">
            <img src={blogger8} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">VISHNU KAUSHAL</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>


      {/* <div class="bgallery">
        <div class="bgallery-item">
          <img src={blogger1} alt="Image 1" />
          <div class="image-popups">PIYUSH RATHI</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger2} alt="Image 2" />
          <div class="image-popups">SUMEDHA SHARMA</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger3} alt="Image 3" />
          <div class="image-popups">SIMRAN POPTANI</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger4} alt="Image 4" />
          <div class="image-popups">ANMOL WADHWANI</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger5} alt="Image 5" />
          <div class="image-popups">PRARTHANA JAGAN</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger6} alt="Image 6" />
          <div class="image-popups">ISHANI MITRA</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger7} alt="Image 7" />
          <div class="image-popups">HUMA JOAD</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger8} alt="Image 8" />
          <div class="image-popups">VISHNU KAUSHAL</div>
        </div>
      </div> */}
      {/* Gallery  */}
      
   {/* // */}
   <div>
   <Upcoming />
   </div>
   {/* //    */}
      

<div>
      <h2 className="text-white text-center" style={{ margin: '50px' }}>What Falls Us Apart</h2>
      <p className="text-white text-center" style={{ margin: '50px' }}>Bloggers Mela has become a highly anticipated and sought-after event for bloggers in
        India, having successfully conducted meet and greet sessions in seven cities. It serves
        as a vibrant hub where bloggers can network, share their personal stories, and gain
        insights and inspiration from the experiences of established bloggers. Through this
        platform, bloggers can form meaningful connections, collaborate on projects, and
        discover new avenues for growth and success in the dynamic world of blogging.
        Bloggers Mela truly encapsulates the spirit of community, creativity, and collaboration
        within the blogging industry.</p>


      <h3 className=" text-white text-center" style={{ margin: '50px' }}>Perks of Registering for Bloggers Mela:</h3>
      <ul className="circle text-white text-center" style={{ margin: '50px', position: 'relative', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <h6>● Be a member of AtBuzz bloggers community</h6>
        <h6>● Networking with other bloggers</h6>
        <h6>● Direct contacts with Brands</h6>
        <h6>● Be a part of a fun-filled event</h6>

      </ul>
      </div>
      



       {/* footer starts  */}
       <footer className=" text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p><i className="fa fa-envelope"></i> Email: atraskiabhyudaymajhi@gmail.com</p>
              <p><i className="fa fa-phone"></i> Contact No: 9163720198</p>
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
  )
}

export default Blogger
