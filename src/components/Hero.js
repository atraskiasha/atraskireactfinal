import React from "react";
// import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import "./App.css";

function Hero() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://i.insider.com/60f7f9ee2a723b0011e4f4b7?width=1136&format=jpeg')",
          height: 600, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 animate">Business E-Shower</h1>
              <h4 className="mb-3">What sets us Apart</h4>
              
              <a
                className="btn btn-outline-light btn-lg"
                href="https://forms.gle/C3j12MsdHEEdaNVH7"
                role="button"
              >
                Join our community{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
