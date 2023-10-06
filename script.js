let myLibrary = [];

// Container that holds all book diplays
const bookDisplays = document.querySelector('.books');

// New Book Button
const newBookBtn = document.querySelector('.new-book');
newBookBtn.addEventListener('click', displayForm);

// Add button
const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', addBookToLibrary);

// Form and overlay
const form = document.querySelector('.form-display');
const overlay = document.querySelector('.overlay');

// Form Elements
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#hasRead');

// Book Constructor
function Book (title, author, pages, hasRead) {
    this.title = title; // String
    this.author = author; // String
    this.pages = pages; // Number
    this.hasRead = hasRead; // Boolean
}

function addBookToLibrary() {
    form.classList.toggle('hidden');
    overlay.classList.toggle('hidden');

    let book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);

    myLibrary.push(book);

    console.log(myLibrary);
    displayLibrary();
}

function displayLibrary() {

    while (bookDisplays.firstChild){
        bookDisplays.removeChild(bookDisplays.firstChild);
    }

    for (let i = 0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i], i)
    }
}

function displayBook(book, index) {
    console.log(Book.prototype.isPrototypeOf(book));

    // Dom Elements for creating book display
    let del = document.createElement('button');
    let bookDisplay = document.createElement('div');
    let bookTitle = document.createElement('div');
    let bookAuthor = document.createElement('div');
    let bookPages = document.createElement('div');
    let bookRead = document.createElement('button');

    bookDisplay.classList.add('book-display');
    del.classList.add('delete');

    del.textContent = 'Delete';

    // Add index attribute to delete button
    del.dataset.index = index;

    // Add event listener to delete button
    del.addEventListener('click', deleteBook);

    // Add event listener to bookRead
    bookRead.addEventListener('click', () => {
        if(book.hasRead){
            book.hasRead = false;
        } else {
            book.hasRead = true;
        }

        checkIfRead(book, bookRead);
    });

    // Set text for title, author, pages, and read
    bookTitle.textContent = 'Title: ' + book.title;
    bookAuthor.textContent = 'Author: ' + book.author;
    bookPages.textContent = 'Page Amount: ' + book.pages;

    checkIfRead(book, bookRead);

    //Insert Elements into document
    bookDisplay.appendChild(bookTitle);
    bookDisplay.appendChild(bookAuthor);
    bookDisplay.appendChild(bookPages);
    bookDisplay.appendChild(bookRead);
    bookDisplay.appendChild(del);
    bookDisplays.appendChild(bookDisplay);

}

function displayForm(){
    form.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

function deleteBook(e){
    let index = e.srcElement.dataset.index;

    myLibrary.splice(index, 1);

    displayLibrary();
}

function checkIfRead(book, bookRead){
    if(book.hasRead){
        bookRead.textContent = 'Read!';
        bookRead.classList.add('read');
        bookRead.classList.remove('not-read');
    } else {
        bookRead.textContent = 'Not Read!';
        bookRead.classList.add('not-read');
        bookRead.classList.remove('read');
    }
}

// let potter = new Book('Harry Potter', 'J. K. Rowling', 1000, false);

// displayBook(potter);