/*const movies = document.getElementById('movies');
const moviesList = document.getElementById('Squad');

movies.addEventListener('click', (e) => {
    if (e.target.id !== 'movies') {
        alert('Ale esta seccion aún esta en desarrollo... Pero te dejo un avance de HBO ;)');
    }
    if (moviesList.value === 'Squad') {
        player('_aMj22xtPKU');
    }
} );*/

/*function player(idVideo) {
    let youtube = "https://www.youtube.com/embed/"
    let video = youtube + idVideo
    let myPlayer = document.getElementById("player");
    myPlayer.innerHTML = `<iframe width="100%" height="100%" src="${video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
} 

player("_aMj22xtPKU"); */

// template para la pagina de los trailers

const player = document.getElementById('player')
const templatePlayer = document.getElementById('template-player').content // template los trailes
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
    templatePlayer.querySelector('iframe').src = movie.YouTube

    const clone = templatePlayer.cloneNode(true)
    fragment.appendChild(clone)      
  });
  player.appendChild(fragment)
}

