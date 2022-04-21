(function () {

    const previous = document.querySelector('#previous');
    const next = document.querySelector('#next');

    document.addEventListener("DOMContentLoaded", () => {
        fetchData()
    }); // fetchData()

    const fetchData = async () => {
        try {
            const response = await fetch('https://yts.mx/api/v2/list_movies.json?page=12')
            const data = await response.json()
            //console.log(data)
            renderMovie(data)
        } catch (error) {
            console.log(error)
        }
    }

    previous.addEventListener('click', () => {
        changePosition(-1)
    });

    next.addEventListener('click', () => {
        changePosition(1)
    });

    const renderMovie = data => {
        data.data.movies.forEach(movie => {
            //console.log(movie.description_full)

    });
}

})();