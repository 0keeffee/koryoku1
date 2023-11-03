/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const TextLargeText = ({ states, className, divClassName, text = "Button" }) => {
  const [state, dispatch] = useReducer(reducer, {
    states: states || "default",
  });

  return (
    <div
      className={`text-large-text states-0-${state.states} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`div ${divClassName}`}>
        {["active", "default", "focused", "hovered", "pressed"].includes(state.states) && <>{text}</>}

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

TextLargeText.propTypes = {
  states: PropTypes.oneOf(["active", "default", "focused", "pressed", "hovered", "disabled"]),
  text: PropTypes.string,
};
