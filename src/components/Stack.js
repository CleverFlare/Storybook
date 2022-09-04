import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Stack = ({ children, direction = "row", spacing = 2, wrap = true }) => {
  let style = {
    display: "flex",
    flexDirection: direction,
    gap: spacing,
    flexWrap: wrap ? "wrap" : "nowrap",
  };
  return <Box sx={style}>{children}</Box>;
};

export default Stack;

Stack.propTypes = {
  direction: PropTypes.oneOf(["row", "column"]),
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
};
