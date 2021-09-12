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
    bottom: 2rem;
    left: 2rem;

    &-art,
    &-artist {
      margin: 0.5rem 0;
    }
  }
`;

export default StyledArtistCard;
