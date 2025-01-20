import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-gray-900 py-6 px-4 shadow-md fixed z-30 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-white text-2xl font-bold mb-4 md:mb-0">MovieApp</h1>
        <div className="w-full md:w-1/2">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
