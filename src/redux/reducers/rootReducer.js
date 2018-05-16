export default function rootReducer(
    currentState = {
      movies:[],
      selectedMovie: 0,
      showMovie: false

    },
    action
) {
    switch (action.type) {
        case 'GET_MOVIES_COMPLETED':
            return {
                ...currentState,
                movies: action.movies
            };
        case 'SELECT_MOVIE':
            return {
                ...currentState,
                selectedMovie: action.selectedMovie,
                showMovie:true
            }
        case 'CLOSE_MOVIE':
            return{
              ...currentState,
              showMovie:false
            }
    }

}