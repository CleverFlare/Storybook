import { Paper } from "@mui/material";
import { default as StackComponent } from "../components/Stack";

export default {
  title: "Components/Stack",
  component: StackComponent,
  argTypes: { numberOfChildren: { type: "number", defaultValue: 4 } },
};

const Template = ({ numberOfChildren, ...args }) => (
  <StackComponent {...args}>
    {[...Array(numberOfChildren).keys()].map((num) => (
      <Paper
        variant="outlined"
        sx={{
          width: 50,
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {num + 1}
      </Paper>
    ))}
  </StackComponent>
);

export const Stack = Template.bind({});
Stack.args = {
  numberOfChildren: 4,
  direction: "row",
  spacing: 2,
  wrap: false,
};
