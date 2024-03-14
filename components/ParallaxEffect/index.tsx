import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

function ParallaxEffect({ children, layers }) {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        className="scroll-container"
        layers={layers}
        style={{
          height: '100vh', 
        }}
      >
        {children}
      </ParallaxBanner>
    </ParallaxProvider>
  );
}

export default ParallaxEffect;