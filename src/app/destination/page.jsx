import React from "react";
import PropTypes from "prop-types";
import Banner from "./_components/Banner/Banner";
import Breadcrumb from "./_components/Breadcrumb/Breadcrumb";
import Discovery from "./_components/Discovery/Discovery";
import OurTeam from "../../../components/section/ourteam/OurTeam";
import ExploreTrip from "./_components/ExploreTrip/ExploreTrip";

function AllDestinationsPage(props) {
  return (
    <main id="all-destinations" className="bg-white">
      <Banner />
      <Breadcrumb />
      <Discovery />
      <OurTeam secondary />
      <ExploreTrip />
    </main>
  );
}

AllDestinationsPage.propTypes = {};

export default AllDestinationsPage;
