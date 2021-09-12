import React from "react";
import StyledArtistCard from "./style";
import { artistCard } from "models/ArtistCard";

const ArtistCard: React.FC<artistCard> = (props) => {
  return (
    <StyledArtistCard>
      <img src={props.thumbnail} alt={props.artName} className="thumbnail" />
      <div className="name">
        <h3 className="name-art">{props.artName}</h3>
        <p className="name-artist">{props.artistName}</p>
      </div>
    </StyledArtistCard>
  );
};

export default ArtistCard;
