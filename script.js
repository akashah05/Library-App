const addBook = document.querySelector(".add");
const bookList = document.querySelector(".book-list");
const bookDialog = document.querySelector("#bookDialog");
const bookForm = document.querySelector("#bookForm");
const cancelBtn = document.querySelector("#cancelBtn")

const myLibrary = [];

function Book(title, author, totalPg, isRead) {
    this.title = title;
    this.author = author;
    this.totalPg = totalPg;
    this.isRead = isRead;
}

Book.prototype.info = function () {
    return `
    <span>Book Title: <h3>${this.title}</h3></span>
    <span>Book Author: <h4>${this.author}</h4></span>
    <span>Pages: <h4>${this.totalPg}</h4></span>
    <p>--${this.isRead ? "Readed" : "Not Readed"}--</p>
    <button class="delete-btn">Delete</button>
    `;
};

function displayBook(book) {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-box");
    bookItem.innerHTML = book.info();
    bookList.appendChild(bookItem);

    myLibrary.push(book);

    const deleteBtn = bookItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        bookItem.remove();

        const index = myLibrary.indexOf(book);
        if (index !== -1) {
            myLibrary.splice(index, 1);
        }
    });

};

addBook.addEventListener("click", () => {
    bookDialog.showModal();
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const totalPg = document.querySelector("#pages").value;
    const isRead = document.querySelector("#isRead").value;

    const newBook = new Book(title, author, totalPg, isRead);

    displayBook(newBook);

    bookDialog.close();

    bookForm.reset();
});

cancelBtn.addEventListener("click", () => {
    bookDialog.close();
});

const preListBook = new Book("The Alchemist", "Paulo Coelho", 208, true);
const preListBook2 = new Book("To Kill a Mockingbird", "Harper Lee", 336, false);
const preListBook3 = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 224, false);
displayBook(preListBook);
displayBook(preListBook2);
displayBook(preListBook3);