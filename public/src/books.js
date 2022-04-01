// write a function that takes in an arr of author objs and an input vairable of id and returns the author obj that has an author.id that matches the inputted id 
findAuthorById = (authors, id) => {
  return authors.find(author => author.id === id); 
}

// write a function that takes in an arr of book objs and an input vairable of id and returns the book obj that has a book.id that matches the inputted id 
findBookById = (books, id) => {
  return books.find(book => book.id === id); 
}

// write a function that takes in an arr of book objs and returns an arr split into two categories, one hold book objs with book.borrow.returned = false and the other true 
partitionBooksByBorrowedStatus = (books) => {
// define an empty arr variable to hold result in desired output structure 
  let result = [[],[]];
  
  // use .filter method to loop through books array 

  books.filter((book) => {

    // use an if statement to check if each book.borrow.returned value
    if (book.borrows[0].returned === false){
      // push book to first array if borrow.returned = false 
      result[0].push(book);
    }
    else
    {        
      // push book to second array if borrow.returned = true 
      result[1].push(book);
    }
  });

  // return result arr correctly populated 
  return result;
}

// write a function that takes in a book obj and an accounts arr and returns an object with the account.id matching the first book.borrow.id index 
getBorrowersForBook = (book, accounts) => {
  
  // define an empty array to hold desired output 
  let borrowers = [];

  // use .map method to search through inputted book.borrows arr 
  book.borrows.map(borrow => {
    // for each borrow log, create a new variable findAcc that hold the value of accounts.find that loops through accounts arr and returns the account obj that matches the borrow.id 
      let findAcc = accounts.find(account => account.id === borrow.id);
      // set value of above variable equal to result obj in desired output format 
      findAcc = {...findAcc, returned: borrow.returned};
      // push obj to empty array 
      borrowers.push(findAcc);
    })

  // return borrowers arr with only the first 10 results 
  return borrowers.slice(0, 10);
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
