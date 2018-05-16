import GetUpcomingMovies from "../../requests/GetUpcomingMovies";

export default function GetUpcomingMoviesProcess(searchInput) {
  return (dispatch, getState, env) => {
    const { userId, userToken } = getState();
    return GetUpcomingMovies(`${env.REACT_APP_BASE_URL}`, null, null)
      .then(movies => {
        dispatch({
          type: "GET_UPCOMING_MOVIES_COMPLETED",
          popularMovies: movies
        });
        return movies;
      })
      .catch(error => {
        dispatch({ type: "GET_UPCOMING_MOVIES_FAILED" });
      });
  };
}
