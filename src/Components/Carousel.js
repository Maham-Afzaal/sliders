// carousel that just make cover full screen but i don't like it 
import React from 'react';
import HeroSlider, { Slide, Nav } from 'hero-slider';

import bogliasco from '../images/bogliasco.jpg';
import countyClare from '../images/countyClare.jpg';
import craterRock from '../images/craterRock.jpg';
import giauPass from '../images/giauPass.jpg';

export default function BasicSlider() {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      style={{
        color: '#FFF'
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: '90vmin',
      }}
    >
      <Slide
        background={{
          backgroundImage: `url(${giauPass})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      <Slide
        background={{
          backgroundImage: `url(${bogliasco})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      <Slide
        background={{
          backgroundImage: `url(${countyClare})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      <Slide
        background={{
          backgroundImage: `url(${craterRock})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      <Nav />
    </HeroSlider>
  );
}
