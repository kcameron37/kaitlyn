import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Card from '../../components/Cards';
import Image from 'next/image'; 

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
            <img src="kaitlyn.svg" alt="Kaitlyn" id="kaitlynImage" /> 
          </div>
        </div>

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
          />
          <Card 
            title="Adobe Photoshop" 
            description="This is some cool explanation" 
            imageUrl="facebook.png"
            popupHeader="Adobe"
            popup="facebook.png"
          />
          <Card 
            title="Adobe InDesign" 
            description="This is some cool explanation" 
            imageUrl="facebook.png"
            popupHeader="Adobe"
            popup="facebook.png"
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
          />
          <Card 
            title="Content Marketing" 
            description="This is some cool explanation" 
            imageUrl="facebook.png"
            popupHeader="Adobe"
            popup="facebook.png"
          />
          <Card 
            title="Content Marketing" 
            description="This is some cool explanation" 
            imageUrl="facebook.png"
            popupHeader="Adobe"
            popup="facebook.png"
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