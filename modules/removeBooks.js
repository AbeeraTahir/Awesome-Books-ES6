// function for removing books from local storage
const removeBooks = (book) => {
  const bookTitle = book.querySelector('#title-input').innerText;
  const b = JSON.parse(localStorage.getItem('books'));
  const filterIndex = b.findIndex((x) => x.title === bookTitle);
  b.splice(filterIndex, 1);
  localStorage.setItem('books', JSON.stringify(b));
};

export default removeBooks;