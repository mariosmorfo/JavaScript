$(function () {
  let debounceTimeout = null
  $('#searchInput').on('input', function () {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => getMovie(this.value.trim()), 1500)
  })

  $('#showMore').on('click', function (e) {
    e.preventDefault();
    onShowMoreClicked();
  })
})

function getMovie(title) {
  if (title.length > 2) {
    axios.get(`https://www.omdbapi.com/?t=${title}&apikey=fc79faab`)
      .then(response => {
        getImage(response);
       
        if (response.data.Response === "True") {
          document.getElementById('movie').classList.remove('hidden');
          document.getElementById('title').innerHTML = `${response.data.Title}`;
          document.getElementById('year').innerHTML = `Έτος παραγωγής: ${response.data.Year}`;
          document.getElementById('runtime').innerHTML = `Διάρκεια: ${response.data.Runtime}`;
          document.getElementById('genre').innerHTML = `Είδος: ${response.data.Genre}`;
          document.getElementById('favoriteLink').src = '/apps/movies-app/images/favorite.png';
          document.getElementById('imdbId').src = '/apps/movies-app/images/imdb.png';
          document.getElementById('imdbRating').innerHTML = `${response.data.imdbRating}`
          document.getElementById('plot').innerHTML = `${response.data.Plot}`
        } else {
          alert('Δεν βρέθηκαν ταινίες σύμφωνα με τα κριτήρια αναζήτησης.');

        }
      })
      .catch(error => {
        console.error("Error fetching movie:", error);
      });
     
  }
 
}

function getImage(response){
  document.getElementById('image').src = response.data.Poster;
}

getMovie();
