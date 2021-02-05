// @flow
import { TYPES } from "../../consts";

import type { Params } from "./index";

const resolveCloseIconColor = ({ type, theme, hover }: Params) => {
  if (hover) {
    if (type === TYPES.UNAVAILABLE) return "";
    if (type === TYPES.LEGROOM) return theme.orbit.paletteBlueDarker;
    return theme.orbit.paletteProductDarker;
  }

  if (type === TYPES.LEGROOM) return theme.orbit.paletteBlueDarkHover;

  return theme.orbit.paletteProductDarkHover;
};

export default resolveCloseIconColor;