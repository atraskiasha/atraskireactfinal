/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';


// import offer1 from './imagegallery/mediarel.png'
import offer2 from './imagegallery/eventman.png'
import offer3 from './imagegallery/socialmm.png'
// import offer4 from './imagegallery/contentcreation.png'
import '../index.css'


const Public = () => {
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
        <Row className="mt-4" style={{display:'flex' , justifyContent:'center'}}>
          
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick} style={{cursor:'pointer'}}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
            </div>
          </Col>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick2} style={{cursor:'pointer'}}>
              <img src={offer3} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
          
        </Row>

        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal_body">
            {/* <h4>Media Relations</h4>
            <h6>Media relations are a crucial aspect of any successful marketing strategy. It involves building and nurturing relationships with journalists, reporters, and media outlets to secure positive coverage for businesses. </h6> */}
            <h4>Media Relations:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Media relations are a crucial aspect of any successful marketing strategy. It involves building and nurturing relationships with journalists, reporters, and media outlets to secure positive coverage for businesses. Effective media relations can result in increased brand visibility, credibility, and public trust. By crafting compelling press releases, organizing media events, and engaging in proactive outreach, businesses can generate valuable media coverage, reach a wider audience, and establish themselves as industry leaders. Media relations also offer opportunities for crisis management and reputation building. Overall, media relations are an invaluable tool for businesses to enhance their brand image, create buzz, and drive business growth. </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={showModal2} onHide={handleModalClose2} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal_body">
            {/* <h4>Media Relations</h4>
            <h6>Media relations are a crucial aspect of any successful marketing strategy. It involves building and nurturing relationships with journalists, reporters, and media outlets to secure positive coverage for businesses. </h6> */}
            <h4>Publications:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Publications are a powerful marketing tool that provides businesses with a tangible platform to showcase their expertise and knowledge. By creating and distributing publications such as magazines, newsletters, or eBooks, businesses can establish themselves as thought leaders in their industry. Publications offer valuable content that educates, informs, and engages the target audience, building trust and credibility. They serve as a medium to share insights, industry trends, and innovative ideas, positioning the business as a go-to resource. Moreover, publications provide long-term visibility and can be shared digitally or in print, reaching a wide audience and strengthening brand recognition. </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
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