import styled from "styled-components";

const StyledLayout = styled.div`
  padding: 0 5rem;

  @media only screen and (max-width: 56.25em) {
    padding: 0 2.5rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 0 0;
  }
`;

export default StyledLayout;
