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

function player(idVideo) {
    let youtube = "https://www.youtube.com/embed/"
    let video = youtube + idVideo
    let myPlayer = document.getElementById("player");
    myPlayer.innerHTML = `<iframe width="100%" height="100%" src="${video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
} 

player("_aMj22xtPKU"); 