import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6">
      <h1 className="py-4 text-lg md:text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <>
                <Link key={movie.id + title} to={"/movie/" + movie.id}>
                  <MovieCard key={movie.id} posterPath={movie.poster_path} />
                </Link>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
