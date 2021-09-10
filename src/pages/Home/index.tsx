import Main from "./style";
import React from "react";
import { Thumbnail } from "models/Thumbnails";

const HomePage: React.FC<{ data: Thumbnail[] }> = (props) => {
  console.log(props.data);
  return (
    <Main>
      {props.data.map((img, i) => (
        <img src={img.images.thumbnail} alt={img.name} key={i} />
      ))}
    </Main>
  );
};

export default HomePage;
