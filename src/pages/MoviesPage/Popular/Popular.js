import { useState } from "react";
import Item from "../../../components/Item/Item";
import useFetch from "../../../hooks/useFetch";
import { FormattedMessage } from "react-intl";
import "../../../styles/movies-components.scss";
// UTILS IMPORT
import MovieButtons from "../../../components/MovieButtons/MovieButtons";
const Popular = () => {
  const [toggleMedia, setToggleMedia] = useState("movie");
  const API_URL_POPULAR = `${process.env.REACT_APP_API_URL}/${toggleMedia}/popular?api_key=${process.env.REACT_APP_API_KEY}`;
  const [popularMedia] = useFetch(API_URL_POPULAR);

  // SHOW MORE FUNCTIONALITY
  const NUM_ITEMS_PER_PAGE = 6;

  const [numMoviesToShow, setNumMoviesToShow] = useState(NUM_ITEMS_PER_PAGE);
  const popularMovies = popularMedia?.results?.slice(0, numMoviesToShow) || [];
  const showMoreMovies = () => setNumMoviesToShow(numMoviesToShow + NUM_ITEMS_PER_PAGE);

  return (
    <div className="component-wrapper">
      <div className="component">
        <div className="component__nav">
          <h2 className="component__nav-title">
            <FormattedMessage id="movies:most-popular" />
          </h2>
          <MovieButtons onToggleMedia={setToggleMedia} movieText={<FormattedMessage id="movies:toggle-movie" />} tvText={<FormattedMessage id="movies:toggle-tv" />} />
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
