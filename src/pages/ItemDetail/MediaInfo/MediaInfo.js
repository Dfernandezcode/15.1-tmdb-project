import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./MediaInfo.scss";
import { FormattedMessage } from "react-intl";

const MediaInfo = ({ itemData }) => {
  // FUNCTION TO CONVERT RUNTIME TO HOURS AND MINUTES
  const convertToTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h${hours !== 1 ? "s" : ""} ${remainingMinutes}m${remainingMinutes !== 1 ? "" : ""}`;
  };

  // CREW API
  const { id } = useParams();
  const { type } = useParams();
  const API_URL_CREDITS = `${process.env.REACT_APP_API_URL}/${type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
  const [creditData] = useFetch(API_URL_CREDITS);
  console.log(API_URL_CREDITS);

  // CREW API MAP
  const crewList = creditData?.crew.slice(0, 5).map((member) => {
    return (
      <div className="media-info__crew-list" key={member.id}>
        <p className="media-info__crew-list-name">{member.name}</p>
        <p className="media-info__crew-list-job">{member.job}</p>
      </div>
    );
  });

  // GET DATE ONLY
  const releaseDate = itemData?.release_date || itemData?.first_air_date;
  const year = releaseDate ? releaseDate.substring(0, 4) : "";
  const genreMap = itemData?.genres.map((genre) => <p key={genre.id}>{genre.name}</p>);

  return (
    <div className="media-info">
      <img className="media-info__poster" src={`https://image.tmdb.org/t/p/w440_and_h660_face/${itemData?.poster_path}`} alt={itemData?.title}></img>
      <div className="media-info__text-wrap">
        <h2 className="media-info__text-wrap-title">{itemData?.title || itemData?.name}</h2>
        <h2 className="media-info__text-wrap-year">({year})</h2>
        <div className="media-info__text-wrap-detail">
          <p>{itemData?.release_date || itemData?.first_air_date}</p> <p className="media-info__text-wrap-space">|</p>
          <div className="media-info__text-wrap-genre">{genreMap}</div>
          <p className="media-info__text-wrap-space">|</p>
          <p>{convertToTime(itemData?.runtime)}</p>
        </div>
        <p className="media-info__rating">RATING</p>
        <p className="media-info__tagline">{itemData?.tagline}</p>
        <h3 className="media-info__overview-title">
          <FormattedMessage id="movie-detail:synopsis" />
        </h3>
        <p className="media-info__overview-text">{itemData?.overview}</p>
      </div>
      <div className="media-info__crew">{crewList}</div>
    </div>
  );
};

export default MediaInfo;
