import React from "react";
import PageLayout from "./PageLayout";
import HeaderComponent from "./HeaderComponent";
import PopularMoviesComponent from "./PopularMoviesComponent";
import UpcomingMoviesComponent from "./UpcomingMoviesComponent";
import MainHomePageToolbarComponent from "./MainHomePageToolbarComponent"

const MainHomePage = ({ popularMovies, upcomingMovies, nowPlayingMovies }) => {
  console.log(popularMovies);

  return (
    <div className="MainHomePage black">
      <PageLayout>
        <HeaderComponent />
        <MainHomePageToolbarComponent/>
        <UpcomingMoviesComponent movies={upcomingMovies} />
        <PopularMoviesComponent movies={popularMovies} />
      </PageLayout>
    </div>
  );
};

export default MainHomePage;
