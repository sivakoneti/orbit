import buttonHasTitle from "./rules/buttonHasTitle";
import unnecessaryText from "./rules/unnecessaryText";
import recommended from "./configs/recommended";
import arrowFunctionsCount from "./rules/arrowFunctionsCount";

export const rules = {
  "button-has-title": buttonHasTitle,
  "unnecessary-text": unnecessaryText,
  "arrow-functions-count": arrowFunctionsCount,
};

export const configs = {
  recommended,
};
