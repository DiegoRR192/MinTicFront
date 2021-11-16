import React, { useState } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imagen1 from 'media/sofa2.jpg';
import imagen2 from 'media/sofa3.jpg';
import imagen3 from 'media/sofa2.jpg';

const images = [imagen1,imagen2,imagen3]
const images2 = [
    {
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];

const Sidebar = (props) => {

  return (
    <div className="Carousel">
    <Carousel >
      {images.map((item,key)=>(
        <img  src={item} alt={item.alt}/> 
      ) )}
    </Carousel>
    </div>
  );
}

export default Sidebar;
