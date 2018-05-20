export default function rootReducer(
  currentState = {
    searchedMovies: [],
    popularMovies: [],
    upcomingMovies: [],
    nowPlayingMovies: [],
    selectedCategory: "nowPlaying",
    selectedMovie: {},
    authenticatedUser: "",
    showMovie: false,
    mainPageDisplay: ""
  },
  action
) {
  switch (action.type) {
    case "GET_MOVIES_COMPLETED":
      return {
        ...currentState,
        movies: action.movies
      };
    case "GET_MAIN_PAGE_MOVIES_COMPLETED":
      return {
        ...currentState,
        popularMovies: action.popularMovies,
        upcomingMovies: action.upcomingMovies,
        nowPlayingMovies: action.nowPlayingMovies
      };
    case "GET_POPULAR_MOVIES_COMPLETED":
      return {
        ...currentState,
        popularMovies: action.popularMovies
      };
    case "SELECT_MOVIE":
      return {
        ...currentState,
        selectedMovie: action.selectedMovie,
        showMovie: true
      };
    case "CLOSE_MOVIE":
      return {
        ...currentState,
        showMovie: false
      };
    case "SHOW_CATEGORY":
      let currentSelCar = currentState.selectedCategory;
      currentSelCar = action.selectedCategory;
      return {
        ...currentState,
        selectedCategory: currentSelCar
      };
    case "SHOW_MOVIE_INFO":
      let currentSelMovie = currentState.selectedMovie;
      currentSelMovie = action.selectedMovie;
      console.log(currentSelMovie);
      return {
        ...currentState,
        selectedMovie: currentSelMovie
      };
  }
}
