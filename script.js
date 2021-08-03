let myLibrary = [];
const booksContainer = document.querySelector('.bookscontainer');
const addBookButton = document.querySelector('.addbook');
const form = document.querySelector('#formElem');
const formTitle = document.querySelector('#titlef');
const formAuthor = document.querySelector('#authorf');
const formPages = document.querySelector('#pagesf');
const formRead = document.querySelector('#readf');


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title, author, pages, read){
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.dataset.num = myLibrary.length-1;
    booksContainer.appendChild(bookDiv);
    addBookTitle(title);
    addBookAuthor(author);
    addBookPages(pages);
    addBookRead(read);
    addDeleteButton();
}

function addBookTitle(title){
    const eachBookContainer = document.querySelectorAll('.book')
    let booksArray = Array.from(eachBookContainer)
    
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    booksArray[booksArray.length-1].appendChild(titleDiv);
    titleDiv.textContent = `Title: ${title}`
}

function addBookAuthor(author){
    const eachBookContainer = document.querySelectorAll('.book')
    let booksArray = Array.from(eachBookContainer)

    let authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    booksArray[booksArray.length-1].appendChild(authorDiv);
    authorDiv.textContent = `Author: ${author}`
}

function addBookPages(pages){
    const eachBookContainer = document.querySelectorAll('.book');
    let booksArray = Array.from(eachBookContainer);
    
    let pagesDiv = document.createElement('div');
    pagesDiv.classList.add('pages');
    booksArray[booksArray.length-1].appendChild(pagesDiv);
    pagesDiv.textContent = `Pages: ${pages}`
}

function addBookRead(){
    const eachBookContainer = document.querySelectorAll('.book');
    let booksArray = Array.from(eachBookContainer);

    let readDiv = document.createElement('div');
    readDiv.classList.add('read');
    booksArray[booksArray.length-1].appendChild(readDiv);
    
    readDiv.textContent = 'Read:';
    const readContainer = document.querySelectorAll('.read');
    let readArray = Array.from(readContainer);
    let readBox = document.createElement('input');
    readBox.type = 'checkbox';
    readArray[readArray.length-1].appendChild(readBox);
    readBox.checked = formRead.checked;
}

function addBookToLibrary(title, author, pages, read){
    let bookAdd = new Book(title, author, pages, read);
    myLibrary.push(bookAdd);
    addBook(title, author, pages, read)
}

function addDeleteButton(){
    const eachBookContainer = document.querySelectorAll('.book');
    let booksArray = Array.from(eachBookContainer);

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('remove-button');
    deleteButton.textContent = 'Delete'
    booksArray[booksArray.length-1].appendChild(deleteButton);
}

addBookButton.addEventListener('click', () => {
    addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, formRead.checked);
    const delButtons = document.querySelectorAll('.remove-button');
    delButtons.forEach(delButton => {
        delButton.addEventListener('click', () => {
            console.log(delButtons)
    }) })
})


//create remove function (redefining data attribute of the remaining divs)
//change "read" to true/false in array when user clicks it
//finish design
//add localStorage (?)
//add filters (?)
//add book stats (?)