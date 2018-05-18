// https://api.themoviedb.org/3/movie/upcoming?api_key=4d5bf8d10c6b03d87d1ad39ff4d7e296&language=en-US&page=1

const GetUpcomingMovies = async baseURL => {
  let myInit = {
    method: "GET",
    mode: "cors",
    cache: "default"
  };
  let TMDBRequest = await fetch(`${baseURL}/upcoming`, myInit);
  let TMDBResponse = await TMDBRequest.json();
  let results = await TMDBResponse;
  return results;
};

export default GetUpcomingMovies;
