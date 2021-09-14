import React from "react";
import ArtDetailsProvider from "./style";
import { useParams } from "react-router";
import { StoreContext } from "context/store-context";
import { useContext } from "react";

type ArtDetailsParams = {
  idx: string;
};

const ArtDetails: React.FC = () => {
  const ctx = useContext(StoreContext);
  const { idx } = useParams<ArtDetailsParams>();
  const id = +idx - 1;

  const len = ((id + 1) / ctx.data.length) * 100;

  // console.log(ctx.data.length);

  // console.log(len);

  return (
    <ArtDetailsProvider width={len}>
      <div className="body">
        <div className="body-image">
          <picture>
            <source
              media="(max-width:600px)"
              srcSet={ctx.data[id].images.hero.small}
            />
            <img src={ctx.data[id].images.hero.large} alt="hero" />
          </picture>
          <div className="body-names">
            <h1>{ctx.data[id].name}</h1>
            <p>{ctx.data[id].artist.name}</p>
          </div>
          <img
            src={ctx.data[id].artist.image}
            alt={ctx.data[id].artist.name}
            className="artist"
          />
        </div>
        <div className="body-desc">
          <p>{ctx.data[id].description}</p>
          <a target="_blank" href={ctx.data[id].source} rel="noreferrer">
            go to source
          </a>
          <span className="year">{ctx.data[id].year}</span>
        </div>
      </div>
      <div className="footer">
        <div className="footer-names">
          <h3>{ctx.data[id].name}</h3>
          <p>{ctx.data[id].artist.name}</p>
        </div>
        <div className="footer-controls">controls</div>
      </div>
    </ArtDetailsProvider>
  );
};

export default ArtDetails;
