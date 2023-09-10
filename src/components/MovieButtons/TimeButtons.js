import { useState } from "react";
import "./MovieButtons.scss";
import "../../styles/buttons.scss";

const TimeButtons = ({ onToggleMedia, dayText, weekText }) => {
  const [activeButton, setActiveButton] = useState("day");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    onToggleMedia(buttonType);
  };

  return (
    <div className="component__buttons">
      <button className={`component__btn${activeButton === "day" ? "--active" : ""}`} onClick={() => handleButtonClick("day")}>
        {dayText}
      </button>
      <button className={`component__btn${activeButton === "week" ? "--active" : ""}`} onClick={() => handleButtonClick("week")}>
        {weekText}
      </button>
    </div>
  );
};

export default TimeButtons;
