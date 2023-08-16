/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import offer1 from './images/socialmediamarketing.jpg'
import offer2 from './images/socialmediaadvertising.jpg'
import offer3 from './images/seo.jpg'




const  Production = () => {
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
        <h1 className="mt-5 text-white text-center">My City My Voice</h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4" style={{pointerEvents:'cursor'}}>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick} style={{cursor:'pointer'}}>
              <img src={offer1} alt="Image 1" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute', fontSize:'25px',color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Goods & Services</h2>

            </div>
          </Col>
          {/* <Col md={4}>
            <div className="image-container" onClick={handleImageClick2} style={{cursor:'pointer'}}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute', fontSize:'25px',color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Social Media Advertisement</h2>

            </div>
          </Col>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick3} style={{cursor:'pointer'}}>
              <img src={offer3} alt="Image 3" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute', color:'black',top: 100,fontSize:'25px', left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Search Engine Optimization</h2>

            </div>
          </Col> */}
        </Row>

        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Goods & Services:</h4>
            <h9>
            My City My Voice is a platform committed to blowing the wind beneath the wings of aspiring writers and budding stand-up speakers to project their art across the nation.
We have successfully executed our events in 12+ cities building a community of more than 1000 people. Our county has a huge number of talented artist. We are not only encouraging their talents but giving them opportunities to brighten their skills.
Laying out the best of the maestros from the core of the country. We provide the opportunity for you to portray your competence and abide by the famous saying “ability is nothing without opportunity”, so resolve to seize it!






</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>



        {/* <Modal show={showModal2} onHide={handleModalClose2} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4> College Ambassador:</h4>
            <h9>
College Ambassador is a community Program for different brands where College Students or Youth  promote the particular brand in their College. It can be a Product brand or Service Brand.
These ambassadors typically engage in activities such as giving company motives, participating in events, sharing their personal experiences, and answering questions from prospective Customers. We serve as a bridge between the company and potential customers, helping to provide insights and information about particular products , niches and various aspects of the company.

</h9>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}


{/* 
        <Modal show={showModal3} onHide={handleModalClose3} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Youth marketing:</h4>
            <h9> 
Youth marketing refers to the strategies and techniques used by businesses and brands to target and engage with the younger demographic, typically those between the ages of 13 to 35. It involves creating advertising campaigns, products, and experiences that resonate with the interests, values, and lifestyles of young people.
We help in building this type of marketing which often leverages social media, influencers, events, and trends to connect with and build relationships with the youth audience and other platforms that are popular among young people to build a brand



</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}




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

export default Production;
