// template para pagina de peliculas

document.addEventListener("DOMContentLoaded", () => {
    peliculas()
  })
  
  const peliculas = async () => {
    try {
      const response = await fetch('api.json')
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  
  