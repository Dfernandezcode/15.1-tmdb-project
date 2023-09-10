import "./App.css";
// Provider imports
import { IntlProvider } from "react-intl";
import { HashRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
// Page imports
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import GamePage from "./pages/GamePage/GamePage";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
// Languages imports
import English from "./lang/en.json";
import Spanish from "./lang/es.json";

export const LanguageSelector = createContext();

function App() {
  // App states
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(English);

  // Language selector function
  useEffect(() => {
    switch (locale) {
      case "es-ES":
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);

  return (
    <div className="app">
      <LanguageSelector.Provider value={{ language: locale, setLanguage: setLocale }}>
        <IntlProvider messages={messages} locale={locale}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<MoviesPage></MoviesPage>}></Route>
              <Route path="/quiz" element={<GamePage></GamePage>}></Route>
              <Route path="/items/:id/:type" element={<ItemDetail />} />
            </Routes>
          </HashRouter>
        </IntlProvider>
      </LanguageSelector.Provider>
    </div>
  );
}

export default App;
