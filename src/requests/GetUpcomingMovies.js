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
