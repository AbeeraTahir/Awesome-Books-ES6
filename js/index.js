import Books from '../modules/book.js';
import addBook from '../modules/addBook.js';
import removeBooks from '../modules/removeBooks.js';
import { DateTime } from '../modules/luxon.js';

const booksBody = document.getElementById('displayed-books');
const addBooksForm = document.getElementById('add-books');
const addPage = document.getElementById('add-book-section');
const listPage = document.getElementById('all-books-section');
const contactPage = document.getElementById('contact-section');
const addSection = document.getElementById('add-book-form');
const listSection = document.getElementById('book-list');
const contactSection = document.getElementById('contact');

// Displaying the books
window.addEventListener('DOMContentLoaded', () => {
  const books = JSON.parse(localStorage.getItem('books'));
  books.forEach((book) => {
    const content = addBook(book);
    booksBody.insertAdjacentHTML('beforeend', content);
  });
});

// Element target
booksBody.addEventListener('click', (e) => {
  const book = e.target.parentElement;
  removeBooks(book);
  Books.removeBookUI(e.target);
});

// Adding books
addBooksForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const newBook = new Books(titleInput.value, authorInput.value);
  const content = addBook(newBook);
  booksBody.insertAdjacentHTML('beforeend', content);
  Books.pushBook(newBook);
  localStorage.setItem('books', JSON.stringify(Books.booksArr));
  titleInput.value = '';
  authorInput.value = '';
});

// Date Time
document.getElementsByClassName('time')[0].innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

// Displaying add books section on nav item click
addPage.addEventListener('click', () => {
  addSection.classList.replace('hide', 'show');
  listSection.classList.replace('show', 'hide');
  contactSection.classList.replace('show', 'hide');
});

// Displaying books list on nav item click
listPage.addEventListener('click', () => {
  addSection.classList.replace('show', 'hide');
  listSection.classList.replace('hide', 'show');
  contactSection.classList.replace('show', 'hide');
});

// Displaying contact section on nav item click
contactPage.addEventListener('click', () => {
  addSection.classList.replace('show', 'hide');
  listSection.classList.replace('show', 'hide');
  contactSection.classList.replace('hide', 'show');
});
