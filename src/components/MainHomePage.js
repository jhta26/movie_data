import React from "react";
import PageLayout from "./PageLayout";
import HeaderComponent from "./HeaderComponent";
import PopularMoviesComponent from "./PopularMoviesComponent";
const MainHomePage = ({ popularMovies }) => {
  return (
    <div className="MainHomePage">
      <PageLayout>
        <HeaderComponent />
        <PopularMoviesComponent movies={popularMovies} />
      </PageLayout>
    </div>
  );
};

export default MainHomePage