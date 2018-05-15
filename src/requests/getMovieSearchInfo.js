const GetMovieSearchInfo = async (searchInput,{baseURL,id,token}) => {
  let TMDBRequest = await fetch(
    `${baseURL}/${searchInput}`
  );
  let TMDBResponse = await TMDBRequest.json();
  let results = await TMDBResponse.results;
  return results;
};

export default GetMovieSearchInfo;
