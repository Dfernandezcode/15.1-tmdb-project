import React from "react";
import { FormattedMessage } from "react-intl";
import "./Discover.scss";
import { ImPlay3 } from "react-icons/im";
import useFetch from "../../../../hooks/useFetch";

const Discover = ({ discover }) => {
  const API_URL_TRAILER = `${process.env.REACT_APP_API_URL}/movie/${discover?.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`;
  const [urlDiscover] = useFetch(API_URL_TRAILER);
  console.log(API_URL_TRAILER);

  let youtubeLink = "";
  if (urlDiscover?.results) {
    for (let i = 0; i < urlDiscover.results.length; i++) {
      if (urlDiscover.results[i].type === "Trailer") {
        youtubeLink = `https://www.youtube.com/watch?v=${urlDiscover.results[i].key}`;
        break;
      }
    }
  }

  return (
    <div className="discover">
      <div className="discover__wrapper">
        <ImPlay3 className="discover__wrapper-icon" />
        {youtubeLink ? (
          <a
            className="discover__wrapper-link"
            target="_blank"
            rel="noreferrer"
            href={youtubeLink}
          >
            <FormattedMessage id="movies:latest-youtube" />
          </a>
        ) : (
          <p className="discover__wrapper-link">Trailer not found</p>
        )}
      </div>
      <div className="discover__wrapper-details">
        <h3 className="discover__wrapper-details-title">{discover.title}</h3>
        <p className="discover__wrapper-details-text">Offical Trailer</p>
      </div>
    </div>
  );
};

export default Discover;
