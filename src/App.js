import React from "react";
import "./App.css";
import HeroImage from "./components/HeroImage";
import SearchBar from "./components/SearchBar";
import Movies from "./components/Movies";
import Spinner from "./components/Spinner";

const App = ({
  movies,
  heroImage,
  loading,
  currentPage,
  totalPages,
  searchTerm,
  searchMovies,
  loadMoreMovies
}) => {
  // console.log(movies);
  // console.log(heroImage);
  // console.log(currentPage);
  // console.log(totalPages);
  // console.log(searchTerm);
  // console.log(currentPage);
  return (
    <div className="App">
      {heroImage ? (
        <div className="heroImage">
          <HeroImage
            image={heroImage.backdrop_path}
            title={heroImage.original_title}
          />
          <SearchBar searchItems={searchMovies} />
        </div>
      ) : null}
      <div className="result">
        <h1>
          {searchTerm === "" && !loading ? "Popular Movies" : "Search Results"}
        </h1>
      </div>
      <div className="container">
        <div className="row">
          {Object.keys(movies).map(key => {
            return (
              <Movies
                key={key}
                movie={movies[key]}
                movieName={movies[key].original_title}
                movkey={movies[key].id}
                clickable={true}
              />
            );
          })}
        </div>
      </div>
      {loading ? <Spinner /> : null}
      {currentPage <= totalPages && !loading ? (
        <div className="container">
          <button className="loading-button col-xs-12" onClick={loadMoreMovies}>
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default App;
