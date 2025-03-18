'use client';

import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

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
