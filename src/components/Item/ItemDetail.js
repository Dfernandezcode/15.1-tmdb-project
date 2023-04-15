import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./ItemDetail.scss";
import useFetch from "../../hooks/useFetch.js";
import Cast from "./Cast/Cast.js";
import MediaInfo from "./MediaInfo/MediaInfo.js";
import Recommend from "./Recommend/Recommend.js";

const ItemDetail = () => {
  const { id } = useParams();
  const { type } = useParams();
  const API_URL_DETAIL = `${process.env.REACT_APP_API_URL}/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
  const API_URL_CREDITS = `${process.env.REACT_APP_API_URL}/${type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
  const API_URL_RECOMMENDATIONS = `${process.env.REACT_APP_API_URL}/${type}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`;
  const [movieData] = useFetch(API_URL_DETAIL);
  const [creditData] = useFetch(API_URL_CREDITS);
  const [recommendData] = useFetch(API_URL_RECOMMENDATIONS);
  console.log(API_URL_RECOMMENDATIONS);

  return (
    <div>
      <Header />
      <div className="detail-container">
        <MediaInfo movieData={movieData} />
        <Cast castData={creditData} />
        <Recommend recommendData={recommendData} />
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetail;
