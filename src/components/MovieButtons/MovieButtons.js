import { useState } from "react";
import "./MovieButtons.scss";
import "../../styles/buttons.scss";

const MovieButtons = ({ onToggleMedia, movieText, tvText }) => {
  const [activeButton, setActiveButton] = useState("movie");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    onToggleMedia(buttonType);
  };

  return (
    <div className="component__buttons">
      <button className={`component__btn${activeButton === "movie" ? "--active" : ""}`} onClick={() => handleButtonClick("movie")}>
        {movieText}
      </button>
      <button className={`component__btn${activeButton === "tv" ? "--active" : ""}`} onClick={() => handleButtonClick("tv")}>
        {tvText}
      </button>
    </div>
  );
};

export default MovieButtons;
