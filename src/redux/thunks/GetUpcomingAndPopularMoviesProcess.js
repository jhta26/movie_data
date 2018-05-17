import GetPopularMovies from "../../requests/GetPopularMovies";
import GetUpcomingMovies from '../../requests/GetUpcomingMovies'

export default function GetUpcomingAndPopularMoviesProcess(searchInput) {
  return (dispatch, getState, env) => {
    const { userId, userToken } = getState();
    return Promise.all([GetPopularMovies,GetUpcomingMovies]).then([popMovies,upMovies])=>{
      dispatch({type:"GET_POP_AND_UP_MOVIES_COMPLETED",popularMovies:popMovies,upcomingMovies:upMovies})
      return [popMovies,upMovies]
    }
    // return GetPopularMovies(`${env.REACT_APP_BASE_URL}`, null, null)
    //   .then(movies => {
    //     dispatch({
    //       type: "GET_POPULAR_MOVIES_COMPLETED",
    //       popularMovies: movies
    //     });
    //     return movies;
    //   })
    //   .catch(error => {
    //     dispatch({ type: "GET_POPULAR_MOVIES_FAILED" });
    //   });
  };
}
