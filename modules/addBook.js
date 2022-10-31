// function for adding a book
const addBook = (newBook) => {
  // book content
  const content = `<div class="books"><div class="books-info"><p id="title-input">"${newBook.title}"</p><p>&nbsp;by&nbsp;</p>
  <p class="author">${newBook.author}</p></div>
  <button class="remove-btn"> Remove</button>
  </div>`;
  return content;
};

export default addBook;