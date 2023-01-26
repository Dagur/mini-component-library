import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    fontSize: 1,
    borderSize: 1,
    iconSize: 12,
  },
  large: {
    fontSize: 21 / 16,
    borderSize: 2,
    iconSize: 18,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const { fontSize, borderSize, iconSize } = sizes[size];
  return (
    <Wrapper width={width}>
      <StyledInput
        name="iconinput"
        placeholder={placeholder}
        fontSize={fontSize}
        borderSize={borderSize}
        iconPadding={iconSize}
      />
      <StyledIcon id={icon} size={iconSize} />
      <VisuallyHidden>
        <label htmlFor="iconinput">{label}</label>
      </VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: ${(p) => p.width}px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin-block: auto;
  color: currentColor;
`;

const StyledInput = styled.input`
  border-width: 0 0 ${(p) => p.borderSize}px 0;
  font-size: ${(p) => p.fontSize}rem;
  padding-left: calc(1.25 * ${(p) => p.iconPadding}px);
  width: 100%;
  color: currentColor;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
