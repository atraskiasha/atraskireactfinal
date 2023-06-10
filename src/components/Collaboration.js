import React from 'react'

const Collaboration = () => {
  return (
    <div>
      <div className="row my-3 py-3 py-md-5 px-2  justify-content-center align-items-center">
        <h1 className="Heading-1 text-center"> OUR PAST COLLABORATION</h1>
        {/* <div className="col-lg-5 d-none d-lg-block ps-0 ps-sm-4 text-start py-3"> */}
        <div className="col-9 ps-0 ps-sm-4 m-2 p-3 justify-content-center">
          <p>
            Atraski welcomes each and every individual starting from a beginner
            to an intermediate who believes in the fact that Fashion is like
            the air they need to breathe and survive.
          </p>
          <p>
            Here are some of our previous journeys and collaborations where our
            models amazed the world with their gorgeous performance & aesthetic
            expressions while our designers lit up the garments with their
            brilliance!
          </p>
        </div>
        <div className="col-9" style={{fontWeight:"bold"}}>
          <ul>
            <li>Bhubaneswar Fashion Week</li>
            <li>Bangalore Fashion Confluence</li>
            <li>Pantaloons</li>
            <li>Big Bazar</li>
            <li>Pride campaign</li>
            <li>IIT Kanpur , KIIT fest.</li>
          </ul>
        </div>

        {/* <div className="col-11  d-block d-lg-none ps-0 ps-sm-4 ">
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
      </div> */}
      </div>
    </div>
  );
}

export default Collaboration;
