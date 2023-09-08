import useFetch from '../../hooks/useFetch';
import DiscoveredItem from '../DiscoveredItem/DiscoveredItem';
import './Discover.scss';
import { FormattedMessage } from 'react-intl';
import { usePagination } from '../../hooks/usePaginator';
import { useContext } from 'react';
import { LanguageSelector } from '../../App';

const Discover = () => {
  const { language } = useContext(LanguageSelector);
  const API_URL = process.env.REACT_APP_API_URL + '/discover/movie?page=1&language=' + language + '&release_date.desc&vote_average.gte=6.5&api_key=' + process.env.REACT_APP_API_KEY;
  const [discoverData] = useFetch(API_URL);
  const [firstItems, showMoreItems, theAreMore] = usePagination(discoverData?.results);

  return (
    <div className='discover'>
      <h3 className='discover__title'>
        <FormattedMessage id='last_advances' />
      </h3>
      <div className='discover__wraper'>
        <div className='discover__container'>
          {firstItems?.map((item) => (
            <DiscoveredItem key={item.id} item={item} />
          ))}
          {theAreMore && (
            <button onClick={() => showMoreItems()} className='discover__btn-show-more'>
              <FormattedMessage id='more_button' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;
