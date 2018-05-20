import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import MovieInfoComponent from "../../components/MovieInfoComponent";

function mapStateToProps(state, ownProps) {
  return { ...state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // onMount: () => ()),
  };
}
const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// const onDidMount = lifecycle({
//     componentDidMount() {
//         this.props.onMount();
//     }
// });

export default compose(connectToStore)(MovieInfoComponent);
