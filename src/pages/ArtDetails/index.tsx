import React from "react";
import ArtDetailsProvider from "./style";
import data from "data.json";
import { useParams } from "react-router";

type ArtDetailsParams = {
  idx: string;
};

const ArtDetails: React.FC = () => {
  const { idx } = useParams<ArtDetailsParams>();
  const id = +idx;
  return (
    <ArtDetailsProvider>
      <div className="body">
        <div className="body-image">
          <picture>
            <source
              media="(max-width:600px)"
              srcSet={data[id].images.hero.small}
            />
            <img src={data[id].images.hero.large} alt="hero" />
          </picture>
          <div className="body-names">
            <h1>{data[id].name}</h1>
            <p>{data[id].artist.name}</p>
          </div>
          <img
            src={data[id].artist.image}
            alt={data[id].artist.name}
            className="artist"
          />
        </div>
        <div className="body-desc">
          <p>{data[id].description}</p>
          <a target="_blank" href={data[id].source} rel="noreferrer">
            go to source
          </a>
          <span className="year">{data[id].year}</span>
        </div>
      </div>
      <div className="footer">
        <div className="footer-names">
          <h3>{data[id].name}</h3>
          <p>{data[id].artist.name}</p>
        </div>
        <div className="footer-controls">controls</div>
      </div>
    </ArtDetailsProvider>
  );
};

export default ArtDetails;
