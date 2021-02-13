import ruleTester from "../ruleTester";
import customStyles from "../src/rules/customStyles";

describe("custom-styles", () => {
  // @ts-expect-error TODO
  ruleTester.run("custom-styles", customStyles, {
    valid: [
      {
        code: `
            const Wrapper = styled.div\`
              color: \${({theme}) => theme.orbit.colorTextPrimary};
              background: \${({theme}) => theme.orbit.paletteWhite};
              z-index: \${({theme}) => theme.orbit.zIndexModal};
              font-size: \${({theme}) => theme.orbit.fontSizeTextLarge};
              line-height: \${({theme}) => theme.orbit.lineHeightText};
              box-shadow: \${({theme}) => theme.orbit.boxShadowModal};
              border-radius: \${({theme}) => theme.orbit.borderRadiusNormal};
            \`
          `,
      },
    ],
    invalid: [
      {
        code: `
            const Wrapper = styled.div\`
              color: #fff;
              background: #808080;
              z-index: 10;
              font-size: 16px;
              line-height: 1.2;
              box-shadow: 60px -16px teal;
              border-radius: 3px;
              \`
          `,
        errors: [
          "color should be replaced with Orbit design token",
          "background should be replaced with Orbit design token",
          "z-index should be replaced with Orbit design token",
          "font-size should be replaced with Orbit design token",
          "line-height should be replaced with Orbit design token",
          "box-shadow should be replaced with Orbit design token",
          "border-radius should be replaced with Orbit design token",
        ],
      },
    ],
  });
});
