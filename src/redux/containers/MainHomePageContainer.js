import {compose,lifecycle} from 'recompose'
import {connect} from 'react-redux'
import MainHomePage from '../../components/MainHomePage'
import GetMovieSearchInfoProcess from '../thunks/GetMovieSearchInfoProcess'
import GetPopularMoviesProcess from '../thunks/GetPopularMoviesProcess'
import GetUpcomingAndPopularMoviesProcess from '../thunks/GetUpcomingAndPopularMoviesProcess'
// projectInfo,onShowProject,selectedProject
function mapStateToProps(state,ownProps){
    return{...state}
}

function mapDispatchToProps(dispatch,ownProps){
    
    return{

        onMount: ()=>dispatch(GetUpcomingAndPopularMoviesProcess()),
        onSearchForMovies:(searchInfo) =>GetMovieSearchInfoProcess(searchInfo),
    }
}

const connectToStore = connect(mapStateToProps,mapDispatchToProps)

const onDidMount = lifecycle({
    componentDidMount(){
        this.props.onMount()
    }
})

export default compose(connectToStore,onDidMount)(MainHomePage)