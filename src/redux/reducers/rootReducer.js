export default function rootReducer(
    currentState = {
        searchedMovies: [],
        popularMovies: [],
        upcomingMovies: [],
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
        case 'GET_POP_AND_UP_MOVIES_COMPLETED':
            return {
                ...currentState,
                popularMovies: action.popularMovies,
                upcomingMovies: action.upcomingMovies

            };
        case 'SELECT_MOVIE':
            return {
                ...currentState,
                selectedMovie: action.selectedMovie,
                showMovie: true
            }
        case 'CLOSE_MOVIE':
            return {
                ...currentState,
                showMovie: false
            }
    }

}