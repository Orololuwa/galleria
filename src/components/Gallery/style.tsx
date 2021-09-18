import styled from "styled-components";

import { fadeIn, fadeOut } from "pages/ArtDetails/style";

type GalleryProps = {
  state: string;
};

const GalleryProvider = styled.div<GalleryProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5100;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: suto;

  animation: ${(props) =>
      props.state === "entering"
        ? fadeIn
        : props.state === "exiting"
        ? fadeOut
        : null}
    0.5s;

  p {
    text-align: right;
    font-size: ${(props) => props.theme.typeScale.header5};
    color: ${(props) => props.theme.colors.white[100]};
    text-transform: uppercase;
    align-self: flex-end;
    letter-spacing: 2.5px;
    cursor: pointer;
  }

  img {
    height: calc(100vh - 20rem);
    object-fit: contain;
    width: auto;

    @media only screen and (max-width: 75em) {
      height: calc(100vh - 30rem);
    }

    @media only screen and (max-width: 56.25em) {
      height: calc(100vh - 40rem);
    }
  }
`;

export default GalleryProvider;
