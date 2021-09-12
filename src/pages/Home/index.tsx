import Main from "./style";
import React from "react";
import { Thumbnail } from "models/Thumbnails";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const HomePage: React.FC<{ data: Thumbnail[] }> = (props) => {
  //console.log(props.data);

  return (
    <Main>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.data.map((img, i) => (
          <img src={img.images.thumbnail} alt={img.name} key={i} />
        ))}
      </Masonry>
      <section className="gallery"></section>
    </Main>
  );
};

export default HomePage;
