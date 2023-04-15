import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ item }) => {
  // Percentage conversion
  const percentage = (item.vote_average * 10).toFixed(0);

  // Colors depending on percentage:
  const getColorClass = () => {
    if (percentage >= 70) {
      return "fresh";
    } else if (percentage >= 40) {
      return "ok";
    } else {
      return "rotten";
    }
  };

  // Ternary (if contains .title print movie if not print TV)
  const type = item.title ? "movie" : "tv";

  return (
    <div className="item">
      <Link className="item__link" to={`/items/${item?.id}/${type}`}>
        {/* Wrap the image and title with Link */}
        <img className="item__poster" src={`https://image.tmdb.org/t/p/w440_and_h660_face/${item?.poster_path}`} alt={item.title}></img>
        <p className={`item__rating--${getColorClass()}`}>
          {percentage}
          <span className="item__percentage">%</span>
        </p>
        <h3 className="item__name">{item.title || item.name}</h3>
      </Link>
      <div className="item__info">
        <p className="item__release">{item.release_date}</p>
      </div>
    </div>
  );
};

export default Item;
