// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const directors = movies.map(movie => movie.director);
  return directors;
  /* console.log("EXERCICE 1 ->", directors); */
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const moviesFromDirector = movies.filter(movie => movie.director === director)
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const moviesFromDirector = getMoviesFromDirector(movies, director)
  const averageScore = moviesFromDirector.reduce((average, movie) => average += movie.score, 0)
  return Number((averageScore / moviesFromDirector.length).toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const sortByTitle = movies.map((movie) => movie.title).sort().slice(0, 20)
  return sortByTitle
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const sortByYear = [...movies].sort((a, z) => {
    if (a.year === z.year) {
      return a.title.localeCompare(z.title)
    }
    return a.year - z.year
  })
  return sortByYear
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const moviesByGenre = movies.filter(movie => movie.genre.includes(genre) && movie.score !== '')
  const averageByGenre = moviesByGenre.reduce((average, movie) => average += movie.score, 0)
  return Number((averageByGenre / moviesByGenre.length).toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const minutesDuration = movies.map(movie => {
    const filmDuration = movie.duration
    const splitHours = filmDuration.split('h')
    const splitMinutes = filmDuration.split('h ')
    const durationToMinutes = Number(parseInt(splitHours[0]) * 60 + (splitMinutes.length > 1 ? parseInt(splitMinutes[1]) : 0))
    return {
      ...movie,
      duration: durationToMinutes
    }
  })
  return minutesDuration
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const moviesOfTheYear = movies.filter(movie => movie.year === year)
  const movieOfTheYear = moviesOfTheYear.sort().slice(0, 1)
  return movieOfTheYear
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
