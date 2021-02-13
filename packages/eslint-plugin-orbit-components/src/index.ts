import buttonHasTitle from "./rules/buttonHasTitle";
import unnecessaryText from "./rules/unnecessaryText";
import recommended from "./configs/recommended";
import customStyles from "./rules/customStyles";

export const rules = {
  "button-has-title": buttonHasTitle,
  "unnecessary-text": unnecessaryText,
  "custom-styles": customStyles,
};

export const configs = {
  recommended,
};
