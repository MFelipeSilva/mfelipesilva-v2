import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  &::-moz-selection {
    background: #7b2cbf;
  }

  &::selection {
    background: #7b2cbf;
  }
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
}
`;
