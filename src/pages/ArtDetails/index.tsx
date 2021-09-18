import React, { useCallback, useEffect, useState } from "react";
import ArtDetailsProvider, { Footer } from "./style";
import { useHistory, useParams } from "react-router";
import { StoreContext } from "context/store-context";
import { useContext } from "react";
import { NavIcon } from "./style";
import Gallery from "components/Gallery";
import { Transition } from "react-transition-group";
import { exit } from "process";

type ArtDetailsParams = {
  idx: string;
};

interface artDetailsProps {
  slideShow?: boolean;
}

const ArtDetails: React.FC<artDetailsProps> = (props) => {
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

  const navPageHandler = useCallback(
    (direction: "next" | "prev") => {
      if (direction === "next") {
        if (currentPage === lastPage) {
          //history.push(`art-${firstPage}`);
          ctx.stopSlideShow();
          return;
        } else {
          setShow(false);
          setTimeout(() => {
            history.push(`art-${currentPage + 1}`);
          }, 501);
        }
      }

      if (direction === "prev") {
        if (currentPage === firstPage) {
          //history.push(`art-${lastPage}`);
          return;
        } else {
          setShow(false);
          setTimeout(() => {
            history.push(`art-${currentPage - 1}`);
          }, 501);
        }
      }
    },
    [currentPage, history, firstPage, lastPage]
  );

  const keyPressHandler = useCallback(
    (event: any) => {
      if (event.key === "ArrowRight") {
        navPageHandler("next");
      } else if (event.key === "ArrowLeft") {
        navPageHandler("prev");
      } else {
        return;
      }
    },
    [navPageHandler]
  );

  useEffect(() => {
    window.onkeydown = keyPressHandler;
    //window.addEventListener("keypress", keyPressHandler);
  }, [keyPressHandler]);

  //This is my slideshow section.
  useEffect(() => {
    if (!props.slideShow) {
      return;
    }
    const loop = setInterval(() => {
      navPageHandler("next");
    }, 5000);

    return () => clearInterval(loop);
  }, [navPageHandler, props.slideShow]);

  //view gallery functions
  const [showGallery, setShowGallery] = useState(false);

  const showGalleryHandler = () => setShowGallery(true);
  const hideGalleryHandler = () => setShowGallery(false);

  //Transition Fns
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, [idx]);

  return (
    <>
      <Transition
        in={show}
        timeout={{ enter: 510, exit: 500 }}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          console.log(state);
          return (
            <>
              {showGallery && (
                <Gallery
                  image={ctx.data[id].images.gallery}
                  title={ctx.data[id].name}
                  onConfirm={hideGalleryHandler}
                  state={state}
                />
              )}
              <ArtDetailsProvider state={state}>
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
                    <span className="view_image" onClick={showGalleryHandler}>
                      <img
                        src="/shared/icon-view-image.svg"
                        alt="icon"
                        className="view_image-icon"
                      />
                      <p>view image</p>
                    </span>
                  </div>
                  <div className="body-desc">
                    <p>{ctx.data[id].description}</p>
                    <a
                      target="_blank"
                      href={ctx.data[id].source}
                      rel="noreferrer"
                    >
                      go to source
                    </a>
                    <span className="year">{ctx.data[id].year}</span>
                  </div>
                </div>
              </ArtDetailsProvider>
            </>
          );
        }}
      </Transition>

      <Footer className="footer" width={len}>
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
      </Footer>
    </>
  );
};

export default ArtDetails;
