import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log("value: ", value);
  const ICON_SIZE = 24;
  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentionalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": ICON_SIZE + "px" }}>
          <Icon id="chevron-down" strokeWidth={2} size={ICON_SIZE} />
        </IconWrapper>
      </PresentionalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;
const NativeSelect = styled.select`
  /* Fill container completely */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentionalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px; /* For the chevron-icon */
  border-radius: 8px;
  /* Adjacent child selector: Move focus (hidden by opacity) to our sibbling */
  ${NativeSelect}:focus + & {
    /* Fallback for browsers that dont support -webkit-focus-ring-color that is browser default */
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  /* Allow to click in the select :D */
  pointer-events: none;
`;

export default Select;
