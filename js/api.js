(function () {

  // template para pagina de peliculas
  const items = document.getElementById('item');
  const templateMovie = document.getElementById('template-movie').content; // template para peliculas 
  const fragment = document.createDocumentFragment();


  document.addEventListener("DOMContentLoaded", () => {
    fetchData();
  }); // carga de datos

  const fetchData = async () => {
    try {
      const response = await fetch('https://yts.mx/api/v2/list_movies.json');
      const data = await response.json();
      //console.log(data)
      renderMovie(data);
    } catch (error) {
      console.log(error);
    }
  }



  const renderMovie = data => {
    data.data.movies.forEach(movie => {
      //console.log(movie);
      templateMovie.querySelector('figcaption').textContent = movie.title_long; // titulo de la pelicula
      templateMovie.querySelector('img').src = movie.medium_cover_image; // imagen de la pelicula
      templateMovie.querySelector('img').alt = movie.title; // titulo de la pelicula
      templateMovie.querySelector('a').href = 'https://www.imdb.com/title/' + movie.imdb_code; // link de IMDB    
      templateMovie.getElementById('trailer').href = 'https://www.youtube.com/embed/' + movie.yt_trailer_code; // link de youtube
      templateMovie.getElementById('descarga').href = movie.torrents[1].url; // link de descarga

      const clone = templateMovie.cloneNode(true);
      fragment.appendChild(clone);
    });
    items.appendChild(fragment); // agrega los elementos al html
  }

})();