/* eslint-disable no-unused-vars */


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
 
  import  bigb from "./imagegallery/bigb.png"
  // import  fashionweek from "./imagegallery/bigb.png"
  import  pantaloon from "./imagegallery/pantaloons.png" 
  import  toi from "./imagegallery/the-official-fface-logo-KJ382R.jpg"
  import  dalmia from "./imagegallery/dalmia.png"
  import  hero from "./imagegallery/hero.png"
  import  fresh from "./imagegallery/frespreso.jpg"
  import  gdg from "./imagegallery/gdgpng.png"
  import  feed from "./imagegallery/feedingIndia.png"
  import  tele from "./imagegallery/telegraph.png"
  import  chai from "./imagegallery/chai-break-logo.jpg"
  import  amri from "./imagegallery/AMRI.png"
  import  elev from "./imagegallery/Elleven-Logo_.png"
  import  mayfair from "./imagegallery/mayfair.jpg"
  import  jugad from "./imagegallery/jugad.png"
  import  sports from "./imagegallery/sports.png"
  import  fame from "./imagegallery/fashionweek.png"
  // import  fashionweek from "./imagegallery/bigb.png" "./imagegallery";

const BrandCollaboration = () => {
  const brandLogos = [
    { id: 1, src:pantaloon },
    { id: 2, src: bigb }, 
    { id: 3, src:hero  },
    { id: 4, src:  dalmia},
    { id: 5, src: fresh },
    { id: 6, src: gdg },
    { id: 7, src: feed },
    { id: 8, src: tele },
    { id: 9, src: chai },
    { id: 10, src: amri },
    { id: 11, src: elev },
    { id: 12, src: mayfair },
    { id: 13, src: jugad },
    { id: 14, src: sports },
    { id: 15, src: fame },
    { id: 16, src: toi },
    // Add more logo objects as needed
  ];

  return (
    <>
      <h2 className="Heading-1 text-center  py-5">Our Brand Collaborations</h2>
      <Container  className="py-3 bg-white  ">
        <Row
          className="bg-white justify-content-center py-5"
          // style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          {/* <hr /> */}
          {brandLogos.map((logo) => (
            <Col
              xs={10}
              sm={6}
              md={4}
              lg={2}
              key={logo.id}
              className="p-4"
              data-aos="zoom-in"
              data-aos-duration="2000"
              style={{background:'none'}}
              
            >
              <img
                src={logo.src}
                alt={`Logo ${logo.id}`}
                className="img-fluid"
              />
            </Col>
          ))}
          {/* <hr /> */}
        </Row>
      </Container>
    </>
  );
};

export default BrandCollaboration;
