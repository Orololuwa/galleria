import styled from "styled-components";

const GalleryProvider = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5100;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  p {
    text-align: right;
    font-size: ${(props) => props.theme.typeScale.header5};
    color: ${(props) => props.theme.colors.white[100]};
    text-transform: uppercase;
    align-self: flex-end;
    letter-spacing: 2.5px;
    cursor: pointer;
  }
`;

export default GalleryProvider;
