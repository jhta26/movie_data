import GetPopularMovies from "../../requests/GetPopularMovies";

export default function GetPopularMoviesProcess(searchInput) {
  return (dispatch, getState, env) => {
    return GetPopularMovies('http://localhost:8000')
      .then(movies => {
        console.log(movies)
        dispatch({
          type: "GET_POPULAR_MOVIES_COMPLETED",
          popularMovies: movies
        });
        return movies;
      })
      .catch(error => {
        dispatch({ type: "GET_POPULAR_MOVIES_FAILED" });
      });
  };
}
