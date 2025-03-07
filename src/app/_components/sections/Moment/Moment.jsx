import React from "react";
import PropTypes from "prop-types";
import SlideInfinite from "./SlideInfinite";

function Moment(props) {
  return (
    <section className="relative bg-white">
      <div className="max-w-[100rem] mx-auto">
        <SlideInfinite />
      </div>
    </section>
  );
}

Moment.propTypes = {};

export default Moment;
