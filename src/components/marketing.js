/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import offer1 from './images/influencer.jpeg'


const Marketing = () => {

  return (

    <Container>
      <h1 className="mt-5 text-white text-center">Influencer Marketing</h1>
      {/* <h3 className="mt-3  text-white text-center">What We Offer</h3> */}
      <Row className="mt-4 ml-5">
        <Col md={3} className="ml-5">
          <div className="image-container"  >
            <img src={offer1} alt="Image 1" className="img-fluid ml-5" />
          </div>
        </Col>
        <Col md={4} className="text-center ml-5">
          <div className="image-container ml-5"  >
            <p>Collaborating with various
              influencers across the country to
              create hype about your brand. With
              a successful implementation of an
              influence marketing activity your
              brand can get a desired reach at a
              very short time.</p>
          </div>
        </Col>

      </Row>



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










  )
}

export default Marketing
