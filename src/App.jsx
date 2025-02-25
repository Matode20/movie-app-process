import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import WatchNow from "./pages/WatchNow";

const App = () => {
  console.log("sdfghjk");
  return (
    <div className="text-[#e2e2e2] bg-slate-900 h-full flex flex-col m-0 ">
      <Header />
      <div className="flex">
        <Routes>
          {/* <Route path="/" element={<SideBar />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tv/:id" element={<MovieDetails />} />
          <Route path="/watch-movie/:id" element={<WatchNow />} />
          <Route path="/watch-tv/:id" element={<WatchNow />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
