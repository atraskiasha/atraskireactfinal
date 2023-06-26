/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./../App.css";

const Services = () => {
    const card = {
      backgroundColor: "rgb(255, 164, 179)",
      padding: "30px",
      
      borderRadius: "15px",
      margin: "2rem",
      boxShadow: " 0 4px 8px 0 white, 0 6px 20px 0 pink",
      color: "black",
       textAlign:"center"
    };
    
  return (

    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <i className="fas  fa-3x mb-3"></i>
              <h6>PORTFOLIO BUILDING + MANAGEMENT & MARKETING</h6>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <i className="fas  fa-3x mb-3"></i>
              <h6>PROFESSIONALS</h6>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <i className="fas  fa-3x mb-3"></i>
              <h6>COLLABORATION WITH INDUSTRIES</h6>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <i className="fas  fa-3x mb-3"></i>
              <h6>MODEL SCOUTING</h6>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <i className="fas fa-3x mb-3"></i>
              <h6>Our Core Values</h6>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <i className="fas fa-3x mb-3"></i>
              <h6>TEST SHOOTS</h6>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </div>
          </Col>
        </Row>
      </Container>
          </section>

    
    // <div className="container" style={{
    
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: '0'}}>
    //   <h1 className="text-center my-4 Heading-1">OUR SERVICES</h1>
    //   <div className="row col-12 justify-content-center my-2 text-center ">
    //     <div className="col-12  col-md-6 col-lg-3 my-1 " style={card}>
    //       <h5 style={{ fontWeight: "bolder", alignItems: "center",color:"black" }}>
    //         PORTFOLIO BUILDING + MANAGEMENT & MARKETING
    //       </h5>
    //     </div>
    //     <div className="col-12  col-md-6 col-lg-3 my-1 " style={card}>
    //       <h5 style={{ fontWeight: "bolder", alignItems: "center",color:"black" , marginTop:'1.2rem'}}>
    //         {" "}
    //         PROFESSIONALS
    //       </h5>
    //     </div>
    //     <div className="col-12  col-md-6 col-lg-3 my-1 " style={card}>
    //       <h5 style={{ fontWeight: "bolder",alignItems: "center",color:"black" }}>
    //         COLLABORATION WITH INDUSTRIES
    //       </h5>
    //     </div>
    //   </div>
    //   <div className="row col-12 justify-content-center my-5">
    //     <div className="col-12  col-md-6 col-lg-3 my-1 " style={card}>
    //       <h5 style={{ fontWeight: "bolder" ,alignItems: "center",color:"black"}}>MODEL SCOUTING</h5>
    //     </div>
    //     <div className="col-12  col-md-6 col-lg-3 my-1  " style={card}>
    //       <h5 style={{ fontWeight: "bolder" ,alignItems: "center",color:"black"}}>TEST SHOOTS</h5>
    //     </div>
    //     <div className="col-12  col-md-6 col-lg-3 my-1 " style={card}>
    //       <h5 style={{ fontWeight: "bolder" ,alignItems: "center",color:"black"}}>MODEL TRAINING</h5>
    //     </div>
    //   </div>
    // </div>

    // <div className="row d-flex justify-content-between m-0 py-3 py-md-5 px-5">
    //   <text className="Heading-1 text-center col-12 pt-2 pb-5">
    //     Our Core Values
    //   </text>
    //   <div
    //     className="col-12  col-md-6 col-lg-4 my-1 py-2 py-md-1"

    //   >
    //     <div
    //       className="row d-flex justify-content-center align-items-start shadow m-auto p-2 py-5 "

    //     >

    //       <text className="Heading-2 text-center" >
    //       hello
    //       </text>
    //       <text className="Text-1 text-center" >
    //        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nostrum.
    //       </text>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Services
