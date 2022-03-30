// write a function to return the total # of books in the array being used
getTotalBooksCount = books => {
  // use the .length method to count total # of book objects in the array
  return books.length;
}

// write a function to return the total # of accounts in the array being used
getTotalAccountsCount = accounts => {
  // use the .length method to count total # of account objects in the array
  return accounts.length;
}

// write a function to return the total # of borrow objects in the book.borrows array within the books array being used
getBooksBorrowedCount = books => {
  // declare a new variable to store an array of book objects that have a borrows.returned status of false in the first index
  let borrowCount = books.filter((book) => book.borrows[0].returned === false);
  // use the .length method to return the number of books that were filtered into borrowCount 
  return borrowCount.length;
}


// writer a helper function to use for slicing and sorting results for the next few functions that ask for the top 5 results
_getTop5 = input => {
  // return result of input.sort method that loops through input array and sorts values from greatest to least .count and returns just the top 5 
  return input.sort((sortA, sortB) => sortB.count - sortA.count).slice(0, 5);
}


// write a function that takes in an array of books objects and returns an array of objects containing the top 5 most common occuring genres within the books array 
getMostCommonGenres = books => {
// definte an empty variable to hold desired output 
  let commGenres = [];
// define a new variable to hold array created as result of .reduce method that loops through the books array and returns a list of every book.genre 
  let bookGenres = books.reduce((genres, book) =>
  {
    // push each book.genre in books array to an empty array initialized in reduce method 
    genres.push(book.genre);
    // return genres array to the bookGenres variable 
    return genres;
  }, []);

  // define a new variable to hold a count for each repeating genre within the bookGenres array 
  let genreCount = bookGenres.reduce((count, genre) => 
    {
      if (count[genre])
      {count[genre] += 1}
      else
      {count[genre] = 1}; 
      
      return count;
    }, {}) 

  // use a forIn loop to push output in desired format into empty commGenres array
  for(let key in genreCount){
      commGenres.push({name: key, count: genreCount[key]})
    }    

  // return result of helper function call with commGenres array as arg 
  return _getTop5(commGenres);
}

// write a function that passes in a books arr of book objs and loops the books.borrows.length for each book, then sorts the results from highest to lowest returning only the top 5 
getMostPopularBooks = books => {
// define a varaibale to store result of books.map method
  let popularBooks = books.map((book) =>
  ({
    // access books for book.title & borrows.length for each book in arr
    name: book.title, count: book.borrows.length,
  }), {})
  // return result of helper function call with popularBooks passed as an arg
  return _getTop5(popularBooks);
}

// write a function that passes in a books & authors arr of book & author objs and returns an array of objects containing the following obj structure: { name: ${author.name.first/last}, count: 'total of author's books written borrows.length' }
getMostPopularAuthors = (books, authors) => {

  // define an empty arr to store desired output
  const popAuth = [];
  
  // use a .forEach method to loop through the authors arr
  authors.forEach((author) =>
  {
    // define a variable to store the value of the books.filter method that loops through books arr and returns book objs that have a authorId that = author.id 
    let authBooks = books.filter((book) => book.authorId === author.id);

    // define a variable to store the value of the authBooks.reduce method that loops through the above arr and returns a sum of the sums of borrows.length for each book in authBooks arr
    let totalBorrows = authBooks.reduce((total, book) => {
      return total += book.borrows.length
    }, 0);

    // push output in desired format using template literals to store values of each author output 
    popAuth.push({name: `${author.name.first} ${author.name.last}`, count: totalBorrows})
  })
    // return the result of helper function call with popAuth arr as arg
    return _getTop5(popAuth);
  }

 
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};