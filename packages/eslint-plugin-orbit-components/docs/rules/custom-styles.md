# custom-styles

Prevents inconsistencies between Orbit and custom written styles

## Rule details

The following patterns are considered errors:

```jsx
const StyledWrapper = styled.div`
  color: #808080;
  background: #f1f1f1;
  z-index: 10;
  font-size: 16px;
  line-height: 1.2;
  box-shadow: 60px -16px teal;
  border-radius: 3px;
`;
```

The following patterns are **not** considered errors:

```jsx
const StyledWrapper = styled.div`
  color: ${({theme}) => theme.orbit.colorTextPrimary};
  background: ${({theme}) => theme.orbit.paletteWhite};
  z-index: ${({theme}) => theme.orbit.zIndexModal};
  font-size: ${({theme}) => theme.orbit.fontSizeTextLarge};
  line-height: ${({theme}) => theme.orbit.lineHeightText};
  box-shadow: ${({theme}) => theme.orbit.boxShadowModal};
  border-radius: ${({theme}) => theme.orbit.borderRadiusNormal};
`,
```
