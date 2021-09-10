import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyles = createGlobalStyle`
${normalize()}

*,
*::after,
*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    @media only screen and (min-width: 600px) {
        font-size: 75%;
    }
    @media only screen and (min-width: 900px) {
        font-size: 87.5%;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 100%;
    }
    
}


body {
    transition: all 0.05s linear;
    width: 100%;
    height: 100vh;
    line-height: 2.1rem;
    font-size: ${(props) => props.theme.typeScale.bodyText2};
    font-family: ${(props) => props.theme.primaryFont};
    background-color: ${(props) => props.theme.colors.white[200]};
    color: ${(props) => props.theme.colors.black[100]};
    font-style: normal;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
  
h1 {
    line-height: 4.3rem;
    font-size: ${(props) => props.theme.typeScale.header1};
}
h2 {
    line-height: 2.8rem;
    font-size: ${(props) => props.theme.typeScale.header2};
}
h3 {font-size: ${(props) => props.theme.typeScale.header3};}
h4 {font-size: ${(props) => props.theme.typeScale.header4};}
h5 {font-size: ${(props) => props.theme.typeScale.header5};}  
`;

export default GlobalStyles;
