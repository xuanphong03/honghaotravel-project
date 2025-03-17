'use client';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function AOSProvider({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      disable: 'mobile',
    });
  }, []);
  return children;
}
