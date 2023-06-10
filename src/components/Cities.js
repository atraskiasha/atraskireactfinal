import React from "react";
import "./M.css";
import kolkata from './imagegallery/Kolkata.jpg'
import Mumbai from './imagegallery/Kolkata.jpg'
import pune from './imagegallery/Kolkata.jpg'
import silliguri from './imagegallery/Kolkata.jpg'
import Delhi from './imagegallery/Kolkata.jpg'
import Guhawti from './imagegallery/Kolkata.jpg'
import Jaipur from './imagegallery/Kolkata.jpg'
import  Hyderabad  from "./imagegallery/Hyderabad.jpg";
  
 
 
import { Carousel } from "react-bootstrap";

const Cities = () => {
  const card = {
    margin: "10px",
    
  }
  return (
    <div className="container ">
      <h1 className="Heading-1 text-center py-3 my-3">
        CITIES ASSOCIATED WITH
      </h1>
      <Carousel>
        <Carousel.Item>
          <div className="d-flex col-12 justify-content-center ">
            <div className="" style={card}>
              <img
                className="w-30"
                src={kolkata}
                alt="First slide"
                style={{ borderRadius: "15px" }}
              />
              <h4 className="text-center">Kolkata</h4>
            </div>
            <div className="" style={card}>
              <img
                className="w-30"
                src={Mumbai}
                alt="First slide"
                style={{ borderRadius: "15px" }}
              />
              <h4 className="text-center">Mumbai</h4>
            </div>
            <div className="" style={card}>
              <img
                className="w-30"
                src={Hyderabad}
                alt="First slide"
                style={{ borderRadius: "15px" }}
              />
              <h4 className="text-center">Hyderabad</h4>
            </div>
            <div className="" style={card}>
              <img
                className="w-30"
                src={pune}
                alt="First slide"
                style={{ borderRadius: "15px" }}
              />
              <h4 className="text-center">Pune</h4>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex col-12 justify-content-center ">
            <div className="" style={card}>
              <img
                className="w-30"
                src={silliguri}
                alt="First slide"
                style={{ borderRadius: "15px" }}
              />
              <h4 className="text-center">silliguri</h4>
            </div>
            <div className="" style={card}>
              <img
                className="w-30"
                src={Delhi}
                alt="First slide"
                style={{ borderRadius: "15px" }}
              />
              <h4 className="text-center">Delhi</h4>
            </div>
            <div className="" style={card}>
              <img
                className="w-30"
                src={Guhawti}
                alt="First slide"
                style={{ borderRadius: "15px" }}
              />
              <h4 className="text-center">Guhawti</h4>
            </div>
            <div className="" style={card}>
              <img
                className="w-30"
                src={Jaipur}
                alt="First slide"
                style={{ borderRadius: "15px" }}
              />
              <h4 className="text-center">Jaipur</h4>
            </div>
          </div>
        </Carousel.Item>

        {/* Add more Carousel.Item components for additional slides */}
      </Carousel>
    </div>
  );
};

export default Cities;
