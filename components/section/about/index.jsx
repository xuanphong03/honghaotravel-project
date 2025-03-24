import React from 'react';
import BannerAbout from './BannerAbout';
import Commitment from './Commitment';
import Share from './Share';
import OurTeam from '../ourteam/OurTeam';

export default function About() {
  return (
    <section id="about">
      <BannerAbout />
      <Share />
      <Commitment />
      <OurTeam secondary className={'relative z-10 bg-white'} />
    </section>
  );
}
