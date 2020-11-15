import React from "react";
import PropTypes from "prop-types";

const Text = (props) => {
  const { children } = props;

  return <div {...props}>{children}</div>;
};

Text.defaultProps = {
  size: "16px",
};

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Text;
