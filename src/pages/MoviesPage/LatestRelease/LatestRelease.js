import { useState } from "react";
import Discover from "./Discover/Discover";
import useFetch from "../../../hooks/useFetch";
import { FormattedMessage } from "react-intl";
import "./LatestRelease.scss";
import "../../../styles/buttons.scss";

const LatestRelease = () => {
  const API_URL_TRENDING = `${process.env.REACT_APP_API_URL}/discover/movie?sort_by=release_date.desc&language=en-US&page=1&vote_count.gte=1000&vote_average.gte=5&api_key=${process.env.REACT_APP_API_KEY}`;
  const [discoverMedia] = useFetch(API_URL_TRENDING);

  console.log(discoverMedia);

  //SHOW MORE FUNCTIONALITY
  const NUM_ITEMS_PER_PAGE = 4;

  const [numMoviesToShow, setNumMoviesToShow] = useState(NUM_ITEMS_PER_PAGE);
  const discoverMovies =
    discoverMedia?.results?.slice(0, numMoviesToShow) || [];
  const showMoreMovies = () =>
    setNumMoviesToShow(numMoviesToShow + NUM_ITEMS_PER_PAGE);

  return (
    <div className="discover">
      <div className="discover__media">
        <h2 className="discover__media-title">
          <FormattedMessage id="movies:latest-title" />
        </h2>
        {discoverMovies.map((discover) => (
          <Discover key={discover.id} discover={discover}></Discover>
        ))}
      </div>
      <button className="more-btn--alt .button-white" onClick={showMoreMovies}>
        <FormattedMessage id="movies:more" />
      </button>
    </div>
  );
};

export default LatestRelease;
