import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Item from '../Item/Item';
import { usePagination } from '../../hooks/usePaginator';
import '../../styles/section_home.scss';
import { FormattedMessage } from 'react-intl';

const Trending = () => {
  const [optionTime, setOptionTime] = useState('day');
  const API_URL = process.env.REACT_APP_API_URL + '/trending/movie/' + optionTime + '?' + `api_key=${process.env.REACT_APP_API_KEY}`;
  const [movieData] = useFetch(API_URL);
  const [firstMovies, showMoreMovies, theAreMore] = usePagination(movieData?.results);

  return (
    <div className='section'>
      <div className='section__text'>
        <h3 className='section__title'>
          <FormattedMessage id='trending_title' />
        </h3>
        <div className='section__buttons'>
          <button onClick={() => setOptionTime('day')} className='btn section__btn-time'>
            <FormattedMessage id='day_button' />
          </button>
          <button onClick={() => setOptionTime('week')} className='btn section__btn-time'>
            <FormattedMessage id='week_button' />
          </button>
        </div>
      </div>
      <div className='section__films--wrapper'>
        <div className='section__films'>
          <div className='section__films-container'>
            {firstMovies?.map((item) => (
              <Item key={item.id} item={item}></Item>
            ))}
          </div>
          {theAreMore && (
            <button onClick={() => showMoreMovies()} className='btn section__show-more'>
              <FormattedMessage id='more_button' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trending;
