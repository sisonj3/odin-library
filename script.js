let myLibrary = [];

// Container that holds all book diplays
const bookDisplays = document.querySelector('.books');

// Book Constructor
function Book (title, author, pages, hasRead) {
    this.title = title; // String
    this.author = author; // String
    this.pages = pages; // Number
    this.hasRead = hasRead; // Boolean
}

function addBookToLibrary(book) {
    console.log(Book.prototype.isPrototypeOf(book));

    if(Book.prototype.isPrototypeOf(book)){
        myLibrary.push(book);
    }
}

function displayBook(book) {
    console.log(Book.prototype.isPrototypeOf(book));

    // Dom Elements for creating book display
    let bookDisplay = document.createElement('div');
    let bookTitle = document.createElement('div');
    let bookAuthor = document.createElement('div');
    let bookPages = document.createElement('div');
    let bookRead = document.createElement('div');

    bookDisplay.classList.add('book-display');

    // Set text for title, author, pages, and read
    bookTitle.textContent = 'Title: ' + book.title;
    bookAuthor.textContent = 'Author: ' + book.author;
    bookPages.textContent = 'Page Amount: ' + book.pages;
    bookRead.textContent = 'Has Read? ' + book.hasRead;

    //Insert Elements into document
    bookDisplay.appendChild(bookTitle);
    bookDisplay.appendChild(bookAuthor);
    bookDisplay.appendChild(bookPages);
    bookDisplay.appendChild(bookRead);
    bookDisplays.appendChild(bookDisplay);

}

let potter = new Book('Harry Potter', 'J. K. Rowling', 1000, false);

displayBook(potter);