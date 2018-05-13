const getPopularMovies = async () => {
    let TMDBRequest = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4d5bf8d10c6b03d87d1ad39ff4d7e296&language=en-US&page=1`)
    let TMDBResponse = await TMDBRequest.json()
    let results = await TMDBResponse.results
    return results

}

export default getPopularMovies;
