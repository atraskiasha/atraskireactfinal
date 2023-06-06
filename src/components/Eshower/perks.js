import React from "react";
import { about } from '../imagegallery/bg.jpg';

function Perks() {
  const carde = {
    background: "#EBEBEB",
    color: "#6641AA",
    border: "none",
    height: "30vh",
    textAlign: "center",
    borderRadius: "5px",
    padding: " 40px 30px",
    fontSize: "30px",
      fontWeight: "bold",
    width:"500px"
  };

  return (
    <>
          <div className="row d-flex justify-content-between m-0  px-4 py-3 py-md-5" >
        <text
          className="Heading-1 text-center col-12 pt-2 pb-5"
        >
          Perks
        </text>

        <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-3 py-md-1">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={carde}
          >
            <text className=" Heading-4 text-center">Flexible working hour</text>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-3 py-md-1">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={carde}
          >
                      <text className=" Heading-4 text-center">
                          Health and wellness programs
             </text>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-3 py-md-1">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={carde}
          >
                      <text className="Heading-4 text-center">
                          Generous vacation policy
            </text>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-3 py-md-1">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={carde}
          >
                      <text className="Heading-4 text-center">
                          Professional developement opportunities
            </text>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-3 py-md-1">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={carde}
          >
            <text className="Heading-4 text-center">Employee discounts</text>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-3 py-md-1">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={carde}
          >
                      <text className="Heading-4 text-center">
                          Company-sponsored events
            </text>
          </div>
        </div>
       
      </div>
      {/* </div> */}
    </>
  );
}

export default Perks;
