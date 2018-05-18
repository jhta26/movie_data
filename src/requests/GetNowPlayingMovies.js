const GetNowPlayingMovies = async (baseURL) => {
  try {
    let myInit = {
      method: "GET",
      mode: "cors",
      cache: "default"
    };
    let TMDBRequest = await fetch(`${baseURL}/nowplaying`, myInit);
    let TMDBResponse = await TMDBRequest.json()
    let results = TMDBResponse
    return results;
  } catch (error) {
    return "error";
  }
};

export default GetNowPlayingMovies;
