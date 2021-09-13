import styled from "styled-components";

const ArtDetailsProvider = styled.main`
  padding: 7.5rem 2.5rem 0 2.5rem;

  .body {
    width: 100%;
    display: flex;
    justify-content: space-between;
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

    .artist {
      width: 12.5rem;
      position: absolute;
      bottom: 0;
      right: -15rem;
    }

    &-desc {
      width: 30%;
      padding-right: 1.5rem;
      margin-right: 5rem;
      color: ${(props) => props.theme.colors.black[200]};
      letter-spacing: 1px;
      line-height: 2.5rem;
      font-size: ${(props) => props.theme.typeScale.bodyText3};
      position: relative;

      p {
        margin-top: 7.5rem;
      }

      a {
        font-size: ${(props) => props.theme.typeScale.bodyText4};
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.black[200]};
        margin-top: 5rem;
        display: block;
      }

      .year {
        font-size: 20rem;
        position: absolute;
        top: 10rem;
        right: -10rem;
        color: ${(props) => props.theme.colors.white[200]};
        mix-blend-mode: darken;
      }
    }
  }
`;

export default ArtDetailsProvider;
