/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import offer1 from './imagegallery/socialmedia.png'
import offer2 from './imagegallery/socialmediaad.png'
import offer3 from './imagegallery/seo.png'




const Service = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  //   const modalStyle = `
  //   .custom-modal .modal-dialog {
  //     max-width: 800px;
  //   }
  // `;



  return (


    <>

      <Container>
        <h1 className="mt-5 text-white text-center">Digital Marketing</h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4" style={{pointerEvents:'cursor'}}>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer1} alt="Image 1" className="img-fluid" />
            </div>
          </Col>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
            </div>
          </Col>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer3} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Social Media Marketing:</h4>
            <h9>It is an essential tool for businesses to connect with their target audience and build brand awareness. It allows companies to reach a wide range of potential customers with tailored messages and engaging content, resulting in increased conversions.</h9>
            <h4>Social Media Advertising:</h4>
            <h9>media advertising also offers detailed analytics and reporting, enabling businesses to
              track the performance of their ads in real-time. This data-driven approach allows for
              continuous optimization, ensuring that ad campaigns are cost-effective and delivering
              the desired results.	</h9>
            <h4>SEO</h4>
            <h9>It is a crucial digital marketing strategy aimed at
              improving a website's visibility and organic search rankings on search engine result
              pages. By optimizing various aspects of a website, such as content, keywords, meta
              tags, and backlinks, SEO helps businesses attract more targeted organic traffic.</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>



      {/* why hire */}
      <section className="py-5 ">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-8">
              <h2 className="display-4 fw-bold">Why Should You Hire Us?</h2>
              <hr className="mx-auto border-2 w-25" />
              <p className="lead">We have a lot to offer when it comes to digital marketing services.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="bg-dark card-body">
                  <h4 className="card-title fw-bold">Experience</h4>
                  <p className="card-text">We have years of experience in the industry and have helped numerous clients achieve their goals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="bg-dark card-body">
                  <h4 className="card-title fw-bold">Expertise</h4>
                  <p className="card-text">Our team consists of highly skilled professionals with expertise in various areas of digital marketing.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="bg-dark card-body">
                  <h4 className="card-title fw-bold">Results</h4>
                  <p className="card-text">We focus on delivering measurable results that help our clients achieve their business objectives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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




    </>
  )
}

export default Service
