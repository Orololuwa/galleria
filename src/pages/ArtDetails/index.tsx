import React from "react";
import ArtDetailsProvider from "./style";
import { useHistory, useParams } from "react-router";
import { StoreContext } from "context/store-context";
import { useContext } from "react";
import { NavIcon } from "./style";

type ArtDetailsParams = {
  idx: string;
};

const ArtDetails: React.FC = () => {
  const history = useHistory();
  const ctx = useContext(StoreContext);
  const { idx } = useParams<ArtDetailsParams>();
  const id = +idx - 1;

  const len = (+idx / ctx.data.length) * 100;

  // console.log(ctx.data.length);

  // console.log(len);

  const lastPage: number = ctx.data.length;
  const firstPage: number = 1;
  const currentPage: number = +idx;

  const navPageHandler = (direction: "next" | "prev") => {
    if (direction === "next") {
      if (currentPage === lastPage) {
        //history.push(`art-${firstPage}`);
        return;
      } else {
        history.push(`art-${currentPage + 1}`);
      }
    } else if (direction === "prev") {
      if (currentPage === firstPage) {
        //history.push(`art-${lastPage}`);
        return;
      } else {
        history.push(`art-${currentPage - 1}`);
      }
    } else {
      return;
    }
  };

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
        <div className="footer-controls">
          <NavIcon
            name="play-skip-back-outline"
            onClick={() => navPageHandler("prev")}
            disabled={currentPage === firstPage}
          />
          <NavIcon
            name="play-skip-forward-outline"
            onClick={() => navPageHandler("next")}
            disabled={currentPage === lastPage}
          />
        </div>
      </div>
    </ArtDetailsProvider>
  );
};

export default ArtDetails;
