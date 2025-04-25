let debounceTimeout = null
let movieData = null;


$(function () {
  
  $('#searchInput').on('input', function () {
    clearTimeout(debounceTimeout)
    showComponent('#waiting');
    debounceTimeout = setTimeout(() => {}, 1500)
    hideComponent('#waiting');
  })


    
  $('#showMore').on('click', function (e) {
    e.preventDefault();
    onShowMoreClicked()
    
  })
})


function getMovie(title) {
  if (title.length > 2) {
    onBeforeSend();
    axios.get(`https://www.omdbapi.com/?t=${title}&apikey=fc79faab`)
      .then(response => {
        movieData = response.data;
        getImage(response);

        imdb(response);
       

        
       
        if (response.data.Response === "True") {
          hideComponent('#waiting'); 
          showComponent('#movie');   
        
          document.getElementById('movie').classList.remove('hidden');
          document.getElementById('title').innerHTML = `${response.data.Title}`;
          document.getElementById('year').innerHTML = `Έτος παραγωγής: ${response.data.Year}`;
          document.getElementById('runtime').innerHTML = `Διάρκεια: ${response.data.Runtime}`;
          document.getElementById('genre').innerHTML = `Είδος: ${response.data.Genre}`;
          document.getElementById('favoriteLink').src = '/apps/movies-app/images/favorite.png';
          document.getElementById('imdbId').src = '/apps/movies-app/images/imdb.png';
          document.getElementById('imdbRating').innerHTML = `${response.data.imdbRating}`
          document.getElementById('plot').innerHTML = `${response.data.Plot}`
          document.getElementById('director').innerHTML = `<b>Σκηνοθεσία: </b>${response.data.Director}`;
          document.getElementById('actors').innerHTML = `<b>Ηθοποιοί: </b>${response.data.Actors}`;
          document.getElementById('production').innerHTML = `<b>Παραγωγή: </b>${response.data.Writer}`;
          document.getElementById('boxOffice').innerHTML = `<b>Box Office: </b>${response.data.BoxOffice}`;
          document.getElementById('language').innerHTML = `<b>Γλώσσα: </b>${response.data.Language}`;
          document.getElementById('rated').innerHTML = `<b>Καταλληλότητα: </b>${response.data.imdbRating}`;
        
        } else {
          hideComponent('#waiting'); 
          showComponent('#notFound');
        
        }
        
     
       
      })
      .catch(error => {
        console.error("Error fetching movie:", error);
      });
     
  }
    else{
      alert('Δεν βρέθηκαν ταινίες σύμφωνα με τα κριτήρια αναζήτησης.');

    }
 
}

function getImage(response){
  document.getElementById('image').src = response.data.Poster;
}

function onShowMoreClicked(){
  $('#more').slideToggle(1500);
  
}

function showComponent(jQeuryComponent){
  return $(jQeuryComponent).removeClass('hidden')
}

function hideComponent(jQeuryComponent){
  return $(jQeuryComponent).addClass('hidden')
}

function onBeforeSend() {
  showComponent('#waiting') 
  hideComponent('#movie')
  hideComponent('#notFound')
  hideComponent('#error')
}

function imdb(response){
  const imdbUrl = `https://www.imdb.com/title/${response.data.imdbID}`;

  // Set the IMDb link
  const imdbLink = document.getElementById("imdbId");
  imdbLink.href = imdbUrl;
}
