import { FilledMediumFilled } from ".";

export default {
  title: "Components/FilledMediumFilled",
  component: FilledMediumFilled,
  argTypes: {
    states: {
      options: ["default", "focused", "pressed", "hovered", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    states: "default",
    className: {},
    divClassName: {},
    text: "Button",
  },
};
