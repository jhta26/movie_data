import React from "react";
import PageLayout from "./PageLayout";
import HeaderComponent from "./HeaderComponent";
import PopularMoviesComponent from "./PopularMoviesComponent";
import UpcomingMoviesComponent from "./UpcomingMoviesComponent";
const MainHomePage = ({ popularMovies, upcomingMovies }) => {
  console.log(popularMovies);

  return (
    <div className="MainHomePage black">
      <PageLayout>
        <HeaderComponent />
        <UpcomingMoviesComponent movies={upcomingMovies} />
        <PopularMoviesComponent movies={popularMovies} />
      </PageLayout>
    </div>
  );
};

export default MainHomePage;
