/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Episodes = ({ episodes, setSelectedEpisode, id, selectedSeason, selectedEpisode }) => {

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/tv/${id}/season/${selectedSeason}/episode/${selectedEpisode}?language=en-US`;
    // const fetch
  }, []);
  console.log(episodes.episode_number);
  return (
    <div
      onClick={() => setSelectedEpisode(episodes.episode_number)}
      className="bg-slate-200 text-slate-900 p-2 flex items-baseline rounded gap-2 w-[calc(33.33%-2rem)] hover:cursor-pointer"
    >
      <p className="font-oswald font-semibold">
        Eps {episodes.episode_number}:{" "}
      </p>
      <p className="font-source">
        {episodes.name.length > 25
          ? episodes.name.substring(0, 25) + "..."
          : episodes.name}
      </p>
    </div>
  );
};

export default Episodes;
