import "./Cast.scss";
import { FormattedMessage } from "react-intl";

const Cast = ({ castData }) => {
  const castList = castData?.cast.slice(0, 7).map((member) => (
    <div className="cast-info__list-element" key={member.id}>
      <img className="cast-info__list-element-img" src={`https://image.tmdb.org/t/p/w440_and_h660_face/${member?.profile_path}`} alt={member.name} />
      <p className="cast-info__list-element-name">{member.name}</p>
      <p className="cast-info__list-element-character">{member.character}</p>
    </div>
  ));

  return (
    <div className="cast-component">
      <div className="cast-info">
        <h1 className="cast-info__title">
          <FormattedMessage id="movie-detail:cast-title" />
        </h1>
        <div className="cast-info__list">{castList}</div>
      </div>
    </div>
  );
};

export default Cast;
