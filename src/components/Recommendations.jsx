/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "../services/omdbApi";
import MovieCard from "./MovieCard";

const Recommendations = ({ id, tvPath }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false); // set loading to false by default

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true); // set loading to true before making the request to the API
      try {
        const url = `https://api.themoviedb.org/3/${
          tvPath ? "tv" : "movie"
        }/${id}/recommendations?language=en-US`; // fetch recommendations based on the movie or tv show id
        const response = await axios.get(url, options);
        console.log(response.data.results);
        setRecommendations(response.data.results); // set the recommendations to the response data
      } catch (error) {
        console.error(error);
      }
      setLoading(false); // set loading to false after the request is completed
    };
    fetchRecommendations(); // call the fetchRecommendations function when the component mounts or when the id or tvPath changes
  }, [tvPath, id]);

  return (
    <div className="bg-slate-800/60 mt-16 w-screen p-14 ">
      <h2 className="text-3xl font-semibold">Recommended Watches</h2>

      <div className="grid grid-cols-5 mt-10 gap-5">
        {recommendations?.map((recommendation) => (
          <MovieCard
            key={recommendation.id}
            movie={recommendation}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
