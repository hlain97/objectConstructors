let bookshelf = [];
let button = document.getElementById("btn");
let addBtn = document.getElementById("add-btn");
let submit = document.getElementById("sbt");

let bookTitle = document.getElementById("bookTitle");
let bookAuthor = document.getElementById("bookAuthor");
let bookPages =document.getElementById("bookPages");
let bookStatus = document.getElementById("bookStatus");

let shelf = document.getElementById("shelf");

let subForm = document.getElementById("subForm");
let inputTitle = document.getElementById("inputTitle");
let inputAuthor = document.getElementById("inputAuthor");
let inputPages = document.getElementById("inputPages");
let inputStatus = document.getElementById("inputStatus");

let addShelf = function(books){
    for(book of books){

        let newTr = document.createElement("tr")
        let newTitle = document.createElement("td");
        let newAuthor = document.createElement("td");
        let newPages = document.createElement("td");
        let newStatus = document.createElement("td");

        newTitle.textContent = book.title;
        newAuthor.textContent = book.author;
        newPages.textContent = book.pages;
        newStatus.textContent = book.read;
        newTr.appendChild(newTitle);
        newTr.appendChild(newAuthor);
        newTr.appendChild(newPages);
        newTr.appendChild(newStatus);
        shelf.appendChild(newTr);
        bookshelf = [];
    }
};

let addBook = function(title, author, pages, read){
    let newBook = new createBook(title, author, pages, read);
    bookshelf.push(newBook);
};

let newBook = function(event){
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let read =  inputStatus.value;
    bookshelf.push(addBook(title, author, pages, read));
    subForm.reset();
    event.preventDefault();
}

// addBook('Learning Programming', 'DonProgrammer', '420', 'Read');
// addBook('Doing Dr0gs', 'Albert Einstein', '359', 'Read');
// addBook('ROFLCOPTER', 'E. FTW', '69', 'Read');


function createBook(title, author, pages, read){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    };

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = crypto.randomUUID();
    this.info = () => `The Title is ${newBook.title}, written by ${newBook.author}, the number of pages is ${newBook.pages}, and the status is ${newBook.read}`;
};

button.addEventListener("click", (e) => addShelf(bookshelf));
addBtn.addEventListener("click", newBook);