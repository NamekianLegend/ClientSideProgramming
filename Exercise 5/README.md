Exercise 5 Instructions:

1️⃣ Create a book Object
📌 Define an object book with:

title (String) – e.g., "Life of Pi"
author (String) – e.g., "Yann Martel"
available (Boolean) – initially true

🛠 Add the following methods:

getDetails() → Returns "Title: Life of Pi, Author: Yann Martel"
borrowBook() → Changes available to false if not already borrowed.
returnBook() → Changes available to true if borrowed.

// ✅ TEST: Call these functions and check if they work
console.log(book.getDetails());  
console.log(book.borrowBook());  
console.log(book.borrowBook());  
console.log(book.returnBook());  

2️⃣ Create a librarian Object
📌 Define an object librarian with:

firstName (String) – e.g., "Sarah"
lastName (String) – e.g., "Smith"
shift (String) – initially "morning"

🛠 Add the following methods:

Getter fullName → Returns "Sarah Smith"
Setter shift → Accepts only "morning" or "evening"

// ✅ TEST: Call these functions and check if they work
console.log(librarian.fullName);  
librarian.shift = "night";  
librarian.shift = "evening";  
console.log(librarian.shift);  

3️⃣ Create a library Object
📌 Define an object library with:

books (Array) – Stores book objects 📚
librarian (Object) – Assign the librarian object 🧑‍💼

🛠 Add the following methods:

addBook(newBook) → Adds a book to the books array.
listAvailableBooks() → Returns an array of book titles that are available.

// ✅ TEST: Add books and check available books
library.addBook({ title: "Life of Pi", author: "Yann Martel", available: true });
library.addBook({ title: "Introduction to JavaScript", author: "John Doe", available: false });
library.addBook({ title: "The Catcher in the Rye", author: "J.D. Salinger", available: true });

console.log(library.listAvailableBooks());  
// Expected Output: ["Life of Pi", "The Catcher in the Rye"]


📌 Submission Instructions
1️⃣ Create simple program in librarySystem.js using given parameters.
2️⃣ Test all methods to ensure they work.
3️⃣ Submit your JavaScript file (librarySystem.js) with your test cases and outputs.

