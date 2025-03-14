import React from "react";
import BannerAbout from "./BannerAbout";
import Commitment from "./Commitment";
import Share from "./Share";
import TestM from "../../common/TestM";

export default function About() {
  return (
    <div>
      <BannerAbout />
      <Share />
      <Commitment />
    </div>
  );
}
