import Main from "./style";
import React from "react";
import data from "data.json";
import Masonry from "react-masonry-css";
import ArtistCard from "components/ArtistCard";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const HomePage: React.FC = () => {
  return (
    <Main>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((img, i) => (
          <ArtistCard
            className="artistCard"
            thumbnail={img.images.thumbnail}
            artistName={img.artist.name}
            artName={img.name}
            key={i}
          />
        ))}
      </Masonry>
    </Main>
  );
};

export default HomePage;
