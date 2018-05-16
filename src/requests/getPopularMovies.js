const GetPopularMovies = async (baseURL, id, token) => {
  try {
    let myInit = {
      method: "GET",
      mode: "cors",
      cache: "default"
    };
    let TMDBRequest = await fetch(`${baseURL}/movieAPI/popular`, myInit);
    let TMDBResponse = await TMDBRequest.json();
    return TMDBResponse;
  } catch (error) {
    return "error";
  }
};

export default GetPopularMovies;
