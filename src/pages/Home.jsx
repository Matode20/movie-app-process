import { useEffect, useState } from "react";
import { fetchAllMovies } from "../services/omdbApi";
import TrendingMovieCard from "../components/TrendingMovieCard";
import { trendingMoviesData } from "../data/data";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllMovies();
      console.log(data.Search);
      setMovies(data.Search); // set the movies state with the data from the API
    };
    fetchData();
    setTrendingMovies(trendingMoviesData);
    //dependencies array is empty, so this effect will only run once after the initial render
  }, []);

  return (
    <div>
      <div className="flex gap-3 flex-col">
        {trendingMovies?.map((movie) => (
          <TrendingMovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
