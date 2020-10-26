// @flow
import * as React from "react";
import styled from "styled-components";

import { ItineraryPartProvider } from "./context";
import Stack from "../../../Stack";
import ItineraryPartStatus from "./ItineraryPartStatus";

import type { Props } from ".";

const WrapperStyled = styled.div`
  position: relative;
`;

const ItineraryPart = ({ status, label, children }: Props) => {
  const content = React.Children.toArray(children);

  const parts =
    content && content.length > 0
      ? React.Children.map(content, (el, i) => {
          if (!React.isValidElement(el)) return null;

          return (
            <ItineraryPartProvider
              last={i + 1 === content.length}
              isNextHidden={content[i + 1] && content[i + 1].props.hidden}
              isHidden={content[i].props.hidden}
              hasStatus={!!status}
              index={i}
              count={content.length}
            >
              {el}
            </ItineraryPartProvider>
          );
        })
      : null;

  return (
    <WrapperStyled>
      {status ? (
        <ItineraryPartStatus type={status} label={label}>
          <Stack direction="column">{parts}</Stack>
        </ItineraryPartStatus>
      ) : (
        <Stack direction="column">{parts}</Stack>
      )}
    </WrapperStyled>
  );
};

export default ItineraryPart;

export { default as ItineraryPartStatus } from "./ItineraryPartStatus";
export { default as ItineraryPartPlace } from "./ItineraryPartPlace";
export { default as ItineraryPartDetail } from "./ItineraryPartDetail";
