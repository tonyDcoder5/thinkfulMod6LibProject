// write a function that takes in an arr of account objs and an input vairable of id and returns the account obj that has an account.id that matches the inputted id 
findAccountById = (accounts, id) => {
  return accounts.find(account => account.id === id);
}

//write a function that takes in an accounts array and returns the array sorted by the accounts.name.last value 
sortAccountsByLastName = accounts => {
  
  // use the .sort method to loop through accounts arr and compare two acc objs at a time, sorting by the value of the first letter in lower case 
  return accounts.sort((accA, accB) => 
  accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1)
  }

// write a function that takes in a specific account obj and a books arr and returns the total number of book objs that has a book.borrows.id matching the account id 
getTotalNumberOfBorrows = (account, books) => {

  // define a variable to hold the result of the books.filter method
  let filteredResults = books.filter((book) => {
    // return the result of book.borrows.some that loops through the borrows arr of each book 
    return book.borrows.some((borrow)=> { 
      // return the borrow obj that has a borrow.id = account.id 
      return borrow.id === account.id})});

  // return the .length result of the above arr 
  return filteredResults.length; 
}

// write a function that takes in a specific account obj, a books arr, and an authors arr and returns an arr of book objs (with author objs added in) that has a book.borrows.id in the first index that matches the input account.id 
getBooksPossessedByAccount = (account, books, authors) => 
{  

  // define an empty arr to hold desired result 
  const accBooks = [];

  // use .map method to loop through the books arr and check each book obj 
  books.map(book =>
    {
      // use if statement to check if current book.borrows[0].id includes the inputted account.id AND if the book.borrows[0].returned value is set to false 
      if(book.borrows[0].id.includes(account.id) && !book.borrows[0].returned) {

        // push book into empty result arr
        accBooks.push(book);
      }  
    })    

    // use .forEach method to look at each book in results arr 
    accBooks.forEach(book =>
    {
      // declare a new variable to store the value of authors.find method that loops through authors arr and returns the author obj with an author.id that matches the book.authorId in results arr
      let findAuth = authors.find(author => author.id === book.authorId);

      // creates a new key value pair within book obj holding the value of above variable 
      book['author'] = findAuth;
    });

  // return the populated result arr 
  return accBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
