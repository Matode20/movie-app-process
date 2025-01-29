/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlay, FaPlus, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { options } from "../services/omdbApi";

const MovieDetailsCard = ({ movie, absolute }) => {
  const [cast, setCast] = useState([]);
  const [hover, setHover] = useState({ index: null, show: false });

  useEffect(() => {
    // Function to fetch cast details
    const fetchcast = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movie?.id}/credits`;
      try {
        const response = await axios.get(url, options);
        setCast(response.data.cast.slice(0, 5)); // Set the first 5 cast members
        console.log(response.data.cast.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };
    fetchcast();
  }, [movie?.id]);

  return (
    <div
      className={`flex gap-10 w-[85%] text-black max-h-[30rem] min-h-[25rem] items-center p-8 rounded-lg mt-4 ${
        absolute
          ? `absolute top-[35rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2`
          : ``
      }  bg-white/80 backdrop-blur-md`}
    >
      {/* Movie Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        className="h-80 rounded-xl object-cover"
        alt={movie?.title || movie?.name}
        loading="lazy"
      />

      <div className="flex-1">
        <div className="flex items-center justify-between">
          {/* Watch Now Button */}
          <Link
            to={
              movie?.media_type === "tv"
                ? `/watch-tv/${movie?.id}`
                : `/watch-movie/${movie?.id}`
            }
            className="bg-red-500 font-oswald font-semibold rounded-lg px-3 py-2 capitalize flex items-center gap-2 transition-transform transform hover:scale-105"
          >
            <FaPlay /> Watch Now
          </Link>
          {/* Add to Favorite Button */}
          <button className="bg-gray-500/20 font-oswald font-semibold rounded-lg px-3 py-2 capitalize flex items-center gap-2 transition-transform transform hover:scale-105">
            <FaPlus /> Add to Favorite
          </button>
        </div>
        <div className="flex flex-col items-start gap-3 mt-2">
          <div className="flex flex-col items-start gap-3">
            {/* Movie Title */}
            <h2 className="text-3xl font-semibold font-oswald">
              {movie?.title || movie?.name}
            </h2>
            <span className="flex items-center gap-3 font-oswald">
              {/* Trailer Link */}
              <Link
                target="_blank"
                to={movie?.homepage}
                className="border border-black flex items-center gap-2 px-2 py-1 rounded transition-transform transform hover:scale-105"
              >
                <FaYoutube />
                Trailer
              </Link>
              {/* HD Button */}
              <button className="font-semibold px-2 py-1 rounded border border-black transition-transform transform hover:scale-105">
                HD
              </button>
              {/* IMDB Rating */}
              <p className="text-yellow-700 font-semibold font-oswald">
                IMDB: {movie?.vote_average.toFixed(1)}
              </p>
            </span>
          </div>
          {/* Movie Overview */}
          <p className="w-full font-source text-gray-700">
            {movie?.overview.length > 300 // Limit the overview to 300 characters for better UI
              ? movie?.overview.slice(0, 300) + "..."
              : movie?.overview}
          </p>
          {/* Movie Details */}
          <ul className="grid grid-cols-2 gap-1 font-source">
            <li>
              <span className="font-semibold font-oswald">Released:</span>{" "}
              {movie?.release_date || movie?.first_air_date}
            </li>
            <li>
              <span className="font-semibold font-oswald">Runtime:</span>{" "}
              {movie?.runtime} mins
            </li>
            <li>
              <span className="font-semibold font-oswald">Genre:</span>{" "}
              {movie?.genres.map((genre, index) => (
                <span key={genre.id}>
                  {genre.name}
                  {index !== movie.genres.length - 1 ? ", " : ""}
                </span>
              ))}
            </li>
            <li>
              <span className="font-semibold font-oswald">Country:</span>{" "}
              {movie?.production_countries.map((country, index) => (
                <span key={country.iso_3166_1}>
                  {country.name}
                  {index !== movie.production_countries.length - 1 ? ", " : ""}
                </span>
              ))}
            </li>
            {/* Cast members */}
            <li className="flex gap-1 relative">
              <span className="font-semibold font-oswald flex flex-wrap ">
                Casts:
              </span>{" "}
              <span>
                {cast?.map((actor, index) => (
                  <div key={actor.id} className="inline space-x-6 ">
                    <span
                      className="cursor-pointer hover:underline inline-flex mr-1 flex-nowrap"
                      onMouseEnter={() => setHover({ index, show: true })}
                      onMouseLeave={() =>
                        setHover({ index: null, show: false })
                      }
                    >
                      {actor.name}
                      {index !== cast.length - 1 ? ", " : ""}
                      {hover.index === index && hover.show && (
                        <span className="bg text-black p-2 flex flex-col items-center justify-center rounded-2xl min-h-24 min-w-40 w-fit font-semibold absolute top-[-6.5rem] transform transitiion-all duration-300 hover:scale-105 shadow-lg">
                          <img
                            src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`}
                            className="h-16 w-16 rounded-full object-cover"
                            alt=""
                          />
                          <p className="">{actor.character}</p>
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </span>
            </li>
            <li>
              <span className="font-semibold font-oswald">Language:</span>{" "}
              {movie?.spoken_languages.map((lang, index) => (
                <span key={lang.iso_639_1}>
                  {lang.english_name}
                  {index !== movie.spoken_languages.length - 1 ? ", " : ""}
                </span>
              ))}
            </li>
            <li>
              <span className="font-semibold font-oswald">Production:</span>{" "}
              {movie?.production_companies.map((prodCom, index) => (
                <span key={prodCom.id}>
                  {prodCom.name}
                  {index !== movie.production_companies.length - 1 ? ", " : ""}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
