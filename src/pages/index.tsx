import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Card from '../../components/Cards';
import Image from 'next/image'; 
import { motion } from 'framer-motion';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <header className="header">
          <div className="logo-container">
            <img src="kaitlyn.png" alt="Logo" className="logo" />
          </div>
          <nav>
            <ul className="nav-links">
              <div className="border"><li><a href="#">INTERACTION</a></li></div>
              <li><a href="https://kaitlyncameron.ca">HOME</a></li>
              <li><a href="https://www.linkedin.com/in/kaitlyncameron00/">LINKEDIN</a></li>
              <li><a href="https://kaitlyncameron.ca/p/Contact">CONTACT</a></li>
            </ul>
          </nav>
        </header>
        <div className="heroImage"> 
          <div className="heroImage">
            <img src="kaitlyn.svg" alt="Kaitlyn" id="kaitlynImage"></img>
          </div>
        </div>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4
              }
            }
          }}
          style={{ textAlign: 'center' }}
        >
          <h1 style={{ fontSize: '30px' }}>Welcome to my Landing Page</h1>
        </motion.div>

        <div className="bannerProject">
          <span className="bannerTextProject">Design</span>
        </div>

        <div className="gridContainer">
          <Card 
            title="Adobe Illustrator" 
            description="This is some cool explanation" 
            imageUrl="facebook.png"
            popupHeader="Adobe"
            popup="facebook.png"
            whileHover={{ rotate: 360 }}
          />
          <Card 
            title="Adobe Photoshop" 
            description="This is some cool explanation" 
            imageUrl="facebook.png"
            popupHeader="Adobe"
            popup="facebook.png"
            whileHover={{ rotate: 360 }}
          />
          <Card 
            title="Adobe InDesign" 
            description="This is some cool explanation" 
            imageUrl="facebook.png"
            popupHeader="Adobe"
            popup="facebook.png"
            whileHover={{ rotate: 360 }}
          />
        </div>

        <div className="banner">
          <span className="bannerText">Marketing </span>
        </div>

        <div className="gridContainer">
          <Card 
            title="Social Media Marketing" 
            description="This is some cool explanation" 
            imageUrl="facebook.png"
            popupHeader="Adobe"
            popup="facebook.png"
            whileHover={{ rotate: 360 }}
          />
          <Card 
            title="Content Marketing" 
            description="This is some cool explanation" 
            imageUrl="facebook.png"
            popupHeader="Adobe"
            popup="facebook.png"
            whileHover={{ rotate: 360 }}
          />
          <Card 
            title="Content Marketing" 
            description="This is some cool explanation" 
            imageUrl="facebook.png"
            popupHeader="Adobe"
            popup="facebook.png"
            whileHover={{ rotate: 360 }}
          />
        </div>

        <footer>
          <div className="footer">
            <p>© Kaitlyn Cameron 2024 </p>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  );
}

export default App;