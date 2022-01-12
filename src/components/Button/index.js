import React from "react";
import PropTypes from "prop-types";

import { ContainerButton } from "./styles";

export default function Button({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>;
}

Button.propTypes = {
  children: PropTypes.string,
};
