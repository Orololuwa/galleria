import styled from "styled-components";

const StyledArtistCard = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 3rem;

  .thumbnail {
    display: block;
    margin: 0 auto;
    object-fit: cover;
    width: 100%;
  }

  .name {
    color: ${(props) => props.theme.colors.white[100]};
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2.5rem;
    line-height: 2.5rem;

    &-art,
    &-artist {
      margin: 0.5rem 0;
    }

    &-art {
      @media only screen and (max-width: 56.25em) {
        font-size: ${(props) => props.theme.typeScale.header4};
      }
    }

    &-artist {
      @media only screen and (max-width: 56.25em) {
        font-size: ${(props) => props.theme.typeScale.bodyText4};
      }
    }
  }
`;

export default StyledArtistCard;
