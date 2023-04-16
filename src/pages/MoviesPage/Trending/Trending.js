import { useState } from "react";
import Item from "../../../components/Item/Item";
import useFetch from "../../../hooks/useFetch";
import { FormattedMessage } from "react-intl";
import TimeButtons from "../../../components/MovieButtons/TimeButtons";
// Stylesheet imports:
import "../../../styles/movies-components.scss";
import "../../../styles/buttons.scss";

const Trending = () => {
  const [toggleMedia, setToggleMedia] = useState("day");

  const API_URL_TRENDING = `${process.env.REACT_APP_API_URL}/trending/movie/${toggleMedia}?api_key=${process.env.REACT_APP_API_KEY}`;
  const [trendingMedia] = useFetch(API_URL_TRENDING);

  console.log(trendingMedia);

  // SHOW MORE FUNCTIONALITY
  const NUM_ITEMS_PER_PAGE = 5;

  const [numMoviesToShow, setNumMoviesToShow] = useState(NUM_ITEMS_PER_PAGE);
  const trendingMovies = trendingMedia?.results?.slice(0, numMoviesToShow) || [];
  const showMoreMovies = () => setNumMoviesToShow(numMoviesToShow + NUM_ITEMS_PER_PAGE);

  return (
    <div className="component-wrapper trending-bg">
      <div className="component">
        <div className="component__nav">
          <h2 className="component__nav-title">
            <FormattedMessage id="movies:trending-title" />
          </h2>
          <div>
            <TimeButtons onToggleMedia={setToggleMedia} initialActiveButton="day" dayText={<FormattedMessage id="movies:trending-today" />} weekText={<FormattedMessage id="movies:trending-week" />} />
          </div>
        </div>
        <div className="component__media">
          {trendingMovies.map((item) => (
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

export default Trending;
