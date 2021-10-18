/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--height": "24px",
    "--margin": "4px",
    "--inner-max-width": "calc(100% - 8px)",
  },
  medium: {
    "--height": "12px",
    "--margin": "0px",
  },
  small: {
    "--height": "8px",
    "--margin": "0px",
  },
};
const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <WrapperProgressBar value={value} style={styles}>
      <Progress value={value}>
        <VisuallyHidden>{value}</VisuallyHidden>
      </Progress>
    </WrapperProgressBar>
  );
};

const WrapperProgressBar = styled.div.attrs((props) => ({
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": props.value,
}))`
  display: block;
  position: relative;
  width: 370px;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
`;

const Progress = styled.div`
  position: absolute;
  margin-top: var(--margin);
  margin-left: var(--margin);
  width: ${(props) => Math.floor(props.value)}%;
  max-width: var(--inner-max-width); 
  height: calc(100% - 2 * var(--margin));
  background-color: ${COLORS.primary};
  border-radius: ${(props) =>
    props.value > 99.7 ? "4px 4px 4px 4px" : "4px 0px 0px 4px"};
  }; 
`;

export default ProgressBar;
