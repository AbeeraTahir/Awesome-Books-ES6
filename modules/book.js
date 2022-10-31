class Books {
  // method for setting the inicial array
  static booksArr = [];

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // method for pushing the new book into the array
  static pushBook = (newBook) => Books.booksArr.push(newBook);

  // method for removing the book from the html
  static removeBookUI = (element) => element.parentElement.remove();
}

export default Books;