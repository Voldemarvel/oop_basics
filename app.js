ui = new UI();
ls = new LS();

const form = document.querySelector('form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const isbnInput = document.querySelector('#isbn')
const bookData = document.querySelector('tbody');
bookData.addEventListener('click', delBook);
document.addEventListener('DOMContentLoaded', getBooks);
form.addEventListener('submit', addBook);

function addBook(e) {
    const book = new Book(titleInput.value, authorInput.value, isbnInput.value);
    ui.addBook(book);
    ls.addBook(book);
    e.preventDefault();
}

function delBook(e) {
    let book = e.target.parentElement.parentElement;
    ui.delBook(book);
    book = book.firstChild.textContent;
    ls.delBook(book);
}

function getBooks(e) {
    books = ls.getData('books');
    ui.getBooks(books);
}