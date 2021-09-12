import styled from "styled-components";

const ArtDetailsProvider = styled.main`
  padding: 7.5rem 2.5rem 0 2.5rem;

  .body {
    &-image {
      width: 30%;
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: calc(100% - 5rem);
        z-index: 500;
        width: 5rem;
        height: 1px;
        background-color: ${(props) => props.theme.colors.white[300]};
      }

      img {
        width: 100%;
      }
    }

    &-names {
      background-color: ${(props) => props.theme.colors.white[100]};
      position: absolute;
      top: 0;
      left: calc(100% - 5rem);
      padding: 0 0 5rem 5rem;

      h1 {
        margin: 0.5rem 0;
        font-size: 5rem;
        line-height: 6.5rem;
      }

      p {
        color: ${(props) => props.theme.colors.black[200]};
        margin-top: 1rem;
      }
    }
  }
`;

export default ArtDetailsProvider;
