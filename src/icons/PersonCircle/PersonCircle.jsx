/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PersonCircle = ({ color = "black", className }) => {
  return (
    <svg
      className={`person-circle ${className}`}
      fill="none"
      height="50"
      viewBox="0 0 66 50"
      width="66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_4579_1450)">
        <path
          className="path"
          d="M55.5527 38.6562C52.6239 35.0812 46.1765 31.25 32.9972 31.25C19.8178 31.25 13.3745 35.0781 10.4417 38.6562C13.1439 41.2226 16.5752 43.2944 20.4803 44.7173C24.3854 46.1402 28.6638 46.8778 32.9972 46.875C37.3305 46.8778 41.6089 46.1402 45.514 44.7173C49.4191 43.2944 52.8504 41.2226 55.5527 38.6562Z"
          fill={color}
        />
        <path
          className="path"
          clipRule="evenodd"
          d="M33 28.125C36.2821 28.125 39.4297 27.1373 41.7504 25.3791C44.0712 23.621 45.375 21.2364 45.375 18.75C45.375 16.2636 44.0712 13.879 41.7504 12.1209C39.4297 10.3627 36.2821 9.375 33 9.375C29.7179 9.375 26.5703 10.3627 24.2496 12.1209C21.9288 13.879 20.625 16.2636 20.625 18.75C20.625 21.2364 21.9288 23.621 24.2496 25.3791C26.5703 27.1373 29.7179 28.125 33 28.125Z"
          fill={color}
          fillRule="evenodd"
        />
        <path
          className="path"
          clipRule="evenodd"
          d="M33 3.125C25.3419 3.125 17.9974 5.42968 12.5823 9.53204C7.16718 13.6344 4.125 19.1984 4.125 25C4.125 30.8016 7.16718 36.3656 12.5823 40.468C17.9974 44.5703 25.3419 46.875 33 46.875C40.6581 46.875 48.0026 44.5703 53.4177 40.468C58.8328 36.3656 61.875 30.8016 61.875 25C61.875 19.1984 58.8328 13.6344 53.4177 9.53204C48.0026 5.42968 40.6581 3.125 33 3.125ZM0 25C0 18.3696 3.47678 12.0107 9.66548 7.32233C15.8542 2.63392 24.2479 0 33 0C41.7521 0 50.1458 2.63392 56.3345 7.32233C62.5232 12.0107 66 18.3696 66 25C66 31.6304 62.5232 37.9893 56.3345 42.6777C50.1458 47.3661 41.7521 50 33 50C24.2479 50 15.8542 47.3661 9.66548 42.6777C3.47678 37.9893 0 31.6304 0 25Z"
          fill={color}
          fillRule="evenodd"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_4579_1450">
          <rect className="rect" fill="white" height="50" width="66" />
        </clipPath>
      </defs>
    </svg>
  );
};

PersonCircle.propTypes = {
  color: PropTypes.string,
};
