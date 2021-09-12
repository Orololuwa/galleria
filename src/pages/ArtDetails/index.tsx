import React from "react";
import ArtDetailsProvider from "./style";
import data from "data.json";

const ArtDetails: React.FC = () => {
  return (
    <ArtDetailsProvider>
      <div className="body">
        <div className="body-image">
          <picture>
            <source
              media="(max-width:600px)"
              srcSet={data[0].images.hero.small}
            />
            <img src={data[0].images.hero.large} alt="hero" />
          </picture>
          <div className="body-names">
            <h1>{data[0].name}</h1>
            <p>{data[0].artist.name}</p>
          </div>
        </div>
        <div className="body-desc">...description</div>
      </div>
      <div className="footer">...</div>
    </ArtDetailsProvider>
  );
};

export default ArtDetails;
