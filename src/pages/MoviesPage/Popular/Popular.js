import { useState } from "react";
import Item from "../../../components/Item/Item";
import useFetch from "../../../hooks/useFetch";
import { FormattedMessage } from "react-intl";
import "../../../styles/movies-components.scss";

const Popular = () => {
  const [toggleMedia, setToggleMedia] = useState("movie");
  const API_URL_POPULAR = `${process.env.REACT_APP_API_URL}/${toggleMedia}/popular?api_key=${process.env.REACT_APP_API_KEY}`;
  const [popularMedia] = useFetch(API_URL_POPULAR);

  console.log(popularMedia);

  //SHOW MORE FUNCTIONALITY
  const NUM_ITEMS_PER_PAGE = 4;

  const [numMoviesToShow, setNumMoviesToShow] = useState(NUM_ITEMS_PER_PAGE);
  const popularMovies = popularMedia?.results?.slice(0, numMoviesToShow) || [];
  const showMoreMovies = () =>
    setNumMoviesToShow(numMoviesToShow + NUM_ITEMS_PER_PAGE);

  return (
    <div className="component-wrapper">
      <div className="component">
        <div className="component__nav">
          <h2 className="component__nav-title">
            <FormattedMessage id="movies:most-popular" />
          </h2>
          <div className="component__buttons">
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
          {popularMovies.map((item) => (
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

export default Popular;
