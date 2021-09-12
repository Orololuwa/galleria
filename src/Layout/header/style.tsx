import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 5rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 5rem;
    width: calc(100% - 7.5rem);
    height: 1px;
    background-color: ${(props) => props.theme.colors.white[300]};
  }

  .logo {
    height: 3.5rem;
  }
`;

export default StyledHeader;
