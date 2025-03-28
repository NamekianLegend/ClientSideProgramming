// Create a librarySystem that allows you to check in, check out, and search for books in a library.
// Part 1: Create a book object. Create 3 functions: getDetails, borrowBook, returnBook. Call each function.
const book = { // Create a book object
    title: 'The Martian', 
    author: 'Andy Weir',
    available: true,

    getDetails(book) { // Create a function to get details of the book
    return `Title: ${book.title}, Author: ${book.author}, Is it available: ${book.available}`; // Return the title and author of the book
    }
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
console.log(book.getDetails(book)); // Call getDetails function
console.log(borrowBook(book)); // Call borrowBook function
console.log(borrowBook(book)); // Call borrowBook function to see the message when the book is not available
console.log(returnBook(book)); // Call returnBook function
console.log(returnBook(book)); // Call returnBook function to see the message when the book is already returned

// Part 2: Create a librarian object. Create 2 functions: Getter for fullName of librarian, setter shiftHours for librarian. Call each function.
const librarian = { // Create a librarian object
    firstName: 'Neil',
    lastName: 'Armstrong',
    _shift: 'morning',
    get fullName() { // Create a getter for the full name of the librarian
        return `${this.firstName} ${this.lastName}`; // Return the full name of the librarian
    },
    get shift() { // Create a getter for the shift hours of the librarian
        return this._shift; // Return the shift hours of the librarian
    },
    set shift(newShift) { // Create a setter for the shift hours of the librarian
        if (newShift === 'morning' || newShift === 'evening') {
        this._shift = newShift; // Set the shift hours of the librarian
    } else {
        return console.log('Invalid shift hours! Please enter "morning" or "evening".'); // Return an error message if the shift hours are invalid
    }
}
};

console.log("\nPart 2: Creating a librarian object and calling functions...");
console.log("===============================================");
console.log(`The librarian's full name is ${librarian.fullName}.`); // Call the getter for fullName
console.log(`The librarian's shift hours are ${librarian.shift}.`); // Call the getter for shift
librarian.shift = 'evening'; // Call the setter for shift
console.log(`The librarian's shift hours are ${librarian.shift}.`); // Call the getter for shift
librarian.shift = 'night'; // Call the setter for shift using an invalid shift
console.log(`The librarian's shift hours are ${librarian.shift}.`); // Call the getter for shift to see if the shift was changed after invalid input was entered


// Part 3: Create a library object. Define a books array and a librarian object. Create 2 functions: addBook, listAvailableBooks. Call each function.
const library = { // Create a library object
    books: [], // Create an empty array to store books
    librarian: librarian, // Add the librarian object to the library
    addBook(book) { // Create a function to add a book to the library
        this.books.push(book); // Add the book to the books array
        return `${book.title} has been added to the library!`; // Return a success message
    },
    listAvailableBooks() { // Create a function to list available books in the library
        return this.books.filter(book => book.available).map(book => book.title); // Filter and return an array of available book titles
    }
};

console.log("\nPart 3: Creating a library object and calling functions...");
console.log("===============================================");

console.log(library.addBook({ title: 'The Hobbit', author: 'J.R.R. Tolkien', available: true })); // Add a book to the library
console.log(library.addBook({ title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien', available: false })); // Add a book to the library
console.log(library.addBook({ title: 'The Two Towers', author: 'J.R.R. Tolkien', available: true })); // Add a book to the library
console.log(library.addBook({ title: 'The Return of the King', author: 'J.R.R. Tolkien', available: false })); // Add a book to the library
console.log(library.addBook({ title: 'Project Hail Mary', author: 'Andy Weir', available: true })); // Add a book to the library
console.log(library.addBook({ title: 'Artemis', author: 'Andy Weir', available: true })); // Add a book to the library


console.log("The following books are available: " + library.listAvailableBooks().join(", ")); // Call listAvailableBooks function
