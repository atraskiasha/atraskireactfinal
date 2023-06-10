/* eslint-disable no-unused-vars */
import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom';
// import WorkGallary from './workGallary';
import work1 from '../components/images/DY PATIL1.jpg';
import work2 from '../components/images/nissan.png';
import work3 from '../components/images/nothingcoinbank.png';
import work4 from '../components/images/skoda.png';
import work5 from '../components/images/ultrasound.png';
import work6 from '../components/images/confrence.png';
import work7 from '../components/images/jhonny-walker.png';
import work8 from '../components/images/gatebranding.png';
import work9 from '../components/images/fabrication.png';
import work10 from '../components/images/mi.png';
import work11 from '../components/images/pepepure.png';
import work12 from '../components/images/volksvagan.png';
import work13 from '../components/images/facebook.png';
import work14 from '../components/images/auditoirum.png';

import './workGallery.css';
import video1 from './videos/jewel.mp4'
import video2 from './videos/haldiram.mp4'
import video3 from './videos/eazydinner.mp4'
import video4 from './videos/mogasun.mp4'
import video5 from './videos/dilemughli.mp4'
import video6 from './videos/DY Patil.mp4'





const Work1 = () => {



  return (
    
    <>
     {/* projects */}
      <div>
        <h2 className="text-center text-white" style={{ marginBottom: '10px' }}>Successful Projects</h2>
        <Row>
          <Col md={4}>
            <Card style={{ marginBottom: '30px' }}>
              <Card.Body style={{ backgroundColor: 'black', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '-40px' }}>JewelBox</p>
                </div>
                <video src={video1} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginBottom: '30px' }}>
              <Card.Body style={{ backgroundColor: 'black', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '-40px' }}>Haldiram</p>
                </div>
                <video src={video2} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginBottom: '30px' }}>
              <Card.Body style={{ backgroundColor: 'black', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '-40px' }}>Eazy Dinner</p>
                </div>
                <video src={video3} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4} >
            <Card style={{ marginBottom: '0px', marginTop:'30px'}}>
              <Card.Body style={{ backgroundColor: 'black', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '40px', marginTop:'50px' }}>Mog Asun</p>
                </div>
                <video src={video4} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginBottom: '30px', marginTop:'30px' }}>
              <Card.Body style={{ backgroundColor: 'black', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '40px', marginTop:'50px' }}>Dil-E-Mughlai</p>
                </div>
                <video src={video5} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginBottom: '30px', marginTop:'30px' }}>
              <Card.Body style={{ backgroundColor: 'black', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '40px', marginTop:'50px' }}>DY Patil</p>
                </div>
                <video src={video6} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </div>
      {/* projects */}

  
  <main style={{marginTop:'70px'}}>

  {/* <h2 className="text-center text-white" style={{ marginBottom: '10px' }}>Successful Projects</h2> */}

  <div className = "cardsm">
    <img src={work1} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
        
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      
    </div>
  </div>
  <div className = "cardsm">
    <img src={work2} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
            </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      
    </div>
  </div>


  <div className = "cardsm">
    <img src={work3} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      
    </div>
  </div>


  <div className = "cardsm">
    <img src={work4} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      
    </div>
  </div>
  
  
</main>
<main >

{/* <h1>Successful Projects</h1> */}
  <div className = "cardsm">
    <img src={work5} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      
    </div>
  </div>
  <div className = "cardsm">
    <img src={work6} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      
    </div>
  </div>


  <div className = "cardsm">
    <img src={work7} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      
    </div>
  </div>


  <div className = "cardsm">
    <img src={work8} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      
    </div>
  </div>
  
  
</main>
<main>

{/* <h1>Successful Projects</h1> */}
  <div className = "cardsm">
    <img src={work9} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      
    </div>
  </div>
  <div className = "cardsm">
    <img src={work10} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      
    </div>
  </div>


  <div className = "cardsm">
    <img src={work11} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      
    </div>
  </div>


  <div className = "cardsm">
    <img src={work12} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      
    </div>
  </div>
  
  
</main>





 {/* footer starts  */}

<div className="mt-5 ml-5">

 </div>

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


      </>
  )
}

export default Work1