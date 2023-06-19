// import React, { useState, useEffect } from 'react';
// import { Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState, useEffect ,useMemo} from 'react';
import '../index.css';

// <<<<<<< HEAD

// import logo1 from './images/bm.jpeg';
// import logo2 from './images/ducati.jpeg';
// import logo3 from './images/bmwi.jpeg';
// import logo4 from './images/home3.jpeg';
// import logo5 from './images/home4.webp';
// import logo6 from './images/cme.jpeg';
// import logo7 from './images/eazydiner-prime.png';
// import logo8 from './images/mcmv.jpeg';
// import logo9 from './images/travel.jpeg';
// import handImage from './images/hand.png'; // Import your hand image
// import searchIcon from './images/search.png'; // Import your search icon
// =======
import logo1 from './images/3-01.png';
import logo2 from './images/ducati.jpg';
import logo3 from './images/4-01.png';
import logo4 from './images/7.png';
import logo5 from './images/1.png';
import logo6 from './images/cme.png';
import logo7 from './images/eazydiner-prime.png';
import logo8 from './images/2.png';
import logo9 from './images/travel.png';
// import handImage from './images/hand.png'; // Import your hand image
 
// >>>>>>> 2744392e7ec3026a8b8da4f0aa9489d6f4c11f85

// const sentences = [
//   'Want to join Digital Marketing team?',
//   'Need to build Public Relation in market?',
//   'Want to create an Event with us?',
//   'Are you looking for a web developer?',
//   'Do you want to create Influencer Marketing?',
//   'Want to work on the mice solution ?',
// ];

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Want to join Digital Marketing team?');
  const [searchTerm] = useState('');

  const options = useMemo(() => ['Want to join Digital Marketing team?', 'Need to build Public Relation in market?', 'Want to create an Event with us?'], []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = options.indexOf(selectedOption);
      const nextIndex = (currentIndex + 1) % options.length;
      setSelectedOption(options[nextIndex]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [selectedOption, options]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
 
  // const [isHovered, setIsHovered] = useState(false);
  // const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  // // const [isHandTapping, setIsHandTapping] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // useEffect(() => {
  //   const handTapTimeout = setTimeout(() => {
  //     // setIsHandTapping(true);
  //     const tapEndTimeout = setTimeout(() => {
  //       // setIsHandTapping(false);
  //     }, 500); // Tap animation duration
  //     return () => clearTimeout(tapEndTimeout);
  //   }, 1000); // Delay before starting tap animation
  //   return () => clearTimeout(handTapTimeout);
  // }, [currentSentenceIndex]);

  // useEffect(() => {
  //   const intervals = setInterval(() => {
  //     if (!isHovered) {
  //       setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  //     }
  //   }, 3000);

  //   return () => clearInterval(intervals);
  // }, [isHovered]);

  // const currentSentence = sentences[currentSentenceIndex];

  return (
    <>
      <div className="background">
        <div className="content">
          <h1>Welcome to Atraski</h1>
          <h3 id="mainheading" style={{ marginTop: '-15px', fontSize: '20px' }}>
            <span className="desktop-only">Hello, World! We believe in inspiring India in a unique and innovative way. Every day, we offer a wide range of services across events, travel, blogging, and fashion to bring you the best of what we have to offer. We promise to inspire and delight you every step of the way. Atraski flourishing furiously over the past years is now proud to present a cabinet of successful events throughout all A tier cities of the country including open mics, fashion walks and walks promoting social causes, bloggers meets, art confluences along with travel meets and packaged tours all across India</span>
            <span className="mobile-only">Hello, World! We believe in inspiring India in a unique and innovative way. Every day, we offer a wide range of services across events, travel, blogging, and fashion to bring you the best of what we have to offer.</span>
          </h3>
          {/* <a href="/chat" className="containerchat"> */}
          {/* <Container className="d-flex align-items-center justify-content-center">
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={searchIcon} alt="Search" style={{ width: '20px', height: '20px' }} />
                <Alert
                  id="changeText"
                  variant="primary"
                  className="text-center position-relative"
                  style={{ width: '65ch', fontSize: '1.3rem', backgroundColor: '#F9F9F9' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                > */}
          {/* {isHandTapping && <img src={handImage} alt="Hand" className="hand-image" />} */}
          {/* {currentSentence} */}
          {/* </Alert> */}
          {/* </div> */}
          {/* </Container> */}
          {/* </a> */}
          <div onClick={handleToggle}             style={{ cursor:'pointer' }}
>


        <input
          type="text"
          value={selectedOption}
          placeholder={selectedOption}
          readOnly
          // style={{ width: selectedOption.length * 8, color: 'blue' }}
          style={{ width: selectedOption ? '50vh' : '350px',height:'6vh',borderRadius:'7px', color: 'black', backgroundColor:'',textAlign:'center',fontSize:'1.1rem' }}

          />
         <span className="search-icon" style={{ position: 'relative', right: '24.5rem' }}>
    <i className="fas fa-search" style={{ color: 'black' }}></i>
  </span>
        <span>&#x25BC;</span>
      </div>
      {isOpen && (
        <div>
          
          {filteredOptions.map((option) => (
            <a href='/chat'><div key={option} onClick={() => handleOptionSelect(option)}
            style={{ cursor: 'pointer', fontSize: '1rem', textAlign: 'center', margin: '-1.3rem 0' }}
            >
              {option}
            </div></a>
          ))}
        </div>
      )}
       
        </div>
      </div>



<div
        className="background-image-res"

        style={{
          backgroundImage: `url(${logo8})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '100vh',
          position: 'relative',
          zIndex: '-1'

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
          backgroundImage: `url(${logo1})`,
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


      <footer className=" text-white" style={{ backgroundColor: '#333' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p><i className="fa fa-envelope"></i> Email: abhyuday.majhi@atraski.com</p>
              <p><i className="fa fa-envelope"></i>Email: priti.jhawar@atraski.com</p>              <p><i className="fa fa-phone"></i> Contact No: 9163720198</p>
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

export default Main
