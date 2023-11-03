import { TextLargeText } from ".";

export default {
  title: "Components/TextLargeText",
  component: TextLargeText,
  argTypes: {
    states: {
      options: ["active", "default", "focused", "pressed", "hovered", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    states: "active",
    className: {},
    divClassName: {},
    text: "Button",
  },
};
