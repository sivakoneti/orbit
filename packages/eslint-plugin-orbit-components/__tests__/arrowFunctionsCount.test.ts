import ruleTester from "../ruleTester";
import arrowFunctionsCount, { ERROR } from "../src/rules/arrowFunctionsCount";

describe("arrow-functions-count", () => {
  // @ts-expect-error TODO
  ruleTester.run("arrow-functions-count", arrowFunctionsCount, {
    valid: [
      {
        code: `
          import styled, { css } from 'styled-components'

          const StyledWrapper = styled.div\`
            \${({theme, isActive, isHidden}) => css\`
                color: \${isActive ? theme.orbit.paletteWhite : theme.orbit.paletteBlueDark};
                background: \${theme.orbit.paletteBlueNormal};
                line-height: \${theme.orbit.lineHeightText};
                display: \${isHidden ? "block" : "none"};
                font-family: \${theme.orbit.fontFamily};
            \`}
          \`
        `,
      },
    ],
    invalid: [
      {
        code: `
          import styled from 'styled-components'

          const StyledWrapper = styled.div\`
            color: \${({theme, isActive}) => isActive ? theme.orbit.paletteWhite : theme.orbit.paletteBlueDark};
            background: \${({theme}) => theme.orbit.paletteBlueNormal};
            line-height: \${({theme}) => theme.orbit.lineHeightText};
            display: \${({isHidden}) => isHidden ? "block" : "none"};
            font-family: \${({theme}) => theme.orbit.fontFamily};
          \`
      `,
        errors: [ERROR],
      },
    ],
  });
});
