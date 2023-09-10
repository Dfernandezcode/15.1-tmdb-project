import "./Recommend.scss";
import { FormattedMessage } from "react-intl";

const Recommend = ({ recommendData }) => {
  const recommendList = recommendData?.results.map((element) => (
    <div className="recom-info__list-element" key={element.id}>
      <img className="recom-info__list-element-img" src={`https://image.tmdb.org/t/p/original/${element?.backdrop_path}`} alt={element.name || element.title} />
      <div className="recom-info__list-element-box">
        <p className="recom-info__list-element-box-text">{element.title || element.name}</p>
        <p className="recom-info__list-element-box-text">{element.vote_average}</p>
      </div>
    </div>
  ));

  return (
    <div className="recom-component">
      <div className="recom-info">
        <h1 className="recom-info__title">
          <FormattedMessage id="movie-detail:cast-recommendation" />
        </h1>
        <div className="recom-info__list">{recommendList}</div>
      </div>
    </div>
  );
};

export default Recommend;
