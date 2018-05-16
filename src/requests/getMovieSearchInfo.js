const GetMovieSearchInfo = async (searchInput, baseURL, id, token) => {
  try {
    let myInit = {
      method: "GET",
      mode: "cors",
      cache: "default"
    };
    let TMDBRequest = await fetch(`${baseURL}/movieAPI/${searchInput}`, myInit);

    let TMDBResponse = await TMDBRequest.json();

    return TMDBResponse;
  } catch (error) {
    return "error";
  }
};

export default GetMovieSearchInfo;
