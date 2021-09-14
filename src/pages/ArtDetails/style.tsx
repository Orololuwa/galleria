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
        left: calc(100% - 7.5rem);
        z-index: 500;
        width: 5rem;
        height: 1px;
        background-color: ${(props) => props.theme.colors.white[300]};

        @media only screen and (max-width: 56.25em) {
          left: calc(100% - 15rem);
          width: 15rem;
        }
      }

      img {
        width: 100%;
      }

      @media only screen and (max-width: 56.25em) {
        width: 75%;
        align-self: flex-start;
      }

      @media only screen and (max-width: 37.5em) {
        width: 100%;
      }
    }

    &-names {
      background-color: ${(props) => props.theme.colors.white[100]};
      position: absolute;
      width: 40rem;
      top: 0;
      left: calc(100% - 7.5rem);
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

      @media only screen and (max-width: 75em) {
        width: 30rem;

        h1 {
          font-size: 4.5rem;
          line-height: 5rem;
        }
      }

      @media only screen and (max-width: 56.25em) {
        left: calc(100% - 15rem);

        // h1 {
        //   font-size: 3.5rem;
        // }
      }

      @media only screen and (max-width: 37.5em) {
        left: 1px;
        top: 100%;
        transform: translateY(-50%);
      }
    }

    .artist {
      width: 12.5rem;
      position: absolute;
      top: calc(100% - 10rem);
      left: calc(100% + 2.5rem);

      @media only screen and (max-width: 75em) {
        width: 10rem;
        top: calc(50%);
      }

      @media only screen and (max-width: 56.25em) {
        width: 10rem;
        top: calc(50%);
        transform: translateY(calc(-50% + 7.5rem));
      }

      @media only screen and (max-width: 37.5em) {
        width: 7.5rem;
        top: calc(100%);
        left: 0;
        transform: translateY(60%);
      }
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

        @media only screen and (max-width: 37.5em) {
          margin-top: 7.5rem;
        }
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

        @media only screen and (max-width: 75em) {
          top: 5rem;
          right: -7.5rem;
          font-size: 15rem;
        }

        @media only screen and (max-width: 56.25em) {
          top: 3.5rem;
          left: -12.5rem;
        }

        @media only screen and (max-width: 37.5em) {
          top: 7.5rem;
          left: 50%;
          font-size: 10rem;
        }

        @media only screen and (max-width: 28.125em) {
          transform: translateX(calc(-50% + 2.5rem));
        }
      }

      @media only screen and (max-width: 75em) {
        padding-right: 0;
        width: 50%;
        margin-right: 0;
      }

      @media only screen and (max-width: 56.25em) {
        width: 75%;
      }

      @media only screen and (max-width: 37.5em) {
        width: 100%;
      }
    }

    @media only screen and (max-width: 56.25em) {
      flex-direction: column;
      align-items: center;
      gap: 7.5rem;
    }
  }
`;

export default ArtDetailsProvider;
