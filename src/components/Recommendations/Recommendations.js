import React from 'react';
import { useParams } from 'react-router-dom';
import { LanguageSelector } from '../../App';
import { FormattedMessage } from 'react-intl';
import { usePagination } from '../../hooks/usePaginator';
import useFetch from '../../hooks/useFetch';
import RecommdationItem from '../../components/RecommdationItem/RecommdationItem';

const Recommendations = () => {
  const { id } = useParams(':id');
  const { type } = useParams(':type');
  const { language } = React.useContext(LanguageSelector);

  const API_URL_RECOMMENDATIONS = process.env.REACT_APP_API_URL + '/' + type + '/' + id + '/recommendations' + '?language=' + language + '&api_key=' + process.env.REACT_APP_API_KEY;

  const [recommendationsData] = useFetch(API_URL_RECOMMENDATIONS);
  const [firstItemsRecommendations, showMoreItemsRecommendations, theAreMoreRecommendations] = usePagination(recommendationsData?.results, 4);

  return (
    <div className='item-detail__results'>
      <h3>
        <FormattedMessage id='recommendations' />
      </h3>
      <div className='item-detail__results-wrap'>
        <div className='item-detail__results-div'>
          <div className='item-detail__results-container'>
            {recommendationsData?.total_pages !== 0 ? (
              firstItemsRecommendations?.map((element) => <RecommdationItem key={element.id} item={element} />)
            ) : (
              <h2>
                <FormattedMessage id='recommendations-not' />
              </h2>
            )}
          </div>

          {theAreMoreRecommendations && (
            <button onClick={() => showMoreItemsRecommendations()} className='btn section__show-more'>
              <FormattedMessage id='more_button' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Recommendations;
