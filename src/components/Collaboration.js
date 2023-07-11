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
    { id: 3, src: toi },
    { id: 4, src:hero  },
    { id: 5, src:  dalmia},
    { id: 6, src: fresh },
    { id: 7, src: gdg },
    { id: 8, src: feed },
    { id: 9, src: tele },
    { id: 10, src: chai },
    { id: 11, src: amri },
    { id: 12, src: elev },
    { id: 13, src: mayfair },
    { id: 14, src: jugad },
    { id: 15, src: sports },
    { id: 16, src: fame },
    // Add more logo objects as needed
  ];

  return (
    <>
      <h2 className="Heading-1 text-center  py-5">Our Brand Collaborations</h2>
      <Container  className="py-3  ">
        <Row
          className="justify-content-center py-5"
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
