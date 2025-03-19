'use client';

import { useState } from 'react';
import Marquee from 'react-fast-marquee';

export default function CarouselMobile({ children, ...props }) {
  const [direction, setDirection] = useState('right');

  const handleChangeDirection = () => {
    setDirection(direction === 'right' ? 'left' : 'right');
  };

  return (
    <Marquee
      {...props}
      direction={direction}
      onCycleComplete={handleChangeDirection}
    >
      {children}
    </Marquee>
  );
}
