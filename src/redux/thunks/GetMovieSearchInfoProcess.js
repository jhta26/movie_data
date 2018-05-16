import GetMovieSearchInfo from '../../requests/GetMovieSearchInfo';

export default function GetMovieSearchInfoProcess(searchInput) {
  return (dispatch, getState, env) => {
    const { userId, userToken } = getState();
    return GetMovieSearchInfo(searchInput,`${env.REACT_APP_BASE_URL}`,null, null)
      .then(movies => {
        dispatch({ type: 'GET_MOVIES_COMPLETED', movies: movies });
        return movies;
      })
      .catch(error => {
        dispatch({ type: 'GET_MEETUPS_FAILED' });
      });
  };
}