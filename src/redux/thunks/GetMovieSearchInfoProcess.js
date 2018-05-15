import GetMovieSearchInfo from '../../requests/GetMovieSearchInfo';

export default function GetMovieSearchInfoProcess(searchInput) {
  return (dispatch, getState, env) => {
    const { userId, userToken } = getState();
    return GetMovieSearchInfo(searchInput,{baseURL,userId, userToken})
      .then(movies => {
        dispatch({ type: 'GET_MOVIES_COMPLETED', movies: movies });
        return movies;
      })
      .catch(error => {
        dispatch({ type: 'GET_MEETUPS_FAILED' });
      });
  };
}