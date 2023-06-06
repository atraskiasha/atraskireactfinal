import React from 'react'
import { Link } from 'react-router-dom'
import Abouts from './Eshower/About';
import Hero from './Eshower/Hero';
import Perks from './Eshower/perks';
const Eshower = () => {



    return (
        <>
            <div className="line">
              
              <Hero />
              <Abouts />
             

                {/* <h2 class='lineUp'>BUSINESS E-SHOWER</h2>
            </div>


            <div class="eshower">
                <div class="esh">
                    <div class="col">
                        <div class="e-shower">
                            <h1 class="text-white">What Sets Us Apart:</h1>
                            <p class="text-white">Introducing Business E-Shower, a spectacular virtual gathering celebrating and supporting new businesses. Join entrepreneurs, industry leaders, and like-minded professionals from across the business landscape to forge connections, share insights, and inspire growth. Engage with a vibrant community through interactive platforms, networking, and idea exchange. Experience the convenience of connecting from your own screen. Whether you're a seasoned entrepreneur looking to expand your network or a budding business owner seeking inspiration and guidance, this event offers a unique opportunity to connect with like-minded individuals who share your drive and ambition.</p>
                            <h2>Perks</h2>
                            <ul type="circle">
                                <li>Flexible working hours</li>
                                <li>Health and wellness programs</li>
                                <li>Generous vacation policy</li>
                                <li>Professional development opportunities</li>
                                <li>Employee discounts</li>
                                <li>Company-sponsored events</li>
                            </ul>
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '0vh' }}>
                                <button type="button" class="btn btn-info">Join Our Community</button>
                            </div>

                        </div>
                    </div>
                </div>
                 {/* footer starts  */}
      {/* <footer className=" text-white">
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
      </footer>  */}

      {/*  footer ends  */}
            </div>
        </>
    )
}

export default Eshower
