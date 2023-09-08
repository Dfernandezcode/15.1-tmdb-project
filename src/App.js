import { Route, HashRouter, Routes } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { IntlProvider } from 'react-intl';
import English from './lang/en.json';
import Spanish from './lang/es.json';
import Footer from './components/Footer/Footer';

export const LanguageSelector = React.createContext();

const ItemDetail = React.lazy(() => import('./pages/ItemDetail/ItemDetail'));
const GamePage = React.lazy(() => import('./pages/GamePage/GamePage'));

const App = () => {
  const [locale, setLocale] = React.useState(navigator.language);
  const [messages, setMessages] = React.useState(English);

  React.useEffect(() => {
    switch (locale) {
      case 'es-ES':
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);
  return (
    <LanguageSelector.Provider value={{ language: locale, setLanguage: setLocale }}>
      <IntlProvider messages={messages} locale={locale}>
        <HashRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route
              path='/items/:id/:type'
              element={
                <React.Suspense fallback={<p>Cargando...</p>}>
                  <ItemDetail />
                </React.Suspense>
              }
            ></Route>
            <Route
              path='/quiz'
              element={
                <React.Suspense fallback={<p>Cargando...</p>}>
                  <GamePage />
                </React.Suspense>
              }
            ></Route>
          </Routes>
          <Footer />
        </HashRouter>
      </IntlProvider>
    </LanguageSelector.Provider>
  );
};

export default App;
