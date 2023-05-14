import { useState } from 'react';
import earth from './assets/earth.jpg';
import moon from './assets/moon.jpg';
import cat from './assets/pusheen.gif';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Parallax pages={4} className='parallex-container'>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={3}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${earth})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          style={{ textAlign: 'center' }}
          sticky={{ start: 0.9, end: 2.9 }}
          className='catLayer'
        >
          <img src={cat} id='cat' />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.05}>
          <h1>Welcome to my website!</h1>
          <h1>Parallax Layer Demo</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={2}>
          <h1>Thank you for coming!</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
