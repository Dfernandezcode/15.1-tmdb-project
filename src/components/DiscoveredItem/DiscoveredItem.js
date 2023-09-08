import './DiscoveredItem.scss';
import useFetch from '../../hooks/useFetch';
import { ImPlay3 } from 'react-icons/im';
import { FormattedMessage } from 'react-intl';
const DiscoveredItem = ({ item }) => {
  const [urlItemVideo] = useFetch(process.env.REACT_APP_API_URL + '/movie/' + item?.id + '/videos?api_key=' + process.env.REACT_APP_API_KEY);
  const urlOficialTrailerItem = urlItemVideo?.results?.find((element) => element.name?.includes('Trailer') && element.site === 'YouTube' && element.key);

  return (
    <div className='avances-item'>
      <div className='avances-item__player'>
        <ImPlay3 className='avances-item__icon' />
        <a className='avances-item__link-video' target='_blank' rel='noreferrer' href={`https://www.youtube.com/watch?v=${urlOficialTrailerItem?.key}`}>
          <FormattedMessage id='watch_in_youtube' />
        </a>
      </div>
      <div className='avances-item__info'>
        <p className='avances-item__title'>{item?.title}</p>
        <p className='avances-item__text'>
          <FormattedMessage id='oficial_trailer' />
        </p>
      </div>
    </div>
  );
};

export default DiscoveredItem;
