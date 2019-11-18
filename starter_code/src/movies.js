/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieList) {
    const movieYears = movieList.map((movie) => movie);
    const movieYearList = movieYears.sort((a, b) => {
        if (a.year - b.year === 0) {
            if (a.title > b.title) return 1;
            if (a.title == b.title) return 0;
            if (a.title < b.title) return -1;
        }
        else return a.year - b.year;
    });
    return movieYearList;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movieList) {
    let newList = movieList.filter(movies => movies.director === 'Steven Spielberg');
    return newList.filter(movies => movies.genre.includes('Drama')).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieList) {
    let moveiTitles = movieList.map(movie => movie.title);
    let sortedList = moveiTitles.sort();
    return sortedList.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieList){
    let movieRates = movieList.map(movie => movie.rate);
    return movieRates.reduce(a, b => a += b) / movieRates.length;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
