import styled from "styled-components";

const Main = styled.main`
  padding-top: 3rem;
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    //margin-left: -30px; /* gutter size offset */
    width: auto;
    gap: 3rem;
    padding: 0 2.5rem;
    margin: 0 auto;
    position: relative;
  }
  .my-masonry-grid_column {
    //padding-left: 30px; /* gutter size */
    background-clip: padding-box;

    &:nth-child(3) > .artistCard:last-child {
      position: absolute;
      right: 2.5rem;
      bottom: 0;
      width: inherit;
      padding-left: 3.5rem;

      .name {
        left: 3.5rem;
      }

      @media only screen and (max-width: 1100px) {
        bottom: 7rem;
      }

      @media only screen and (max-width: 900px) {
        bottom: 5rem;
      }
    }

    @media only screen and (max-width: 700px) and (min-width: 500px) {
      &:first-child > .artistCard:last-child {
        position: absolute;
        right: 2.5rem;
        bottom: 0;
        width: inherit;
        padding-left: 3.5rem;

        .name {
          left: 3.5rem;
        }
      }
    }
  }

  /* Style your items */
  .my-masonry-grid_column > img {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`;

export default Main;
