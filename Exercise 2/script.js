// Part 1 - Variables and Constants
const userAge = 31; //crerating constant variable for user age
let userHeight = 182; //creating variable for user height

console.log("Proof of part 1 being done: "); //printing the proof of part 1 being done
console.log("User age is: ",userAge); //printing the user age
console.log("User height is (in cm): ",userHeight); //printing the user height

// Part 2 - Arrays
let petNames = ["Logan", "Charlotte", "Sophie"]; //creating an array of pet names
console.log("Proof of part 2 being done: "); //printing the proof of part 2 being done
console.log("Pet names array: ",petNames); //printing the pet names array

petNames.push("Lucy"); //adding a new pet name to the array
console.log("Pet names array with new pet name: ",petNames); //printing the pet names array with the new pet name
petNames.pop(); //removing the last pet name from the array
console.log("Pet names array with last pet name removed: ",petNames); //printing the pet names array with the last pet name removed
petNames.reverse(); //reversing the order of the pet names in the array
console.log("Pet names array with order reversed: ",petNames); //printing the pet names array with the order reversed


// Part 3 - Objects
let car = { //creating an object for a car
    make: "Honda", //property for object = car make
    model: "Civic", //property for object = car model
    year: 2019, //property for object = car year
};
console.log("Proof of part 3 being done: "); //printing the proof of part 3 being done
console.log("Car object: ",car); //printing the car object

car.year = 2020; //changing the value of the year property in the car object
console.log("Car object with year changed: ",car); //printing the car object with the year changed

car.color = "Black";//adding a new property to the car object
console.log("Car object with new property: ",car); //printing the car object with the new property


// Part 4 - Type Operations
console.log("Proof of part 4 being done: "); //printing the proof of part 4 being done using an array
console.log("First element of pet names array: ",petNames.slice(0,1)); //printing the first element of the pet names array
console.log("Index of Charlotte in pet names array: ",petNames.indexOf("Charlotte")); //printing the index of the pet name "Charlotte" in the array
console.log("Length of pet names array: ",petNames.length); //printing the length of the pet names array

let planetName = "Jupiter"; //creating a string variable for the name of a planet
console.log(planetName); //printing the name of the planet
console.log("First character of planet name: ",planetName.slice(0,1)); //printing the first character of the planet name
console.log("Last character of planet name: ",planetName.slice(-1)); //printing the last character of the planet name
console.log("Index of 'p' in planet name: ",planetName.indexOf("p")); //printing the index of the character "p" in the planet name
console.log("Length of planet name: ",planetName.length); //printing the length of the planet name


