/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import offer1 from './images/socialmediamarketing.jpg'
import offer2 from './images/socialmediaadvertising.jpg'
import offer3 from './images/seo.jpg'




const FashionPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2 , setShowModal2] = useState(false);
  const [showModal3 , setShowModal3] = useState(false);

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


  const handleModalClose3 = () => {
    setShowModal3(false);
  };

  const handleImageClick3 = () => {
    setShowModal3(true);
  };

  //   const modalStyle = `
  //   .custom-modal .modal-dialog {
  //     max-width: 800px;
  //   }
  // `;



  return (


    <>

      <Container>
        <h1 className="mt-5 text-white text-center">Fashion</h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4" style={{pointerEvents:'cursor'}}>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick} style={{cursor:'pointer'}}>
              <img src={offer1} alt="Image 1" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute', fontSize:'25px',color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Brand collaboration</h2>

            </div>
          </Col>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick2} style={{cursor:'pointer'}}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute', fontSize:'25px',color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Services</h2>

            </div>
          </Col>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick3} style={{cursor:'pointer'}}>
              <img src={offer3} alt="Image 3" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute', color:'black',top: 100,fontSize:'25px', left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Models</h2>

            </div>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Brand collaboration:</h4>
            <h9>Brand collaboration is the strategic alliance where brands leverage each other's audience, reputation, and resources to achieve mutual benefits. We can include co-branded products, joint marketing campaigns, events, or other initiatives aimed at reaching new audiences and enhancing brand visibility.
collection, product, or campaign. These collaborations often combine the distinct styles, aesthetics, and expertise of each brand involved, resulting in a fusion of creative ideas and concepts. Such collaborations can generate buzz, increase brand visibility, and attract new customers by offering something fresh and exciting that may not be found in regular collections.

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
            <h4>Services:</h4>
            <h9>
            Atraski Fashion Solution provides Fashion management, Fashion photography, Execution Fashion Weeks and Models management.
It is the process of planning, organizing, and coordinating various activities within the fashion industry to achieve business goals. We Target a  wide range of tasks, such as product design and development, marketing, retail operations, supply chain management, branding, and strategic decision-making. We ensure that a fashion brand or business runs smoothly, stays relevant in the market, and achieves financial success.
</h9>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>



        <Modal show={showModal3} onHide={handleModalClose3} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Models:</h4>
            <h9>We help in arranging Fashion models to the potential clients It involves overseeing the careers of models, arranging bookings, coordinating photo shoots, runway shows, and promoting models to clients and designers. It requires strong organizational skills and a deep understanding of the fashion industry.

</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose3}>
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
                  <h4 className="card-title fw-bold" style={{color:'#FFF4F4'}}>Experience</h4>
                  <p className="card-text">We have years of experience in the industry and have helped numerous clients achieve their goals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="bg-dark card-body">
                  <h4 className="card-title fw-bold" style={{color:'#FFF4F4'}}>Expertise</h4>
                  <p className="card-text">Our team consists of highly skilled professionals with expertise in various areas of digital marketing.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="bg-dark card-body">
                  <h4 className="card-title fw-bold" style={{color:'#FFF4F4'}}>Results</h4>
                  <p className="card-text">We focus on delivering measurable results that help our clients achieve their business objectives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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




    </>
  )
}

export default FashionPage;
