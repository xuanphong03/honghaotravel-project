import React from 'react';
import BannerAbout from './BannerAbout';
import Commitment from './Commitment';
import Share from './Share';
import OurTeam from '../ourteam/OurTeam';

export default function About() {
  return (
    <div>
      <BannerAbout />
      <Share />
      <Commitment />
      <OurTeam secondary />
    </div>
  );
}
