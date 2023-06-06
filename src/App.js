/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React from 'react';


import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from './components/Navbar';



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
import Prod from './components/production';
import Blogger from './components/Blogger';
import Eshower from './components/Eshower';
import Footer1 from './components/Footer1';
import Privacy1 from './components/Privacy1';
import Chat from './components/chat';


function App() {

  return (
    <>


      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Main/>} />
          <Route path="/atraskireact" element={<Main/>} />
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/Work1" element={<Work1 />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/event" element={<Event1 />} />
          <Route path="/public" element={<Public />} />
          <Route path="/production" element={<Prod />} />
          <Route path="/mice" element={<Mice />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/web" element={<Web />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/blogger" element={<Blogger />} />
          <Route path="/Eshower" element={<Eshower />} />
          <Route path="/footer" element={<Footer1 />} />
          <Route path="/privacy" element={<Privacy1 />} />
          <Route path="/chat" element={<Chat />} />


        </Routes>

      </BrowserRouter>
      {/* <Footer1 /> */}


      








    </>
  );
};



export default App;


