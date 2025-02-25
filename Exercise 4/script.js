let studentName = "Nadia";
let studentAge = "20";
let isEnrolled = true; 

document.write("<h2>Student Info</h2>")
document.write("Name: " + studentName + "<br>"); 
document.write("Age: " + studentAge); 
document.write("Enrolled: " + isEnrolled) 

let ageString = String(studentAge)
document.write("Age Type: " + typeof ageString); 

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let total = Number(num1) + Number(num2); 

document.write("Sum: " + total)

let userAge = prompt("Enter your age");
if (userAge == 18) { 
    document.write("You can vote!"); 
} else if (userAge < 18) { 
    document.write("Sorry, you can't vote."); 
} else {
    document.write("Invalid input. Please enter a number.");
}

for (let i = 1; i < 10; i++) {
    document.write(i)
}

let num = 0;
while (num < 10) {
    num = prompt("Enter a number greater than 10")
}
