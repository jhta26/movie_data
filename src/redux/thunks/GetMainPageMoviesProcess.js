import GetPopularMovies from "../../requests/GetPopularMovies";
import GetUpcomingMovies from "../../requests/GetUpcomingMovies";
import GetNowPlayingMovies from "../../requests/GetNowPlayingMovies";
export default function GetMainPageMoviesProcess(searchInput) {
  return (dispatch, getState, env) => {
    let popMoviesPromise = GetPopularMovies("http://localhost:8000");
    let upMoviesPromise = GetUpcomingMovies("http://localhost:8000");
    let nowMoviesPromise = GetNowPlayingMovies("http://localhost:8000");
    return Promise.all([
      popMoviesPromise,
      upMoviesPromise,
      nowMoviesPromise
    ]).then(movies => {
      console.log(movies, ">>>>>>>>>>>");
      dispatch({
        type: "GET_MAIN_PAGE_MOVIES_COMPLETED",
        popularMovies: movies[0],
        upcomingMovies: movies[1],
        nowPlayingMovies: movies[2]
      });
      return movies;
    });
  };
}
