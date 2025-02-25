/*
Name: Josh Leslie
Student ID: W0228010
Course: Client-side Programming
Exercise 3: JavaScript Operators
LMD: 2025-01-29
*/



//Part 1: Arithmetic Operators

let num1 = 10; // variable declaration 
let num2 = 2; // variable declaration
console.log("First number: ", num1); // print first variable
console.log("Second number: ", num2); // print second variable

console.log("Addition result of two variables: ", num1 + num2); // addition of two variables
console.log("Subtraction result of two variables: ", num1 - num2); // subtraction of two variables
console.log("Multiplication result of two variables: ", num1 * num2); // multiplication of two variables
console.log("Division result of two variables: ", num1 / num2); // division of two variables
console.log("Remainder result of modulus two variables: ", num1 % num2); // remainder of two variables

//Part 2: Relational Operators

console.log("Is",num1, "greater than", num2, "? : ", num1 > num2); // greater than
console.log("Is",num1, "less than", num2, "? : ", num1 < num2); // less than
console.log("Is",num1, "greater than or equal to", num2, "? : ", num1 >= num2); // greater than or equal to
console.log("Is",num1, "less than or equal to", num2, "? : ", num1 <= num2); // less than or equal to
console.log("Is",num1, "equal to", num2, "? : ", num1 === num2); // equal to
console.log("Is",num1, "not equal to", num2, "? : ", num1 != num2); // not equal to

//Part 3: Logical Operators

let isSunny = false; // variable declaration
let isWeekend = false; // variable declaration
console.log("First variable: Is it sunny? ", isSunny); // print variable
console.log("Second variable: Is it the weekend? ", isWeekend); // print variable

console.log("Is it sunny AND the weekend? : ", isSunny && isWeekend); // AND operator
console.log("Is it sunny OR the weekend? : ", isSunny || isWeekend); // OR operator

//Part 4: Assignment Operators

let score = 25; // variable declaration
console.log("Current score: ", score); // print variable

console.log("Add 5 to the score: ", score += 5); // addition assignment
console.log("Subtract 5 from the score: ", score -= 5); // subtraction assignment
console.log("Multiply the score by 5: ", score *= 5); // multiplication assignment
console.log("Divide the score by 5: ", score /= 5); // division assignment, extra step for fun
console.log("Modulus the score by 5: ", score %= 5); // modulus assignment, extra step for fun

//Part 5: User Interaction

let userName = prompt("What is your name?", "Ex: John Doe"); // prompt user for input
let userAge = prompt("What is your age?", "Ex: 28"); // prompt user for input

console.log("User name: ", userName); // print user name
console.log("User age: ", userAge); // print user age

//Extra step: alert user with input, just for fun
alert("Hello " + userName + "! You are " + userAge + " years old."); // alert the user with their input

