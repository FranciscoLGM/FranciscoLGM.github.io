// template para pagina de peliculas
const items = document.getElementById('item')
const templateMovie = document.getElementById('template-movie').content // template para peliculas 
const fragment = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", () => {
  fetchData()
})

const fetchData = async () => {
  try {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json')
    const data = await response.json()
    //console.log(data)
    renderMovie(data)
  } catch (error) {
    console.log(error)
  }
}

const renderMovie = data => {
  data.data.movies.forEach(movie => {
    //console.log(movie)
    templateMovie.querySelector('p').textContent = movie.title
    templateMovie.querySelector('img').src = movie.medium_cover_image
    templateMovie.querySelector('img').alt = movie.title
    templateMovie.querySelector('a').href = 'https://www.youtube.com/embed/' + movie.yt_trailer_code

    const clone = templateMovie.cloneNode(true)
    fragment.appendChild(clone)
  });
  items.appendChild(fragment)
}


