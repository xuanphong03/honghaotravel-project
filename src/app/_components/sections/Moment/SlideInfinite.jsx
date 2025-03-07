import React from "react";
import PropTypes from "prop-types";
import "./Moment.css";

function SlideInfinite(props) {
  return (
    <div className="slider w-full py-[1rem]">
      <ul className="slider-list flex flex-row gap-[1rem] overflow-x-auto hidden_scrollbar ">
        {[...Array(10)].map((_, index) => (
          <li
            key={index}
            className="slider-item w-[30rem] h-[20rem] bg-red-500 shrink-0 rounded-[1.25rem]"
          ></li>
        ))}
      </ul>
    </div>
  );
}

SlideInfinite.propTypes = {};

export default SlideInfinite;
