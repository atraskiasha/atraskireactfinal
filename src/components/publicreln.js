/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';


import offer1 from './imagegallery/mediarel.png'
import offer2 from './imagegallery/eventman.png'
import offer3 from './imagegallery/socialmm.png'
import offer4 from './imagegallery/contentcreation.png'



const Public = () => {
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
        <h1 className="mt-5 text-white text-center">Public Relation</h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4">
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer1} alt="Image 1" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer3} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer4} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Media Relations</h4>
            <h6>Media relations involves managing the relationship between an organization and the
              media, focusing on building positive interactions, establishing credibility, and effectively
              communicating key messages to the public through various media channels. </h6>
            <h4>Event Management
              :</h4>
            <h6>Event management encompasses the planning, organization, and execution of various
              types of events, including conferences, trade shows, weddings, and corporate
              gatherings, to create memorable and successful experiences. </h6>
            <h4>Social Media Management
            </h4>
            <h6>Social media management involves overseeing and executing a brand's presence
              across various social media platforms, ensuring consistent messaging, engaging
              content, and effective community management. 

            </h6>
            <h4>Content Creation
            </h4>
            <h6>Content creation is the process of developing and producing valuable and engaging
              material, such as articles, blog posts, videos, infographics, and social media posts, to
              attract and engage a target audience.

            </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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
      </Container>










     


    </>
  )
}

export default Public
