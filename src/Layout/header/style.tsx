import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem;
  position: relative;
  color: ${(props) => props.theme.colors.black[200]};
  font-size: ${(props) => props.theme.typeScale.bodyText3};
  letter-spacing: 5px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 2.5rem;
    width: calc(100% - 5rem);
    height: 1px;
    background-color: ${(props) => props.theme.colors.white[300]};
  }

  .logo {
    height: 3.5rem;

    @media only screen and (max-width: 56.25em) {
      height: 2.5rem;
    }

    @media only screen and (max-width: 37.5em) {
      height: 1.5rem;
    }
  }

  @media only screen and (max-width: 37.5em) {
    font-size: ${(props) => props.theme.typeScale.bodyText5};
    letter-spacing: 2.5px;
  }
`;

export default StyledHeader;
