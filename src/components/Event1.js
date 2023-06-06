/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
import event from './imagegallery/event.jpg'
import subimg1 from './imagegallery/dealer.png'
import subimg2 from './imagegallery/stall.png'
import subimg3 from './imagegallery/launch.png'
import subimg4 from './imagegallery/atlbtl.png'
import eventimg1 from './imagegallery/w1.jpeg'
import eventimg2 from './imagegallery/w2.jpeg'
import eventimg3 from './imagegallery/w3.jpeg'
import eventimg4 from './imagegallery/w4.jpeg'
import eventimg5 from './imagegallery/w5.jpeg'

import portfolio1 from './images/e1.jpg'
import portfolio2 from './images/e2.jpg'
import portfolio3 from './images/e3.jpg'
import portfolio4 from './images/e4.jpg'
import portfolio5 from './images/e5.jpg'
import portfolio6 from './images/e6.jpg'
import portfolio7 from './images/e7.jpg'


import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Event1() {

    const headerStyle = {
        backgroundImage: `url(${event})`,
        backgroundSize: '1297px',
        backgroundAttachment: 'fixed',
        height: '30vh',
        position: 'relative',
    };

    const headingStyle = {
        color: '#ffffff',
        fontSize: '2rem',
        textTransform: 'uppercase',
        textAlign: 'center',
    };
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
      setShowModal(false);
    };
  
    const handleImageClick = () => {
      setShowModal(true);
    };



    return (
        <>
            <header style={headerStyle}>
                <h1 style={headingStyle}></h1>
            </header>
            <div className="container">
                <h1 className="big-heading">Events:Unforgettable moments, boundless possibilities</h1>
            </div>
            {/* cards */}
            <Container>
//         <h1 className="mt-5 text-white text-center"></h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4" style={{pointerEvents:'cursor'}}>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={subimg1} alt="Image 1" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={subimg2} alt="Image 2" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={subimg3} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={subimg4} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Dealers Meet</h4>
            <h9>It allows companies to reach a wide range of potential customers with tailored messages and engaging content, resulting in increased conversions.</h9>
            <h4>Stall Fabrication</h4>
            <h9>media advertising also offers detailed analytics and reporting, enabling businesses to
              track the performance of their ads in real-time.	</h9>
            <h4>Launch Event</h4>
            <h9>It is a crucial digital marketing strategy aimed at
              improving a website's visibility and organic search rankings on search engine result
              pages.</h9>
            <h4>Launch Event</h4>
            <h9>It is a crucial digital marketing strategy aimed at
              improving a website's visibility and organic search rankings on search engine result
              pages.</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>


            {/* cards */}

            {/* portfolio */}
            <div class="portfolio">
                <h1 style={{ textAlign: 'center', color: 'white', margin: '50px' }}>Our Portfolio</h1>
                <div class="row">
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio1} alt="Image 1" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio2} alt="Image 2" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio3} alt="Image 3" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio4} alt="Image 4" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio5} alt="Image 1" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio6} alt="Image 2" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio7} alt="Image 3" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={eventimg5} alt="Image 4" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={eventimg4} alt="Image 1" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={eventimg3} alt="Image 2" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={eventimg2} alt="Image 3" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={eventimg1} alt="Image 4" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
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

            {/* portfolio */}
           




        </>
    );
}

export default Event1
