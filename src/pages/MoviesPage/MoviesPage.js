import { FormattedMessage } from "react-intl";
// Page Component Imports
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import "./MoviesPage.scss";
import Popular from "./Popular/Popular.js";
import Trending from "./Trending/Trending.js";
import WatchFree from "./WatchFree/WatchFree.js";
import LatestRelease from "./LatestRelease/LatestRelease.js";

const MoviesPage = () => {
  return (
    <div className="movie-page page">
      <Header />
      <div className="movie-page__welcome-banner">
        <div className="welcome-banner">
          <h1 className="welcome-banner__title">
            <FormattedMessage id="movies:banner-welcome" />
          </h1>
          <p className="welcome-banner__text">
            <FormattedMessage id="movies:banner-text" />
          </p>
        </div>
      </div>

      <div className="content">
        <Trending />
        <LatestRelease />
        <Popular />

        {/* BANNER */}
        <div className="movie-page__subscribe">
          <div className="subscribe-banner">
            <h2 className="subscribe-banner__title">
              <FormattedMessage id="movies:subscribe-title" />
            </h2>
            <p className="subscribe-banner__text">
              <FormattedMessage id="movies:subscribe-text" />
            </p>
          </div>
        </div>
        <WatchFree />
      </div>
      <Footer />
    </div>
  );
};

export default MoviesPage;
