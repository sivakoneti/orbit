import ruleTester from "../ruleTester";
import themeRTL, { ERROR } from "../src/rules/themeRTL";

describe("theme-rtl", () => {
  // @ts-expect-error TODO
  ruleTester.run("theme-rtl", themeRTL, {
    valid: [
      {
        code: `
          import styled from 'styled-components';
          import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

            const StyledWrapper = styled.div\`
              \${right}: 0;
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';
          import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

            const StyledWrapper = styled.div\`
              margin-\${right}: \${({ theme }) => theme.orbit.spaceSmall};
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';
          import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

            const StyledWrapper = styled.div\`
              margin-\${right}: \${({ theme }) => theme.orbit.spaceSmall};
            \`
          `,
      },
    ],
    invalid: [
      {
        code: `
          import styled from 'styled-components';
            const DocumentWrapper = styled.div\`
            width: 100%;
            position: relative;
            \${({ theme }) => (theme.rtl ? "right:" : "left:")} 7px;
            \${mq.desktop(css\`
              width: 30%;
              \${({ theme }) => (theme.rtl ? "right:" : "left:")} 0;
            \`)};
          \`
          `,
        errors: [ERROR],
      },
      {
        code: `
          import styled from 'styled-components';
            const StyledWrapper = styled.div\`
            \${({ theme }) => (theme.rtl ? "margin-right:" : "margin-left:")} 7px;
          \`
          `,
        errors: [ERROR],
      },
      {
        code: `
          import styled from 'styled-components';
            const StyledWrapper = styled.div\`
            \${({ theme }) => (theme.rtl ? "padding-right:" : "padding-left:")} 10px;
          \`
          `,
        errors: [ERROR],
      },
    ],
  });
});
