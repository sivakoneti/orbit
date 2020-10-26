// @flow
import * as React from "react";
import styled from "styled-components";

import ItineraryIcon from "../ItineraryPart/ItineraryIcon";
import Stack from "../../../Stack";

import type { Props } from ".";

const WrapperStyled = styled.div`
  position: relative;
`;

const OffsetStyled = styled.div`
  min-width: 60px;
`;

const ItineraryLinedContent = ({ children }: Props) => {
  return (
    <Stack inline>
      <OffsetStyled />
      <ItineraryIcon />
      <WrapperStyled>{children}</WrapperStyled>
    </Stack>
  );
};

export default ItineraryLinedContent;
