/* eslint-disable no-unused-vars */
import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { img1, img2, img3, img4, img5, img6, img7, bannerimg, img11,img12,img13,img14,img15,img16 } from "./imagegallery";
import "../App.css";
import M from "./Models";
import EventsAtAtraski from "./EventsAtAtraski";
import Collaboration from "./Collaboration";
import Services from "./Services";
import Cities from "./Cities";

const Section1 = () => {
  const mystyle = {
    // border: "2px solid green",
    padding: "10px",
    // display:"flex"
  };
  const mystyle1 = {
    // border: "2px solid red",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
  };
  // const mystyle2 = {
    
  // };
  const pic= {
    width: "210px",/* You can set the dimensions to whatever you want */
    height: "210px",
    objectFit: "cover",
    margin:"15px"
}

  return (
    <div className="container-fluid">
      <div className="d-none d-lg-block">
        <div className="row col-12 m-0 ">
          <div className="col-4 " style={mystyle}>
            <div className="row col-12">
              <div className="col-6 imgBox">
                <img
                  src={img1}
                  alt=""
                  style={pic}
                />
              </div>
              <div className="col-6 imgBox">
                <img
                  src={img2}
                  alt=""
                  style={pic}
                />
              </div>
            </div>
            <div className="row col-12">
              <div className="col-6 imgBox">
                <img
                  src={img3}
                  alt=""
                  style={pic}
                />
              </div>
              <div className="col-6 imgBox">
                <img
                  src={img4}
                  alt=""
                  style={pic}
                />
              </div>
            </div>
            <div className="row col-12">
              <div className="col-6 imgBox">
                <img
                  src={img5}
                  alt=""
                  style={pic}
                />
              </div>
              <div className="col-6 imgBox">
                <img
                  src={img6}
                  alt=""
                  style={pic}
                />
              </div>
            </div>
          </div>
          <div className="col-4" style={mystyle1}>
            <div className="row col-12 biglogoBox">
              <img
                src={img7}
                alt=""
                style={{width:"350px" ,height:"20rem"}}
              />
            </div>
          </div>
          <div className="col-4 " style={mystyle}>
            <div className="row col-12">
              <div className="col-6 imgBox">
                <img
                  src={img11}
                  alt=""
                  style={pic}
                />
              </div>
              <div className="col-6 imgBox">
                <img
                  src={img12}
                  alt=""
                  style={pic}
                />
              </div>
            </div>
            <div className="row col-12">
              <div className="col-6 imgBox">
                <img
                  src={img13}
                  alt=""
                  style={pic}
                />
              </div>
              <div className="col-6 imgBox">
                <img
                  src={img14}
                  alt=""
                  style={pic}
                />
              </div>
            </div>
            <div className="row col-12">
              <div className="col-6 imgBox">
                <img
                  src={img15}
                  alt=""
                  style={pic}
                />
              </div>
              <div className="col-6 imgBox">
                <img
                  src={img16}
                  alt=""
                  style={pic}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 d-block d-lg-none justify-content-center">
        <img
          src={bannerimg}
          alt=""
          className="image-fluid"
          style={{ width: "100%" }}
        />
      </div>


      
      {/* <EventsAtAtraski/> */}
      <Services/>
      <Collaboration/>
      {/* <Cities/>
      <M/> */}
      
    </div>
  );
};

export default Section1;
