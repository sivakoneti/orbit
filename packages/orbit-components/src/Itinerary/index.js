// @flow
import * as React from "react";

// import compose from "../utils/functions/compose";
import type { Props } from ".";

const Itinerary = ({ children }: Props) => {
  const content = React.Children.toArray(children);

  return content && content.length > 0
    ? React.Children.map(content, el => {
        if (!React.isValidElement(el)) return null;
        return el;
      })
    : null;
};

export default Itinerary;
