let button = document.getElementById("btn");

button.addEventListener("click", (e) => console.table(bookshelf))
function createBook(title, author, pages, read){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    };

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = () => `The Title is ${newBook.title}, written by ${newBook.author}, the number of pages is ${newBook.pages}, and the status is ${newBook.read}`;
}

let bookshelf = [];

let addBook = function(title, author, pages, read){
    let newBook = new createBook(title, author, pages, read);
    bookshelf.push(newBook);
};

addBook('Learnin Programming', 'Halim', '420', 'Read');
addBook('Doing Dr0gs', 'Halim', '420', 'Read');
addBook('ROFLCOPTER', 'Halim', '420', 'Read');

