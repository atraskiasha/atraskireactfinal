/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React from 'react';


import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.css";



import About from './components/About';
import Service from './components/Service';
import Main from './components/Main';
import Work1 from './components/Work1';
import Careers from './components/Careers';
import Event1 from './components/Event1';
import ContactUs from './components/contact';
import Public from './components/publicreln';
import Web from './components/web';
import Mice from './components/mice';
import Marketing from './components/marketing';
import Production from './components/Production';
import Blogger from './components/Blogger';
import Eshower from './components/Eshower';
// import Footer1 from './components/Footer1';
import Privacy1 from './components/Privacy1';
import Chat from './components/chat';
import M from './components/Models';
import EventsAtAtraski from './components/EventsAtAtraski';
import Services from './components/Services';
// import Footer from './components/Footer';
import Section1 from './components/section1';
import GoogleForm from './components/Form';
// import Aboutus from './components/Aboutus';
// import NewBanner from './components/Newbanner';
// import MV from './components/MV';
import BrandCollaboration from './components/Collaboration';
// import IP from './components/IP';
import Cities from './components/Cities';
import Main2 from './components/Main2';
import BloggerMelaDelhi from './components/BloggersMelaDelhi';
import PublicRelation from './components/PublicRelation';
import FashionPage from './components/FashionPage';


import  IntellectualPage from './components/IntellectualPage';
import IntegratedMarketing from './components/IntegratedMarketing';
import Exhibit from './components/Exhibit';
import MarketgPage from './components/Marketpage';





function App() {

  return (
    <>


      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route exact path="/Atraski" element={<Main2/>} />
          <Route path="/atraskireact" element={<Main2/>} />
          <Route path="/" element={<Main2/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/OurWork" element={<Work1 />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/event" element={<Event1 />} />
          <Route path="/public" element={<Public />} />
          <Route path="/production" element={< Production />} />
          <Route path="/mice" element={<Mice />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/web" element={<Web />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/blogger" element={<Blogger />} />
          <Route path="/Eshower" element={<Eshower />} />
          {/* <Route path="/footer" element={<Footer1 />} /> */}
          <Route path="/privacy" element={<Privacy1 />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/mainmodel" element={<M />} />
          <Route path="/eventatatraski" element={<EventsAtAtraski />} />
          <Route path="/collabration" element={<BrandCollaboration />} />
          <Route path="/servicesfashion" element={<Services />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/fashion" element={<Section1 />} />
          <Route path="/googleform" element={<GoogleForm />} />
          <Route path="/bloggersMelaDelhi" element={<BloggerMelaDelhi />} />
            <Route path="/publicrelation" element={<PublicRelation />} />
          <Route path="/fashion1" element={<FashionPage />} />
          <Route path="/intellpage" element={<IntellectualPage />} />
          <Route path="/integratemarketing" element={<IntegratedMarketing />} />
          <Route path="/exhibit" element={<Exhibit />} />
          <Route path="/market1" element={<MarketgPage />} />



        </Routes>

      </BrowserRouter>
      {/* <Footer1 /> */}


      








    </>
  );
};



export default App;


