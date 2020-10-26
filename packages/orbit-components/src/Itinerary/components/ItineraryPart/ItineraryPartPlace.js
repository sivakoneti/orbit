// @flow
import React from "react";
import styled from "styled-components";

import Stack from "../../../Stack";
import Text from "../../../Text";
import ItineraryIcon from "./ItineraryIcon";

import type { PartPlaceProps as Props } from ".";

const WrapperStyled = styled.div`
  display: block;
  position: relative;
  opacity: ${({ hidden }) => (hidden ? `0.5` : `1`)};
  padding: 0 12px;
  box-sizing: border-box;
`;

const DateStyled = styled.div`
  min-width: 60px;
`;

const ItineraryPartPlace = ({ date, time, name, designation, hidden }: Props) => {
  return (
    <WrapperStyled hidden={hidden}>
      <Stack inline align="center">
        <DateStyled>
          <Stack inline direction="column" spacing="condensed">
            <Text weight="bold">{time}</Text>
            <Text type="secondary" size="small">
              {date}
            </Text>
          </Stack>
        </DateStyled>
        <ItineraryIcon />
        <Stack spacing="condensed">
          <Text weight="bold">{name}</Text>
          <Text type="secondary" size="small">
            {designation}
          </Text>
        </Stack>
      </Stack>
    </WrapperStyled>
  );
};

export default ItineraryPartPlace;
