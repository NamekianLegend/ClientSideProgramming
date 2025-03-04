// Create a librarySystem that allows you to check in, check out, and search for books in a library.
// Part 1: Create a book object. Create 3 functions: getDetails, borrowBook, returnBook. Call each function.
let book = {
    title: 'The Martian',
    author: 'Andy Weir',
    available: true
};

function getDetails(book) {
    return `"${book.title}" authored by ${book.author}.`;
};

function borrowBook(book) {
    if (book.available) {
        book.available = false
        return 'You have borrowed the book successfully!';
    } else {
        return 'Sorry, the book is not available...';
    }
};

function returnBook(book) {
    if (!book.available) {
        book.available = true
        return 'You have returned the book successfully!';
    } else {
        return 'You have already returned the book...';
    }
};

console.log("Part 1: Creating a book object and calling functions...");
console.log("===============================================");
console.log("The book is, " + getDetails(book));
console.log(borrowBook(book));
console.log(borrowBook(book));
console.log(returnBook(book));
console.log(returnBook(book));

// Part 2: Create a librarian object. Create 2 functions: Getter for fullName of librarian, setter shiftHours for librarian. Call each function.
let librarian = {
    firstName: 'Neil',
    lastName: 'Armstrong',
    shift: 'morning'
};

function getFullName(librarian) {
    return `${librarian.firstName} ${librarian.lastName}`;
};

function setShiftHours(newShift) {
    if (newShift === "morning" || newShift === "evening") {
        librarian.shift = newShift;
        return `Shift hours updated to ${librarian.shift}.`;
    } else {
        return 'Invalid shift hours entered... Please enter either "morning" or "evening".';
    }
};

function getShiftHours(librarian) {
    return `Shift hours are ${librarian.shift}.`;
};

console.log("\nPart 2: Creating a librarian object and calling functions...");
console.log("===============================================");
console.log("The librarian is, " + getFullName(librarian) + "!");
console.log(setShiftHours("morning"));
console.log(getShiftHours(librarian));
console.log(setShiftHours("evening"));
console.log(getShiftHours(librarian));
console.log(setShiftHours("night"));
console.log(getShiftHours(librarian));

// Part 3: Create a library object. Define a books array and a librarian object. Create 3 functions: addBook, listAvailableBooks. Call each function.
let library = {
    books: [],
    librarian: librarian,
    addBook: function(book) {
        this.books.push(book);
        return `${book.title} has been added to the library!`;
    },
    listAvailableBooks: function() {
        let availableBooks = this.books.filter(book => book.available);
        return availableBooks.map(book => book.title);
    }
};

library.addBook({ title: 'The Hobbit', author: 'J.R.R. Tolkien', available: true });
library.addBook({ title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien', available: false });
library.addBook({ title: 'The Two Towers', author: 'J.R.R. Tolkien', available: true });
library.addBook({ title: 'The Return of the King', author: 'J.R.R. Tolkien', available: false });
library.addBook({ title: 'Project Hail Mary', author: 'Andy Weir', available: true });
library.addBook({ title: 'Artemis', author: 'Andy Weir', available: true });

console.log("\nPart 3: Creating a library object and calling functions...");
console.log("===============================================");
console.log("The following books are available: " + library.listAvailableBooks().join(", "));