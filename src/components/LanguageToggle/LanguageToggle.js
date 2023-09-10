import "./LanguageToggle.scss";
import React, { useState } from "react";

const LanguageToggle = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en-EN");

  const handleClick = (language) => {
    setSelectedLanguage(language);
    onLanguageChange(language);
  };

  return (
    <div className="language-toggle">
      <button className={`language-toggle__button ${selectedLanguage === "en-EN" ? "language-toggle__button--selected" : ""}`} onClick={() => handleClick("en-EN")}>
        EN
      </button>
      <button className={`language-toggle__button ${selectedLanguage === "es-ES" ? "language-toggle__button--selected" : ""}`} onClick={() => handleClick("es-ES")}>
        ES
      </button>
    </div>
  );
};

export default LanguageToggle;
