export const reqMovies = async () => {
    let api_base = "https://api.themoviedb.org/3";
    let api_key = "cab107db794c80c6a3579c95a8f8d81a";
    let api_query =
      "/discover/tv?language=pt-BR&adult=true&sort_by=popularity.desc&page=1&api_key=";

    const req = await fetch(`${api_base}${api_query}${api_key}`)
      .then((response) => response.json())
      .then((movies) => {
        return movies.results;
      });
    
    return req;
}