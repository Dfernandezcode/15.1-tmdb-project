import './CastDetail.scss';

const CastDetail = ({ character }) => {
  return (
    <div className='cast-detail'>
      {character?.profile_path ? (
        <img className='cast-detail__img' src={`${process.env.REACT_APP_IMG}${character?.profile_path}`} />
      ) : (
        <div className='cast-detail__not-img'>
          <p className='cast-detail__not-img-text'>?</p>
        </div>
      )}

      <p className='cast-detail__name'>{character?.name}</p>
      <p className='cast-detail__character'>{character?.character}</p>
    </div>
  );
};
export default CastDetail;
