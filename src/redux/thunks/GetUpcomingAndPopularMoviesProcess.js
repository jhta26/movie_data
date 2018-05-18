import GetPopularMovies from "../../requests/GetPopularMovies";
import GetUpcomingMovies from '../../requests/GetUpcomingMovies'

export default function GetUpcomingAndPopularMoviesProcess(searchInput) {
    return (dispatch, getState, env) => {
            
            let popMoviesPromise = GetPopularMovies('http://localhost:8000')
            let upMoviesPromise = GetUpcomingMovies('http://localhost:8000')
            
            return Promise.all([popMoviesPromise, upMoviesPromise]).then((movies) => {
              console.log(movies,'>>>>>>>>>>>')
                    dispatch({ type: "GET_POP_AND_UP_MOVIES_COMPLETED", popularMovies: movies[0], upcomingMovies: movies[1] })
                    return movies
                
                });
            }
          }