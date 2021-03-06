import styled, { keyframes } from "styled-components";
import IonIcon from "@reacticons/ionicons";

interface CustomProps {
  state?: string;
}

interface FooterProps {
  readonly width?: number;
  readonly duration: () => string | string;
}

interface NavIcoProps {
  readonly disabled?: boolean;
}

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;    
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
`;

export const NavIcon = styled(IonIcon)<NavIcoProps>`
  width: 3rem !important;
  height: 3rem !important;
  color: ${(props) =>
    props.disabled
      ? props.theme.colors.white[300]
      : props.theme.colors.black[100]};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.5s;

  &:hover {
    color: ${(props) => props.theme.colors.white[300]};
  }

  &:active {
    color: ${(props) => props.theme.colors.black[100]};
  }
`;

const ArtDetailsProvider = styled.main<CustomProps>`
  padding: 7.5rem 2.5rem 0 2.5rem;
  position: relative;
  animation: ${(props) =>
      props.state === "entering"
        ? fadeIn
        : props.state === "exiting"
        ? fadeOut
        : null}
    0.5s;

  .body {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 15rem;

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

      .view_image {
        position: absolute;
        bottom: 3.5rem;
        left: 2rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background-color: ${(props) => props.theme.colors.black[100]}cc;
        cursor: pointer;
        transition: all 0.5s;

        &-icon {
          width: 1.5rem;
        }

        p {
          color: ${(props) => props.theme.colors.white[100]};
          text-transform: uppercase;
          font-size: ${(props) => props.theme.typeScale.bodyText4};
          letter-spacing: 5px;
        }

        &:hover {
          background-color: ${(props) => props.theme.colors.white[100]}44;
        }

        @media only screen and (max-width: 75em) {
          bottom: 50%;
        }

        @media only screen and (max-width: 56.25em) {
          bottom: 3.5rem;
        }

        @media only screen and (max-width: 37.5em) {
          top: 3.5rem;
          bottom: unset;
        }
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

        h1 {
          font-size: 3.5rem;
        }
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

export const Footer = styled.footer<FooterProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 5rem;
  background-color: ${(props) => props.theme.colors.white[100]};
  border-top: 1px solid ${(props) => props.theme.colors.white[300]};

  .footer-names {
    p,
    h3 {
      animation: ${fadeIn} 1.2s;
    }
    p {
      color: ${(props) => props.theme.colors.black[200]};
    }

    @media only screen and (max-width: 56.25em) {
      h3 {
        font-size: ${(props) => props.theme.typeScale.header4};
      }

      p {
        font-size: ${(props) => props.theme.typeScale.bodyText4};
      }
    }

    @media only screen and (max-width: 37.5em) {
      h3 {
        font-size: ${(props) => props.theme.typeScale.header5};
      }

      p {
        font-size: ${(props) => props.theme.typeScale.bodyText5};
      }
    }
  }

  .footer-controls {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  @media only screen and (max-width: 56.25em) {
    padding: 2.5rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 1rem 2.5rem;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    background-color: ${(props) => props.theme.colors.black[100]};
    width: ${(props) => props.width}%;
    transition: width ${(props) => props.duration};
  }
`;

export default ArtDetailsProvider;
