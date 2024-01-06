import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL_WATCHPAGE } from "../utils/constants";

const Recommendations = () => {
  const URLId = useParams();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    recommendAPI(URLId);
  }, []);

  const recommendAPI = async (URLId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${URLId.movieId}/recommendations`,
      API_OPTIONS
    );
    const results = await data.json();
    const recommendAPIResult = results.results;
    setRecommendations(recommendAPIResult);
  };

  return (
    <div className="m-2 p-2 border border-black">
      <h1 className="font-bold">Recommandations for You -</h1>
      <div>
        <div className="flex overflow-x-scroll m-2 p-2 cursor-pointer">
          {recommendations &&
            recommendations.map((recommend) => 
              <img src={IMG_CDN_URL_WATCHPAGE + recommend.poster_path} alt="recommendCard"></img> 
            )}
           
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
