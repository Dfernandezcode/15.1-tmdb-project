import React from 'react';
import './GamePage.scss';
import { generateRandom, generateRandomIndex, formatDateWithBarrs, formatGenres, formatTime, getProductionCountriesName } from '../../utils/utils';
import { ImFilm } from 'react-icons/im';
import { LanguageSelector } from '../../App';
import { FormattedMessage } from 'react-intl';

const GamePage = () => {
  const { language } = React.useContext(LanguageSelector);

  const [nameSelected, setNameSelected] = React.useState();
  const [gameIsSolved, setGameIsSolved] = React.useState(false);
  const [currentFilm, setCurrentFilm] = React.useState();
  const [page, setPage] = React.useState(generateRandom(0, 100));
  const [options, setOptions] = React.useState([]);

  const FILM_LIST_URL = process.env.REACT_APP_API_URL + '/movie/top_rated?language=' + language + '&page=' + page + '&api_key=' + process.env.REACT_APP_API_KEY;

  React.useEffect(() => {
    fetch(FILM_LIST_URL)
      .then((response) => response.json())
      .then((dataParsed) => {
        const currentList = dataParsed?.results;
        const randomIndexes = generateRandomIndex(currentList);
        let currentFilmIndex = randomIndexes[generateRandom(0, 3)];
        let currentFilmId = currentList[currentFilmIndex]?.id;

        let API_URL_DETAIL = process.env.REACT_APP_API_URL + '/movie/' + currentFilmId + '?language=' + language + '&api_key=' + process.env.REACT_APP_API_KEY;

        fetch(API_URL_DETAIL)
          .then((response) => response.json())
          .then((dataParsed) => {
            if (!dataParsed.title || !dataParsed.overview || !dataParsed.poster_path) {
              currentFilmIndex = randomIndexes[generateRandom(0, 3)];
              currentFilmId = currentList[currentFilmIndex]?.id;

              API_URL_DETAIL = process.env.REACT_APP_API_URL + '/movie/' + currentFilmId + '?language=' + language + '&api_key=' + process.env.REACT_APP_API_KEY;

              fetch(API_URL_DETAIL)
                .then((response) => response.json())
                .then((newDataParsed) => {
                  setCurrentFilm(newDataParsed);
                });
            } else {
              setCurrentFilm(dataParsed);
            }
          });
        generateNewGamePlay(currentList, randomIndexes);
      });
  }, [page, language]);

  const generateNewGamePlay = (list, randomIndexes) => {
    const newGameOptions = randomIndexes.map((index) => list[index].title);
    setOptions(newGameOptions);
    setGameIsSolved(false);
    setNameSelected(null);
  };

  const selectOption = (name) => {
    if (!gameIsSolved) {
      setNameSelected(name);
    }
  };

  const getClassesForButton = (option) => {
    if (gameIsSolved) {
      if (option === currentFilm?.title) {
        return 'btn--option-correct';
      } else if (option === nameSelected) {
        return 'btn--option-wrong';
      }
    } else {
      if (option === nameSelected) {
        return 'btn--option-selected';
      }
    }
  };

  return (
    <div className='game-page'>
      <div className='game-page__detail'>
        {!gameIsSolved && <ImFilm className='game-page__icon' />}
        <img className={!gameIsSolved ? 'game-page__img--hide' : 'game-page__img'} src={`${process.env.REACT_APP_IMG}${currentFilm?.poster_path}`} />
        <div className='game-page__data'>
          <p className='game-page__title'>{gameIsSolved ? currentFilm?.title : '???'}</p>
          <p className='game-page__subtitle'>
            <span>{formatDateWithBarrs(currentFilm?.release_date)}</span> <span>{getProductionCountriesName(currentFilm?.production_countries)}</span> | <span>{formatGenres(currentFilm?.genres)}</span> | <span>{formatTime(currentFilm?.runtime)}</span>
          </p>
          <p className='game-page__sinopsis-title'>{!gameIsSolved && <FormattedMessage id='sinopsis' />}</p>
          <p className='game-page__sinopsis'>{!gameIsSolved && currentFilm?.overview}</p>
        </div>
      </div>
      <div>
        <h3 className='game-page__options-title'>
          <FormattedMessage id='options' />
        </h3>
        <div className='game-page__options'>
          {options.map((name) => (
            <button onClick={() => selectOption(name)} key={name} className={'btn btn--option game-page__button ' + getClassesForButton(name)}>
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className='game-page__solve'>
        <button
          className='btn btn--link game-page__solve-btn'
          onClick={() => {
            setPage(generateRandom(0, 100));
          }}
        >
          <FormattedMessage id='restart' />
        </button>
        <button
          className='btn game-page__solve-btn'
          disabled={gameIsSolved}
          onClick={() => {
            setGameIsSolved(true);
          }}
        >
          <FormattedMessage id='solve' />
        </button>
      </div>
    </div>
  );
};
export default GamePage;
