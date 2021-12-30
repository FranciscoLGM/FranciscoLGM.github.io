// template para pagina de peliculas
const items = document.getElementById('item')
const templateMovie = document.getElementById('template-movie').content // template para peliculas 
const fragment = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", () => {
  fetchData()
})

const fetchData = async () => {
  try {
    const response = await fetch('../js/api.json')
    const data = await response.json()
    //console.log(data)
    renderMovie(data)
  } catch (error) {
    console.log(error)
  }
}

const renderMovie = data => {
  data.forEach(movie => {
    templateMovie.querySelector('p').textContent = movie.title
    templateMovie.querySelector('img').src = movie.url

    const clone = templateMovie.cloneNode(true)
    fragment.appendChild(clone)
  });
  items.appendChild(fragment)
}