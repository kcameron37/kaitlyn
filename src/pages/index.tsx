import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Card from '../../components/Cards';
import Image from 'next/image'; 
import { motion } from 'framer-motion';

function App() {
  return (
 
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
                delay: 0.9
              }
            }
          }}
          style={{ textAlign: 'center' }}
        >
        <h1 style={{ fontSize: '80px', paddingTop: '60px', paddingBottom: '100px', }}>Welcome to my Landing Page</h1>

        </motion.div>

        <div className="bannerProject">
          <span className="bannerTextProject">Design Experience </span>
        </div>

        <div className="gridContainer">
        <motion.div whileHover={{ rotate: 360 }}>
          <Card 
            title="Adobe Illustrator" 
            description="Two years of experience with Illustrator, skilled in crafting vector-based designs and illustrations with precision, creativity, and a keen eye for detail." 
            imageUrl="ai.png"
            popupHeader=""
            popup="coffee.png"
           
          />
          </motion.div>
          <Card 
            title="Adobe Photoshop" 
            description="Two years of experience with Photoshop, proficient in manipulating images and creating stunning graphics with attention to detail and creativity" 
            imageUrl="ps.png"
            popupHeader=""
            popup="water.png"
       
          />
          <Card 
            title="Adobe InDesign" 
            description="
            Three years of experience with InDesign, adept at creating visually captivating layouts and designs with precision and efficiency." 
            imageUrl="id.png"
            popupHeader=""
            popup="indesign.png"
        
          />
          
        </div>

        <div className="banner">
          <span className="bannerText">Marketing Experience </span>
        </div>

        <div className="gridContainer">
          <Card 
            title="Social Media Marketing" 
            description="
            Five years of expertise in social media marketing, demonstrating proficiency in developing strategic campaigns, engaging content creation, audience analysis, and driving measurable results across various platforms." 
            imageUrl="socialicons.jpg"
            popupHeader=""
            popup="social.png"
          
          />
          <Card 
            title="Digital Marketing" 
            description="With four years of experience in digital marketing, specializing in SEO and SEM, I excel in optimizing websites for search engines, conducting keyword research, managing PPC campaigns, and analyzing data. 

" 
            imageUrl="sem.png"
            popupHeader=""
            popup="seo.png"
         
          />
          <Card 
            title="Email Marketing" 
            description="Four years of experience in email marketing, specializing in crafting targeted campaigns, optimizing open and click-through rates, segmenting audiences, and leveraging analytics to drive engagement and conversions effectively." 
            imageUrl="em.png"
             popupHeader=""
            popup="email.png"
         
          />
        </div>

        <footer>
          <div className="footer">
            <p>© Kaitlyn Cameron 2024 </p>
          </div>
        </footer>
      </div>
 
  );
}

export default App;