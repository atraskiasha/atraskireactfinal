import React from 'react'
import { about } from './imagegallery/about.jpg';

const Aboutus = () => {
  return (
    <div className="row m-0 py-3 py-md-5 px-2 d-flex justify-content-center align-items-center">
      <div className="col-lg-5 d-none d-lg-block ps-0 ps-sm-4 text-center text-lg-start py-3">
        <text className="Heading-1">About Us</text>
        <br />
        <div className=" Text-1 py-3 ">
          <p>
            Atraski Fashion is the runway where we groom our models; upcoming
            fashionistas to make a giant leap into the real world of fashion
            with brilliance and extraordinaire!
          </p>
          <p>
            The sole mission of Atraski Fashion is to sculpt raw talent and give
            shape to passion in order to facilitate their strong commencement
            into the fashion spree.
          </p>
        </div>
      </div>

      <div className="col-12 col-lg-5 py-3   py-lg-0 ">
        <img
          src={about}
          alt=""
          className="img-fluid"
          style={{ width: " 100%", maxHeight: "29rem" }}
        />
      </div>
      <div className="col-11  d-block d-lg-none ps-0 ps-sm-4 ">
        <text className="Heading-1">About Us</text>
        <br />
        <div className=" Text-1 py-3 ">
          <p>
            Atraski Fashion is the runway where we groom our models; upcoming
            fashionistas to make a giant leap into the real world of fashion
            with brilliance and extraordinaire!
          </p>
          <p>
            The sole mission of Atraski Fashion is to sculpt raw talent and give
            shape to passion in order to facilitate their strong commencement
            into the fashion spree.
          </p>
        </div>
      </div>
    </div>
  );
}   

export default Aboutus;
