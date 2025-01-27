import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { options } from "../services/omdbApi";
import { FaPlay, FaPlayCircle, FaYoutube } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Recommendations from "../components/Recommendations";
import Skeleton from "react-loading-skeleton";
import backGroundImage from "../assets/images/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg";
import MovieDetailsCard from "../components/MovieDetailsCard";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  const tvPath = pathname.includes("tv");
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/${
        tvPath ? "tv" : "movie"
      }/${id}?language=en-US`;
      setLoading(true);
      try {
        const response = await axios.get(url, options);
        setMovie(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchMovieDetails();
  }, [id, tvPath]);

  return (
    <div className="flex flex-col h-full items-center ">
      <div className="relative items-center">
        <img
          src={
            loading
              ? backGroundImage
              : `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`
          }
          alt={movie?.title || movie?.name || "Movie backdrop"}
          className="w-screen"
        />
        <FaPlayCircle className="absolute p-4 h-20 w-20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-900/50 hover:cursor-pointer hover:scale-125 hover:bg-red-700/70 text-5xl" />

        {loading ? (
          <Skeleton containerClassName="flex gap-10  w-[85%]  bg-slate-100 text-black p-8 rounded-lg mt-4 absolute top-[83%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-[30rem]" />
        ) : (
          <MovieDetailsCard movie={movie} absolute={true} />
        )}
      </div>

      <Recommendations id={id} tvPath={tvPath} />
    </div>
  );
};

export default MovieDetails;
