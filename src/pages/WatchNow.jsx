import { useEffect, useState } from "react";
import MovieDetailsCard from "../components/MovieDetailsCard";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { options } from "../services/omdbApi";

const WatchNow = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [embedError, setEmbedError] = useState(false);

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
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchMovieDetails();
  }, [id, tvPath]);

  const handleWatchInNewWindow = () => {
    window.open(
      `https://vidsrc.to/embed/movie/${id}`,
      "_blank",
      "width=1000,height=600"
    );
  };

  return (
    <div className="h-full mt-24 w-screen flex flex-col items-center justify-center">
      {loading ? (
        <div className="w-full h-[80vh] md:h-[90vh] px-20 py-8 rounded-lg bg-gray-900 animate-pulse" />
      ) : embedError ? (
        <div className="w-full h-[80vh] md:h-[90vh] px-20 py-8 flex flex-col items-center justify-center gap-4">
          <p className="text-white text-xl font-source">
            This video cannot be embedded directly.
          </p>
          <button
            onClick={handleWatchInNewWindow}
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-oswald hover:bg-red-700 transition-colors"
          >
            Watch in New Window
          </button>
        </div>
      ) : (
        <iframe
          src={`https://vidsrc.to/embed/movie/${id}`}
          className="w-full h-[80vh] md:h-[90vh] px-20 py-8 rounded-lg"
          sandbox="allow-scripts allow-same-origin allow-forms"
          referrerPolicy="no-referrer"
          onError={() => setEmbedError(true)}
          loading="lazy"
          title={movie?.title || "Movie Player"}
        />
      )}

      <MovieDetailsCard movie={movie} absolute={false} />
    </div>
  );
};

export default WatchNow;
