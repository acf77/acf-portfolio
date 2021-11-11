import React, { Component } from 'react';

import './SlideCard.css'

interface CardProps {
    image: string | undefined
}

export default function SlideCard({image}: CardProps) {
    return (
        <div className='card' >
            <img src={image}/>
        </div>
      
  )
}

