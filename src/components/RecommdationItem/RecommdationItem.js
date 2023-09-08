import { roundedToFixed } from '../../utils/utils';
import { NavLink } from 'react-router-dom';
import './RecommdationItem.scss';
const RecommdationItem = ({ item }) => {
  const type = item.title ? 'movie' : 'tv';
  const porcentVote = roundedToFixed(item?.vote_average) * 10 + '%';

  return (
    <NavLink onClick={() => window.scroll(0, 0)} className='recommendation-item link' to={`/items/${item?.id}/${type}`}>
      {item?.backdrop_path ? (
        <img className='recommendation-item__img' src={`${process.env.REACT_APP_IMG_RECOMENDATION}${item?.backdrop_path}`} />
      ) : (
        <div className='recommendation-item__not-img'>
          <h1 className='recommendation-item__not-img-text'>?</h1>
        </div>
      )}
      <div className='recommendation-item__data link__container'>
        <h4 className='recommendation-item__title'>{item?.name || item?.title}</h4>
        <p className='recommendation-item__vote'>{porcentVote}</p>
      </div>
    </NavLink>
  );
};
export default RecommdationItem;
