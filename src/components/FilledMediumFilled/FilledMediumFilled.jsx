/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const FilledMediumFilled = ({ states, className, divClassName, text = "Button" }) => {
  const [state, dispatch] = useReducer(reducer, {
    states: states || "default",
  });

  return (
    <div
      className={`filled-medium-filled ${state.states} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`button ${divClassName}`}>
        {["default", "focused", "hovered", "pressed"].includes(state.states) && <>{text}</>}

        {state.states === "disabled" && <>Disabled</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.states === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          states: "hovered",
        };
    }
  }

  if (state.states === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          states: "default",
        };
    }
  }

  if (state.states === "pressed") {
    switch (action) {
      case "click":
        return {
          states: "default",
        };
    }
  }

  if (state.states === "focused") {
    switch (action) {
      case "click":
        return {
          states: "pressed",
        };
    }
  }

  return state;
}

FilledMediumFilled.propTypes = {
  states: PropTypes.oneOf(["default", "focused", "pressed", "hovered", "disabled"]),
  text: PropTypes.string,
};
