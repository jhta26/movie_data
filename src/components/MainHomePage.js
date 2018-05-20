import React from "react";
import PageLayout from "./PageLayout";
import HeaderComponent from "./HeaderComponent";
import PopularMoviesComponent from "./PopularMoviesComponent";
import UpcomingMoviesComponent from "./UpcomingMoviesComponent";
import MainHomePageToolbarComponent from "./MainHomePageToolbarComponent";
import NowPlayingMoviesComponent from "./NowPlayingMoviesComponent";

const MainHomePage = ({
  popularMovies,
  upcomingMovies,
  nowPlayingMovies,
  onShowCategory,
  selectedCategory,
  onShowMovieInfo
}) => {
  if (!selectedCategory) return null;

  return (
    <div className="MainHomePage black">
      <PageLayout>
        <HeaderComponent />
        <MainHomePageToolbarComponent onShowCategory={onShowCategory} />
        {selectedCategory === "popular" ? (
          <PopularMoviesComponent
            movies={popularMovies}
            onShowMovieInfo={onShowMovieInfo}
          />
        ) : null}
        {selectedCategory === "upcoming" ? (
          <UpcomingMoviesComponent
            movies={upcomingMovies}
            onShowMovieInfo={onShowMovieInfo}
          />
        ) : null}
        {selectedCategory === "nowPlaying" ? (
          <NowPlayingMoviesComponent
            movies={nowPlayingMovies}
            onShowMovieInfo={onShowMovieInfo}
          />
        ) : null}
      </PageLayout>
    </div>
  );
};

export default MainHomePage;
