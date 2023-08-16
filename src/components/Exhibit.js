/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import offer1 from './images/Annual Business Meetings.jpg'
import offer2 from './images/Business events..jpg'
// import offer3 from './imagegallery/seo.png'
const Exhibit  = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleImageClick = () => {
    setShowModal(true);
  };


  const handleModalClose2 = () => {
    setShowModal2(false);
  };

  const handleImageClick2 = () => {
    setShowModal2(true);
  };
  return (
    <div>
      <Container>
        <h1 className="mt-5 text-white text-center">Events & Exhibit</h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4" style={{pointerEvents:'cursor', display:'flex' , justifyContent:'center'}}>
          <Col md={4} style={{cursor:'pointer'}}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer1} alt="Image 1" className="img-fluid" />
            </div>
          </Col>
          <Col md={4} style={{cursor:'pointer'}}>
            <div className="image-container" onClick={handleImageClick2}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
            </div>
          </Col>
          <Col md={4} style={{cursor:'pointer'}}>
            <div className="image-container" onClick={handleImageClick2}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
            </div>
          </Col>
          <Col md={4} style={{cursor:'pointer'}}>
            <div className="image-container" onClick={handleImageClick2}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
            </div>
          </Col>
          
        </Row>

        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>events :</h4>
            <h9>Business events are a valuable platform for businesses to connect, engage, and expand their networks. Whether it's conferences, trade shows, or networking events, business events offer numerous benefits. They provide opportunities for businesses to showcase their products or services, gain exposure, and attract potential customers. Business events foster face-to-face interactions, enabling businesses to build valuable relationships with industry professionals, partners, and clients. These events also offer a platform for knowledge sharing, learning about industry trends, and gaining insights from experts. Moreover, business events can lead to collaborations, partnerships, and new business opportunities, ultimately driving growth and success

</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>



        <Modal show={showModal2} onHide={handleModalClose2} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Exhibition :</h4>
            <h9>An exhibition would involve showcasing and presenting various aspects of digital marketing to potential clients or attendees. These exhibitions could include displays, presentations, and interactive demonstrations of services such as social media management, search engine optimization (SEO), pay-per-click (PPC) advertising, content creation, email marketing, and more. The goal would be to educate and attract businesses or individuals interested in enhancing their online presence and marketing strategies.


</h9>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        
        <Modal show={showModal2} onHide={handleModalClose2} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Product Launches
:</h4>
            <h9>Product launch inaugurations are events where a new product is introduced to the public and stakeholders. These events often include presentations, demonstrations, and sometimes even entertainment to create excitement and generate interest in the new product.We help you in these types of events and to create. They can be a crucial marketing tool for companies to showcase their innovation and attract potential customers. We Assist businesses that need more specific information or assistance with planning a product launch, inauguration and company campaigns.


</h9>
            
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showModal2} onHide={handleModalClose2} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>ATL & BTL
:</h4>
            <h9>Above the line and below the line is an Elaborated form of ATL & BTL. In this domain we provide services like hoardings ,billboards, branding,inauguration,dealers meet ,stall fabrication to the business.
These are the events where companies showcase and introduce new products to the public, potential clients, and the media. These exhibitions often feature interactive displays, demonstrations, and presentations to generate excitement and interest in the new products. They provide an opportunity for companies to connect with their target audience and gather valuable feedback.



</h9>
            
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>



 {/* footer */}

     {/* footer starts  */}
     <footer className=" text-white" style={{backgroundColor:'#333'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <p><i className="fa fa-envelope"></i> Email: communications@atraski.com</p>
              {/* <p><i className="fa fa-envelope"></i>Email: priti.jhawar@atraski.com</p>             */}
                <p><i className="fa fa-phone"></i> Contact No: 9163720198 / 7596009785</p>
              {/* <p><i className="fa fa-phone"></i> Contact No: 7596009785</p> */}
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

export default Exhibit ;