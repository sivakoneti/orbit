import buttonHasTitle from "./rules/buttonHasTitle";
import unnecessaryText from "./rules/unnecessaryText";
import recommended from "./configs/recommended";
import defaultTheme from "./rules/defaultTheme";

export const rules = {
  "button-has-title": buttonHasTitle,
  "unnecessary-text": unnecessaryText,
  "default-theme": defaultTheme,
};

export const configs = {
  recommended,
};
