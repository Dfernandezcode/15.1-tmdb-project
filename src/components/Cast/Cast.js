import './Cast.scss';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { usePagination } from '../../hooks/usePaginator';
import CastDetail from '../../components/CastDetail/CastDetail';

const Cast = ({ personsData }) => {
  const [firstItemsCast, showMoreItemsCast, theAreMoreCast] = usePagination(personsData?.cast);

  return (
    <div className='item-detail__cast'>
      <h3 className='item-detail__cast-title'>
        <FormattedMessage id='principal-cast' />
      </h3>

      <div className='item-detail__cast-wrap'>
        <div className='item-detail__cast-container'>
          <div className='item-detail__cast-items'>
            {firstItemsCast?.map((character) => (
              <CastDetail key={character.id} character={character} />
            ))}
          </div>

          {theAreMoreCast && (
            <button onClick={() => showMoreItemsCast()} className='btn section__show-more'>
              <FormattedMessage id='more_button' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cast;
