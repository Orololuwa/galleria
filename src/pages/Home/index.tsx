import Main from "./style";
import React, { useContext } from "react";
import Masonry from "react-masonry-css";
import ArtistCard from "components/ArtistCard";
import { useHistory } from "react-router";
import { StoreContext } from "context/store-context";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const HomePage: React.FC = () => {
  const history = useHistory();
  const ctx = useContext(StoreContext);
  return (
    <Main>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {ctx.data.map((img, i) => (
          <ArtistCard
            className="artistCard"
            thumbnail={img.images.thumbnail}
            artistName={img.artist.name}
            artName={img.name}
            onClick={() => history.push(`/art-${i + 1}`)}
            key={i}
          />
        ))}
      </Masonry>
    </Main>
  );
};

export default HomePage;
