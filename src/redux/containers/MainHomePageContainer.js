import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import MainHomePage from "../../components/MainHomePage";
import GetMovieSearchInfoProcess from "../thunks/GetMovieSearchInfoProcess";
import GetMainPageMoviesProcess from "../thunks/GetMainPageMoviesProcess";

function mapStateToProps(state, ownProps) {
  return { ...state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(GetMainPageMoviesProcess()),
    onSearchForMovies: searchInfo => GetMovieSearchInfoProcess(searchInfo),
    onShowCategory: category =>
      dispatch({ type: "SHOW_CATEGORY", selectedCategory: category }),

    onShowMovieInfo: info =>
      dispatch({ type: "SHOW_MOVIE_INFO", selectedMovie: info })
  };
}
const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(MainHomePage);
