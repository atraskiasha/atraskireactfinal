/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';


import logo1 from './images/bm.jpeg';
import logo2 from './images/ducati.jpeg';
import logo3 from './images/bmwi.jpeg';
import logo4 from './images/home3.jpeg';
import logo5 from './images/home4.webp';
import logo6 from './images/cme.jpeg';
import logo7 from './images/eazydiner-prime.png';
import logo8 from './images/mcmv.jpeg';
import logo9 from './images/travel.jpeg';
import handImage from './images/hand.png'; // Import your hand image
 

// import logo10 from './images/atraski logo new -2.png';
const sentences = [
    'Harness the power of digital marketing and build business',
    'Join us in revolution and pave your path to business success.',
    'Discover the limitless opportunities marketing and unlock your business.',
    'Take charge of your entrepreneurial journey by mastering digital marketing',
  ];

const Main = () => {
  
  
  // const SentenceBox = () => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [isHandTapping, setIsHandTapping] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      }, 3000); // Change sentence every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      const handTapTimeout = setTimeout(() => {
        setIsHandTapping(true);
        const tapEndTimeout = setTimeout(() => {
          setIsHandTapping(false);
        }, 500); // Tap animation duration
        return () => clearTimeout(tapEndTimeout);
      }, 1000); // Delay before starting tap animation
      return () => clearTimeout(handTapTimeout);
    }, [currentSentenceIndex]);
  
    const currentSentence = sentences[currentSentenceIndex];

  return (
    <>
      {/* "homepage": "https://github.com/atraskiasha/atraskireact.git", */}

     


      <div className="background">
        <div className="content">
          <h1 style={{ fontSize: '40px' }}>Welcome to Atraski</h1>
          <h3 id="mainheading" style={{ marginTop: '-15px', fontSize: '20px' }}>Hello, World!
            We believe in inspiring India in a unique and innovative way. Every day,
            we offer a wide range of services across events, travel, blogging, and fashion to bring you the best of what we
            have to offer.We promise to inspire and delight you every step of the way.Atraski flourishing furiously over the past years is now proud to present a cabinet of successful events throughout all A tier cities of the country including open mics, fashion walks and walks promoting social causes, bloggers meets, art confluences along with travel meets and packaged tours all across India</h3>

          <a href="/chat" className="containerchat">
          <Container className="d-flex align-items-center justify-content-center">
      <Alert
        variant="primary"
        className="text-center position-relative"
        style={{ width: `${currentSentence.length}ch`, fontSize: '1.5rem', backgroundColor: '#F9F9F9' }}
      >
        {isHandTapping && <img src={handImage} alt="Hand" className="hand-image" />}
        {currentSentence}
      </Alert>
    </Container>
       
          </a>


        </div>
      </div>




      <div
        className="background-image-res"

        style={{
          backgroundImage: `url(${logo1})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '100vh',
          position: 'relative',
          zIndex:'-1'

        }}
      >

      </div>


      <div className="container2"
        style={{
          backgroundImage: `url(${logo2})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        <img src="images/imageb.jpg" alt="" />
      </div>

      <div
        style={{
          backgroundImage: `url(${logo3})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo8})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          height: '80vh',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo4})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo5})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo7})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo9})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo6})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>



    </>




  )
}

export default Main