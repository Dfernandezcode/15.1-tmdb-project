import './ItemDetail.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { formatTime, formatGenres, roundedToFixed, formatYear, generateColor, getProductionCountriesName, formatDateWithBarrs } from '../../utils/utils';
import { LanguageSelector } from '../../App';
import { FormattedMessage } from 'react-intl';
import Cast from '../../components/Cast/Cast';
import Crew from '../../components/Crew/Crew';
import Recommendations from '../../components/Recommendations/Recommendations';
import Score from '../../components/Score/Score';

const ItemDetail = () => {
  const { id } = useParams(':id');
  const { type } = useParams(':type');
  const { language } = React.useContext(LanguageSelector);

  const API_URL_DETAIL = process.env.REACT_APP_API_URL + '/' + type + '/' + id + '?language=' + language + '&api_key=' + process.env.REACT_APP_API_KEY;
  const [itemData] = useFetch(API_URL_DETAIL);

  const porcentVote = roundedToFixed(itemData?.vote_average) * 10;
  const colorVote = generateColor(roundedToFixed(itemData?.vote_average) * 10);

  const API_URL_CAST = process.env.REACT_APP_API_URL + '/' + type + '/' + id + '/credits' + '?language=' + language + '&api_key=' + process.env.REACT_APP_API_KEY;
  const [personsData] = useFetch(API_URL_CAST);

  return (
    <div className='item-detail'>
      <div className='item-detail__header'>
        <img className='item-detail__img' src={`${process.env.REACT_APP_IMG}${itemData?.poster_path}`} />
        <div className='item-detail__info'>
          <h3 className='item-detail__title'>
            {itemData?.title || itemData?.name}
            <span> {formatYear(itemData?.release_date || itemData?.first_air_date)}</span>
          </h3>
          <p className='item-detail__data'>
            <span>{formatDateWithBarrs(itemData?.release_date || itemData?.first_air_date)}</span>
            <span>{getProductionCountriesName(itemData?.production_countries)}</span> | {formatGenres(itemData?.genres)} | <span>{formatTime(itemData?.runtime || itemData?.episode_run_time)}</span>
          </p>

          <div className='item-detail__score-container'>
            <div className='item-detail__score'>
              <Score colorVote={colorVote} porcentVote={porcentVote} />
            </div>
            <p className='item-detail__score-text'>
              <FormattedMessage id='score' />
            </p>
          </div>
          <p className='item-detail__subtitle'>{itemData?.tagline}</p>
          <p className='item-detail__overview-title'>
            <FormattedMessage id='general-view' />
          </p>
          <p className='item-detail__overview'>{itemData?.overview}</p>
          <Crew personsData={personsData} />
        </div>
      </div>
      <Cast personsData={personsData} />
      <Recommendations />
    </div>
  );
};
export default ItemDetail;
