import "./GameMainInfo.scss";

const GameMainInfo = (filmData) => {
  return (
    <div className="game-main-info">
      <div className="game-main-info__detail">
        <div className="game-main-info__box-1">
          <img className="game-main-info__img" src={`https://image.tmdb.org/t/p/w440_and_h660_face/${filmData?.poster_path}`} />
        </div>
        <div className="game-main-info__box-2">
          <div className="game-main-info__text">
            <h3 className="game-main-info__title">{filmData?.title || filmData?.name}</h3>
            <div className="game-main-info__main-info">
              <p className="game-main-info__release-date">{filmData?.release_date} | </p>
              <p className="game-main-info__genre">
                {filmData?.genres?.map((item) => (
                  <span key={item.id}> {item?.name},</span>
                ))}
              </p>
              <p className="game-main-info__time">| {filmData?.runtime} min</p>
            </div>
            <h3 className="game-main-info__detail--title">Sinopsis</h3>
            <p>{filmData?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameMainInfo;
