import { Link } from 'react-router-dom';
import { roundedToFixed, generateColor, formatDate } from '../../utils/utils';
import './Item.scss';
import Score from '../Score/Score';

const Item = ({ item }) => {
  const porcentVote = roundedToFixed(item?.vote_average) * 10;
  const colorVote = generateColor(roundedToFixed(item?.vote_average) * 10);
  const type = item.title ? 'movie' : 'tv';

  return (
    <Link className={'item'} to={`/items/${item?.id}/${type}`}>
      <img className='item__img' src={`${process.env.REACT_APP_IMG}${item?.poster_path}`} />
      <div className='item__data'>
        <p className='item__title'>{item?.title || item?.name}</p>
        <p className='item__date'>{formatDate(item?.release_date || item?.first_air_date)}</p>
      </div>
      <div className='item__score-wrap'>
        <Score colorVote={colorVote} porcentVote={porcentVote} />
      </div>
    </Link>
  );
};

export default Item;
