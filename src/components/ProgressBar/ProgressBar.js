/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0px",
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
  },
};

const BAR_WIDTH = 185;

const drawBar = (percentage) => {
  if (percentage === 0) {
    return ""
  } else if (percentage === 100) {
    const finishedWidth = BAR_WIDTH - 16;
    return `
      M4,0
      h${finishedWidth}
      q4,0 4,4
      v8
      q0,4 -4,4
      h-${finishedWidth}
      q-4,0 -4,-4
      v-8
      q0,-4 4,-4
      z`
  } else {
    const radius = Math.min(BAR_WIDTH * (percentage / 100), 4);
    const finishedWidth = Math.max(BAR_WIDTH * (percentage / 100) - 4 - radius, 0);
    return `M${radius},0
      h${finishedWidth}
      v16
      h-${finishedWidth}
      q-${radius},0 -${radius},-${radius}
      v-8
      q0,-${radius} ${radius},-${radius}
      z`
  }
}

const ProgressBar = ({ value, size }) => {
  const percentage = (BAR_WIDTH * value) / BAR_WIDTH;
  const finishedWidth = BAR_WIDTH * (percentage / 100);
  return (
    <Wrapper
      role="progressbar"
      aria-labelledby="loadinglabel"
      aria-valuenow={percentage}
      style={SIZES[size]}
    >
      <BarContainer version="2.0">
        <Bar
          as={size === "large" ? "path" : "rect"}
          finishedWidth={finishedWidth}
          d={drawBar(percentage)}
        />
      </BarContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  width: ${BAR_WIDTH}px;
  fill: ${COLORS.transparentGray15};
`;

const BarContainer = styled.svg`
  width: 100%;
  height: var(--height);
  padding: var(--padding);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 4px;
`;

const Bar = styled.rect`
  width: ${(p) => p.finishedWidth + "px"};
  height: calc(var(--height) - (2 * var(--padding)));
  fill: ${COLORS.primary};
`;

export default ProgressBar;
