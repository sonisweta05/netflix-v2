import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN_URL_WATCHPAGE } from "../utils/constants";
import { useParams, useSearchParams } from "react-router-dom";
import Reviews from "./Reviews";
import Recommendations from "./Recommandations";

const MovieDetails = () => {
  const URLId = useParams();
  const [movieDesc, setMovieDesc] = useState();
  const [searchParams] = useSearchParams();

  const videoHandler = () => {
    console.log(searchParams);
    return (
      <div>
        <iframe
          width="1000"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  useEffect(() => {
    detailsFromTMDB(URLId);
  }, []);
  const detailsFromTMDB = async (URLId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${URLId.movieId}`,
      API_OPTIONS
    );
    const json = await data.json();
    setMovieDesc(json);
  };
  return (
    <div>
      <div className="m-2 p-2 border border-black">
        <div className=" font-bold text-xl underline">
          {" "}
          Read full details of Your Movie
        </div>
        {movieDesc && (
          <div className="flex m-2">
            <img
              className="w-100 h-50"
              src={IMG_CDN_URL_WATCHPAGE + movieDesc.poster_path}
            />
            <div>
              <div className="bg-gray-500 text-white h-12 font-bold text-xl p-2 m-2">
                Movie Title - {movieDesc.title} ({movieDesc.tagline})
              </div>
              <div className="bg-gray-500 text-white h-auto text-xl p-2 m-2">
                Brief Overview - {movieDesc.overview}
              </div>
              <div className="bg-gray-500 text-white h-auto text-xl p-2 m-2">
                Release Date - {movieDesc.release_date}
              </div>
              <div className="flex">
                <div>
                  {movieDesc && (
                    <div className="m-2 p-2 border border-black">
                      <div className="font-bold underline text-xl">
                        {" "}
                        Genres -{" "}
                      </div>
                      {movieDesc.genres.map((genre, index) => (
                        <button
                          key={index}
                          className="my-4 mx-2 p-3 bg-green-300 border border-black-300 cursor-default"
                        >
                          {genre.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  onClick={videoHandler}
                  className="bg-green-600 cursor-pointer text-white m-3 text-center py-3 px-3 md:py-9 md:px-8 rounded-lg text-xl hover:bg-opacity-80"
                >
                  <button>▶️ Play</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <Recommendations />
      </div>

      {movieDesc && (
        <div className="border border-black m-2 p-2">
          <div className="font-bold underline text-xl">Reviews - </div>
          <div className="pl-8">1. Vote Average - {movieDesc.vote_average}</div>
          <div className="pl-8">2. Vote Count - {movieDesc.vote_count}</div>
          <div className="pl-8">
            3. Movie Runtime - {movieDesc.runtime} minutes
          </div>
          <div className="pl-8">4. Popularity - {movieDesc.popularity}</div>
          <div>
            <div className="pl-8">5. Production Companies - </div>
            {movieDesc.production_companies.map((company, index) => {
              return (
                <ul key={index} className="pl-[80px] list-disc">
                  <li>
                    {" "}
                    {company.name} - {company.origin_country}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="pl-8">
            6. Viewer's Comment - <Reviews />{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
