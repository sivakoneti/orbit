// @flow
import React from "react";
import styled from "styled-components";

import ChevronUp from "../../../icons/ChevronUp";
import ChevronDown from "../../../icons/ChevronDown";
import themeDefault from "../../../defaultTheme";
import Stack from "../../../Stack";
import Text from "../../../Text";
import Slide from "../../../utils/Slide";
import useBoundingRect from "../../../hooks/useBoundingRect";
import randomID from "../../../utils/randomID";
import { usePart } from "./context";
import ItineraryIcon from "./ItineraryIcon";

import type { PartDetailsProps as Props } from ".";

const WrapperStyled = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  padding: 0 12px;
  box-sizing: border-box;
  &:hover {
    background: ${({ theme }) => theme.orbit.paletteCloudLight};
  }
`;

WrapperStyled.defaultProps = {
  theme: themeDefault,
};

const SummaryStyled = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DurationStyled = styled.div`
  min-width: 60px;
`;

const ExpandableStyled = styled.div``;

const ItineraryPartDetails = ({ duration, summary, children, collapsed }: Props) => {
  const { expanded, setExpanded, hasStatus } = usePart();
  const [{ height }, ref] = useBoundingRect({ height: 0 });

  const slideID = React.useMemo(() => randomID("slideID"), []);
  const labelID = React.useMemo(() => randomID("labelID"), []);

  return (
    <WrapperStyled
      collapsed={collapsed}
      hasStatus={hasStatus}
      onClick={() => setExpanded(!expanded)}
    >
      <Stack flex align="center" spacing="compact">
        <DurationStyled>
          <Text weight="bold">{duration}</Text>
        </DurationStyled>
        <ItineraryIcon isDetails />
        <Stack
          inline
          justify="center"
          shrink
          direction="column"
          spacing={expanded ? "condensed" : "none"}
        >
          <SummaryStyled>{summary}</SummaryStyled>
          <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
            <ExpandableStyled ref={ref} onClick={() => setExpanded(!expanded)}>
              {children}
            </ExpandableStyled>
          </Slide>
        </Stack>
        {expanded ? <ChevronUp /> : <ChevronDown />}
      </Stack>
    </WrapperStyled>
  );
};

export default ItineraryPartDetails;
