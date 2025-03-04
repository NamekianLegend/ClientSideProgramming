// Create a librarySystem that allows you to check in, check out, and search for books in a library.
// Part 1: Create a book object. Create 3 functions: getDetails, borrowBook, returnBook. Call each function.
let book = { // Create a book object
    title: 'The Martian', 
    author: 'Andy Weir',
    available: true
};

function getDetails(book) { // Create a function to get details of the book
    return `"${book.title}" authored by ${book.author}.`; // Return the title and author of the book
};

function borrowBook(book) { // Create a function to borrow the book
    if (book.available) { // Check if the book is available
        book.available = false // Set the book to not available
        return 'You have borrowed the book successfully!'; 
    } else { // If the book is not available
        return 'Sorry, the book is not available...';
    }
};

function returnBook(book) { // Create a function to return the book
    if (!book.available) { // Check if the book is not available
        book.available = true // Set the book to available
        return 'You have returned the book successfully!';
    } else { // If the book is already available
        return 'You have already returned the book...';
    }
};

console.log("Part 1: Creating a book object and calling functions...");
console.log("===============================================");
console.log("The book is, " + getDetails(book)); // Call getDetails function
console.log(borrowBook(book)); // Call borrowBook function
console.log(borrowBook(book)); // Call borrowBook function
console.log(returnBook(book)); // Call returnBook function
console.log(returnBook(book)); // Call returnBook function

// Part 2: Create a librarian object. Create 2 functions: Getter for fullName of librarian, setter shiftHours for librarian. Call each function.
let librarian = { // Create a librarian object
    firstName: 'Neil',
    lastName: 'Armstrong',
    shift: 'morning'
};

function getFullName(librarian) { // Create a function to get the full name of the librarian
    return `${librarian.firstName} ${librarian.lastName}`; // Return the full name of the librarian
};

function setShiftHours(newShift) { // Create a function to set the shift hours of the librarian
    if (newShift === "morning" || newShift === "evening") { // Check if the shift hours are valid
        librarian.shift = newShift; // Set the shift hours
        return `Shift hours updated to ${librarian.shift}.`; // Return the updated shift hours
    } else { // If the shift hours are invalid
        return 'Invalid shift hours entered... Please enter either "morning" or "evening".'; // Return an error message
    }
};

function getShiftHours(librarian) { // Create a function to get the shift hours of the librarian
    return `Shift hours are ${librarian.shift}.`; // Return the shift hours of the librarian
};

console.log("\nPart 2: Creating a librarian object and calling functions...");
console.log("===============================================");
console.log("The librarian is, " + getFullName(librarian) + "!"); // Call getFullName function
console.log(setShiftHours("morning")); // Call setShiftHours function
console.log(getShiftHours(librarian)); // Call getShiftHours function
console.log(setShiftHours("evening")); // Call setShiftHours function
console.log(getShiftHours(librarian)); // Call getShiftHours function
console.log(setShiftHours("night")); // Call setShiftHours function to test invalid input
console.log(getShiftHours(librarian)); // Call getShiftHours function to test invalid input

// Part 3: Create a library object. Define a books array and a librarian object. Create 3 functions: addBook, listAvailableBooks. Call each function.
let library = { // Create a library object
    books: [], // Create an empty array to store books
    librarian: librarian, // Add the librarian object to the library
    addBook: function(book) { // Create a function to add a book to the library
        this.books.push(book); // Add the book to the books array
        return `${book.title} has been added to the library!`; // Return a success message
    },
    listAvailableBooks: function() { // Create a function to list available books in the library
        let availableBooks = this.books.filter(book => book.available); // Filter the books array to get available books
        return availableBooks.map(book => book.title); // Return an array of available book titles
    }
};

library.addBook({ title: 'The Hobbit', author: 'J.R.R. Tolkien', available: true }); // Add a book to the library
library.addBook({ title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien', available: false }); // Add a book to the library
library.addBook({ title: 'The Two Towers', author: 'J.R.R. Tolkien', available: true }); // Add a book to the library
library.addBook({ title: 'The Return of the King', author: 'J.R.R. Tolkien', available: false }); // Add a book to the library
library.addBook({ title: 'Project Hail Mary', author: 'Andy Weir', available: true }); // Add a book to the library
library.addBook({ title: 'Artemis', author: 'Andy Weir', available: true }); // Add a book to the library

console.log("\nPart 3: Creating a library object and calling functions...");
console.log("===============================================");
console.log("The following books are available: " + library.listAvailableBooks().join(", ")); // Call listAvailableBooks function