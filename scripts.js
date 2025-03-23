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

const newBook = new createBook("Learning to Code", "Halim", "420", "Read");

console.log(newBook.info());

let tester = Object.getPrototypeOf(newBook)
console.log(tester)