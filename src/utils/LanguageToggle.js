import "./LanguageToggle.scss";

import React from "react";

const LanguageToggle = ({ onLanguageChange }) => {
  const handleClick = (language) => {
    onLanguageChange(language);
  };

  return (
    <div className="language-toggle">
      <button
        className="language-toggle__button"
        onClick={() => handleClick("en-EN")}
      >
        EN
      </button>
      <button
        className="language-toggle__button"
        onClick={() => handleClick("es-ES")}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageToggle;
