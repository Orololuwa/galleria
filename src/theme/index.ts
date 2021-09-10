import { DefaultTheme } from "styled-components";

const colors = {
  white: {
    100: "#FFFFFF",
    200: "#FAFBFD"
  },
  black: {
    100: "#2C2929",
    200: "#2E2727"
  },
  green: {
    100: "#48BF59"
  }
};

const primaryFont = "'Libre Baskerville', serif";

const typeScale = {
  header1: "3.5rem",
  header2: "2.6rem",
  header3: "2.0rem",
  header4: "1.8rem",
  header5: "1.4rem",
  bodyText1: "1.6rem",
  bodyText2: "1.4rem",
  bodyText3: "1.2rem",
  bodyText4: "1.0rem",
  bodyText5: ".8rem"
};

const theme: DefaultTheme = {
  colors,
  primaryFont,
  typeScale
};

export { theme };
