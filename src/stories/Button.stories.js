import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  bgcolor: "primary",
  variant: "sm",
  label: "click me",
};

export const Medium = Template.bind({});
Medium.args = {
  bgcolor: "primary",
  variant: "md",
  label: "click me",
};

export const Large = Template.bind({});
Large.args = {
  bgcolor: "primary",
  variant: "lg",
  label: "click me",
};
