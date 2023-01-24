import Icon from "../Icon";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const Select = ({ label, value, onChange, children }) => {
  return (
    <Button>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <StyledIcon size={24} strokeWidth={2} id="chevron-down" />
    </Button>
  );
};

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 12px;
  color: currentColor;
`;

const Button = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  width: fit-content;
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledSelect = styled.select`
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  appearance: none;
  border: none;
  font-size: 1rem;
  color: currentColor;

  &:focus-visible {
    outline: 2px solid ${COLORS.primary};
    outline-radius: 8px;
  }
`;

export default Select;
