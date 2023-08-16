import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import offer1 from './images/Annual Business Meetings.jpg'
import offer2 from './images/Business events..jpg'
// import offer3 from './imagegallery/seo.png'
const PublicRelation = () => {
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
        <h1 className="mt-5 text-white text-center">Public Relation </h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4" style={{pointerEvents:'cursor', display:'flex' , justifyContent:'center'}}>
          <Col md={4} style={{cursor:'pointer'}}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer1} alt="Image 1" className="img-fluid" />
            </div>
          </Col>
          
          
        </Row>

        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Public Relation:</h4>
            <h9>Media outreach refers to the strategic efforts and activities undertaken by individuals, organizations, or businesses to connect and engage with various forms of media, such as newspapers, magazines, television, radio, online publications, and social media platforms. We aim to achieve the goal of media outreach is to gain coverage and exposure for a specific message, story, product, event, or initiative. This can involve pitching press releases, arranging interviews, sending media kits, and building relationships with journalists and influencers to amplify the reach and impact of the content.
It is the strategic management of communication between an organization and its target audience, with the aim of building and maintaining a positive reputation. We help in activities such as media relations, crisis management, event planning, and social media engagement to influence public perception and foster goodwill.

.</h9>
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
            <h4>Annual Business Meetings:</h4>
            <h9>Annual business meetings are essential gatherings that bring together key stakeholders, executives, and employees to discuss the progress, goals, and strategies of the organization. These meetings offer several benefits. They provide a platform for aligning the team, sharing important updates, and fostering a sense of unity and shared purpose. Annual business meetings facilitate collaboration and idea-sharing, allowing for innovative solutions and improved decision-making. They also offer an opportunity to recognize and celebrate achievements, boosting morale and motivation within the organization. Moreover, annual business meetings help set the direction for the coming year, ensuring everyone is on the same page and committed to driving the organization's success.</h9>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
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

export default PublicRelation