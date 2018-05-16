import GetPopularMovies from "../../requests/GetPopularMovies";

export default function GetPopularMoviesProcess(searchInput) {
  return (dispatch, getState, env) => {
    const { userId, userToken } = getState();
    return GetPopularMovies(`${env.REACT_APP_BASE_URL}`, null, null)
      .then(movies => {
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
