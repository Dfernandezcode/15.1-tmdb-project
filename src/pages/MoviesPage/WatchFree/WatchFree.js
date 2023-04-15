import { useState } from "react";
import Item from "../../../components/Item/Item";
import useFetch from "../../../hooks/useFetch";
import { FormattedMessage } from "react-intl";
import "../../../styles/movies-components.scss";

const WatchFree = () => {
  const [toggleMedia, setToggleMedia] = useState("movie");

  const API_URL_WATCHFREE = `${process.env.REACT_APP_API_URL}/discover/${toggleMedia}?sort_by=release_date.desc&language=es-ES&page=1&vote_count.gte=1000&vote_average.gte=5&watch_region=ES&with_watch_monetization_types=free&api_key=${process.env.REACT_APP_API_KEY}`;
  const [freeMedia] = useFetch(API_URL_WATCHFREE);

  //SHOW MORE FUNCTIONALITY
  const NUM_ITEMS_PER_PAGE = 4;

  const [numMoviesToShow, setNumMoviesToShow] = useState(NUM_ITEMS_PER_PAGE);
  const freeMovies = freeMedia?.results?.slice(0, numMoviesToShow) || [];
  const showMoreMovies = () =>
    setNumMoviesToShow(numMoviesToShow + NUM_ITEMS_PER_PAGE);

  return (
    <div className="component-wrapper">
      <div className="component">
        <div className="component__nav">
          <h2 className="component__nav-title">
            <FormattedMessage id="movies:watch-free" />
          </h2>
          <div>
            <button
              className="component__btn-time button-dark"
              onClick={() => setToggleMedia("movie")}
            >
              <FormattedMessage id="movies:toggle-movie" />
            </button>
            <button
              className="component__btn-time button-dark"
              onClick={() => setToggleMedia("tv")}
            >
              <FormattedMessage id="movies:toggle-tv" />
            </button>
          </div>
        </div>
        <div className="component__media">
          {freeMovies.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </div>
        <button className="show-more" onClick={showMoreMovies}>
          <FormattedMessage id="movies:more" />
        </button>
      </div>
    </div>
  );
};

export default WatchFree;
