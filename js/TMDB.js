const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzRlNTMzNGRjNWExMjhiZWU0MDBhYzA5NzI4MmVlNSIsInN1YiI6IjY0Nzg0NzY0MGUyOWEyMDBiZjFkNmEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5_RI5p1cplFYcmnAki07-ExFQ19iUAq3cP9BSz0pp0'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    let rows = response['results'];
    const cardList = document.querySelector('.card-list');

    rows.forEach((a) => {
      let movie_title = a['title'];
      let overview = a['overview'];
      let poster_path = a['poster_path'];
      let vote = a['vote_average'];
      let id = a['id'];

      let temp_html = `
            <div class="movie-card" data-id="${id}">
                <img src="https://image.tmdb.org/t/p/w500${poster_path}">
                <h3>${movie_title}</h3>
                <p>Rating: ${vote}</p>
                <p>${overview}</p>
            </div>
        `;
      cardList.insertAdjacentHTML('beforeend', temp_html);
    });

    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
      card.addEventListener('click', function () {
        let movieId = this.getAttribute('data-id')
        alert(`영화 id: ${movieId}`);
      });
    });
  });