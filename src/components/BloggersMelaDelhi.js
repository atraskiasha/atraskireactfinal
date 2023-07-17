import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BloggerMelaDelhi.css';

import BannerImage from './images/Banner.jpg';
import Image3 from './images/8.jpg';
import AkashImage from './images/akash.png';
import Ambassador1 from './images/Ambassador1.jpg';
import Ambassador01 from './images/Ambassador01.jpg';
import Ambassador02 from './images/Ambassador02.jpg';
import Ambassador03 from './images/Ambassador03.jpg';
import Ambassador04 from './images/Ambassador04.jpg';
import Ambassador05 from './images/Ambassador05.jpg';
import Ambassador06 from './images/Ambassador06.jpg';
import Ambassador07 from './images/Ambassador07.jpg';
import Ambassador08 from './images/Ambassador08.jpg';
import Ambassador09 from './images/Ambassador09.jpg';
import Ambassador10 from './images/Ambassador10.png';
import Ambassador11 from './images/Ambassador11.png';
import pannel1 from './images/pannelist01.png';
import pannel2 from './images/pannelist02.png';
import pannel3 from './images/pannelist03.png';
import pannel5 from './images/pannelist05.png';
import pannel6 from './images/Panlist06.jpg';
import pannel7 from './images/Panlist07.jpg';
import pannel8 from './images/Panlist09.jpg';
import pannel9 from './images/Panlist10.jpg';
import pannel10 from './images/Panlist11.jpg';
import pannel11 from './images/Panlist12.jpg';











function BloggerMelaDelhi (){
 

    return (
      <>
        <div className="container-fluid blog-delhi">
          <div className='blog-heading'> <h1 className='heading-1'>Bloggers Mela Delhi</h1></div>
          <div className='blog-image'>
            <div className='blog-image-2'></div>
            
          </div>
          
          <div className='ques'>
            <div className='conatiner-fluid ques1 my-4'>
              <h1 className='p-3 para'>What is Bloggers Mela Delhi</h1>
              <p className='p-3 para'> Blogger’s Mela is all about paving the way for newcomers who have started their own journey as bloggers.  
Blogger’s Mela brings together visionaries, the thoughts of the panelists and established bloggers to explore the journey of a blogger, discuss emerging trends, and share insights on future innovation. The event is offering a platform for all the newcomers to connect, learn and be inspired.
</p>
            </div>
            <div className='conatiner-fluid ques1  my-4'>
            <h1 className='p-3 para'>What will be happening</h1>
              <p className='p-3 para'> in which we are giving opportunity to ambassador and panellist to have good interaction with brands, also bloggers who have just started there journey will be able to have a clear vision after this event we will have fashion show, Fun activities, pop up stalls and panel discussion
              .We have Nitin Gupta as fashion influencer and Mehak & Rituraj as travel blogger’s and Khushboo as food blogger and Fatehh singh as digital creator and Paritosh Anand as creative director, entrepreneur and public speaker 
</p>
            </div>
            <div className='conatiner-fluid ques1  my-4'>
            <h1 className='p-3 para'>Why should Register</h1>
              <p className='p-3 para'>   The event is an opportunity aimed at aspiring bloggers to conduct an insightful session with well-known brands, panelists and successful bloggers. The event is offering a platform for all the newcomers to connect, learn and be inspired.
This year's event is going to be graced by renowned bloggers such as Nitin Gupta as a fashion influencer, Mehek and Rituraj as Travel Blogger, Khushboo as a food Blogger , Fatehh Singh as a digital creator, Paritosh Anand as a creative director, an entrepreneur, a public speaker and many more.
 
</p>
            </div>
            </div>
            <div className='container-fluid big-box'>
            <div className='container-fluid small-box'>

            <div className='ambasador mt-4'><h1 className='h1'>Ambassadors</h1></div>
            <div class="logos">
    <div class="logo-slider">
     
            <img src={Image3} className='' alt=" "/>
        
  

            <img src={Ambassador01} className='' alt=" "/>
            <img src={Ambassador02} className='' alt=" "/>
            <img src={Ambassador04} className= '' alt=" "/>

            <img src={Ambassador06} className='' alt=" "/>
            <img src={Ambassador07} className='' alt=" "/>
            <img src={Ambassador08} className='' alt=" "/>






    </div>
    <div class="logo-slider">



     
 

    <img src={Ambassador09} className='' alt=" "/>

    <img src={Ambassador11} className='' alt=" "/>
    <img src={Ambassador07} className='' alt=" "/>
                <img src={Ambassador06} className='' alt=" "/>
                <img src={Ambassador04} className= '' alt=" "/>
                <img src={Ambassador06} className='' alt=" "/>






     


</div>
</div>


</div>
</div>
<div className='container-fluid big-box'>
  <div className='container-fluid small-box'>
<div className='container-fluid ambasador mt-4'><h1 className='h1'>Pannelist</h1></div>

<div class="logos">
    <div class="logo-slider1">
     
            <img src={pannel1} className='' alt=" "/>
        
  

            <img src={pannel2} className='' alt=" "/>
            <img src={pannel3} className='' alt=" "/>

            <img src={pannel5} className='new-img'alt=" "/>

            <img src={pannel6} className= ' 'alt=" "/>
            <img src={pannel2} className=''alt=" "/>

    </div>
    <div class="logo-slider1">
     
    <img src={pannel7}className='' alt=""/>
 

    <img src={pannel8}className='' alt=" "/>

    <img src={pannel9} className=''alt=" "/>
    <img src={pannel10} className=''alt=" "/>
    <img src={pannel11} className=''alt=" "/>
    <img src={pannel2} className=''alt=" "/>

   
</div>
</div></div>


</div>
    </div>

   
        <div className='container-fluid ques2'>
          <Link to="https://atraski.com/events/bloggers-mela-delhi/" target='_blank' style={{ textDecoration: "none" }}>
            <h1 className='heading-31'>Register For Blogger Mela</h1>
          </Link>
        </div>
      </>
    );
  
}

export default BloggerMelaDelhi;
