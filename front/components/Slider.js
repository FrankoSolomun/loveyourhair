import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '70vh',
}
const slideImages = [
  {
    url: '1.jpg',
  },
  {
    url: '2.jpg',
  },
  {
    url: '3.jpg',
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container z-[3453453]">
        <Slide
        prevArrow={<div style={{ color: 'red' }} className='text-[200px]'>HAHA</div>}
        nextArrow={<div style={{ color: 'blue' }}>Next</div>}
        >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;