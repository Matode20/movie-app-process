/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";


const TrendingMovieCard = ({ movie }) => {
  return (
    <div className=" relative w-[65rem] text-[#e2e2e2] ">
      <button className="absolute top-4 left-5 px-4 py-1 rounded-2xl bg-slate-200/20">
        Now Trending 🔥
      </button>
      <img
        src={movie.poster}
        className="w-full object-cover rounded-3xl h-[30rem]"
        alt=""
      />

      <div className="absolute bottom-0 w-full p-4 flex items-end justify-between">
        <div>
          <div>
            {movie.genres.map((genre, index) => {
              <span
                key={index}
                className="text-xs bg-slate-200/20 px-2 py-1 rounded-2xl"
              >
                {genre}
              </span>;
            })}
          </div>
          <div className="mt-2 flex flex-col items-start gap-3">
            <h2 className="text-3xl font-bold mt-2">{movie.title}</h2>
            <p className="text-sm w-[50%]">{movie.plot}</p>
          </div>

          <div className="mt-4 flex gap-4 items-center *:rounded-2xl *:py-1 *:px-3">
            <button className="bg-white text-black flex items-center gap-2 hover:bg-gray-500/50 transition-all duration-300 ease-in-out">
              <FaPlay />
              Watch
            </button>
            <button className="bg-gray-500/50 flex items-center gap-2 hover: transition-all duration-300 ease-in-out">
              <MdPlaylistPlay />
              Trailer
            </button>
          </div>
        </div>
        <div className="flex items-center *:bg-transparent *:rounded-full *:p-4 *:justify-between">
          <button className="text-2xl">
            <CiSquareChevLeft />
          </button>
          <button className="text-2xl">
            <CiSquareChevRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovieCard;
