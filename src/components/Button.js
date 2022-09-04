import React from "react";
import PropTypes from "prop-types";
import { Button as MuiButton } from "@mui/material";

const Button = ({ label, bgcolor, variant, handleClick }) => {
  let scale = 1;

  switch (variant) {
    case "sm":
      scale = 0.9;
      break;
    case "md":
      scale = 1;
      break;
    case "lg":
      scale = 1.1;
      break;
    default:
      scale = 1;
  }

  const style = {
    bgcolor: bgcolor,
    transform: `scale(${scale})`,
  };

  return (
    <MuiButton sx={style} variant="contained" onClick={handleClick}>
      {label}
    </MuiButton>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  bgcolor: PropTypes.string,
  variant: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button;
