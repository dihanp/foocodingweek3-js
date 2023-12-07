let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log("myString");
myString.length;
myString = myString.replaceAll(",", " ");
console.log(myString);

//1.1 Add the string to your file and log it.
//1.2 Log the length of myString.
/*1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
1.4 Log myString to see if you succeeded*/

Arrays.
//Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");

//2.2 Log your new array!
console.log("favoriteAnimals ");

/*2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.*/
favoriteAnimals[0];
favoriteAnimals[2];
var favoriteAnimals=["blowfish", "capricorn", "giraffe"];
favoriteAnimals.splise(0,1"meerkat");

/*2.4 Write a console.log statement that explains in words you think the new value of the array is.
2.5 Log your new array!
2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).*/

let favoriteAnimals = ["blowfish","meerkat", "capricorn", "giraffe"];
Console,log(
`new Array has added to the favoriteAnimals{blowfish","meerkat", "capricorn", "giraffe"}`);
console.log("favoriteAnimals");
favoriteAnimals.length('The array has a length of';
                       
 /*2.7 Jason does not like 'giraffe', delete this animal from the array.
2.8 Again log your new array*/
  favoriteAnimals.pop();
  console.log("favoriteAnimals");
  console.log(popped);

//Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
let index = favoriteAnimals.indexOf("meerkat");
if (index !== -1) {
  // Use splice to remove the element at the found index
  favoriteAnimals.splice(index, 1);
}

console.log("Updated array:", favoriteAnimals);

//Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).


if (index !== -1) {
  console.log("The item you are looking for is at index:", index);
  
  // Use splice to remove the element at the found index
  
  favoriteAnimals.splice(index, 1);
} else {
  console.log("The item you are looking for is not in the array.");
}

console.log("Updated array:", favoriteAnimals);
//Updated array: ["blowfish", "meerkat", "capricorn", "giraffe"]



//More JavaScript 
//Create a function that takes 3 arguments and returns the sum of the these arguments.

function sumThreeNumbers(x, y, z) {
  return x + y + z;
}

let result = sumThreeNumbers(2, 4, 6);
console.log("Sum:", result);
                       
                       
//Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
  console.log("x " + color + " car");
}
console.log(colorCar("red"));


//Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

var car={brand! "Toyota", model! "Camry",  year! 2022,color! "blue"};
function printObjectProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ": " + obj[key]);
    }
  }
}

//Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
  if (code === 1) {
    console.log("A " + color + " car");
  } else if (code === 2) {
    console.log("A " + color + " motorbike");
  } else {
    console.log("Unknown vehicle type");
  }
}

//Can you write the following without the if statement, but with just as a single line with console.log(...);?

console.log(3 === 3 ? "yes" : "no");

//Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
  const vehicleType = code === 1 ? "car" : code === 2 ? "motorbike" : "unknown";
  const condition = age > 0 ? "used" : "new";

  console.log("A " + color + " " + condition + " " + vehicleType);
}

vehicle("blue", 1, 5);

//Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

var list of vehicles=(""motorbike", "caravan", "bike", or more.");
console.log=("list of vehicles");

//How do you get the third element from that list?

var thirdElement = vehicles[2];
console.log("Third element:", thirdElement);


//Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function vehicles(color, code, age) {
let newCode;
for (let i = 0; i < listOfVehicles.length; i++) {
newCode = listOfVehicles[code];
}
if (typeof newCode === "undefined") {
console.log(
`please enter code number between 0 and ${listOfVehicles.length - 1}`
);
} else if (age > 1) {
console.log(`a ${color} used ${newCode}`);
} else if (age >= 0 && age <= 1) {
console.log(`a ${color} new ${newCode}`);
}
}


vehicles("blue", 4, 1);
vehicles("green", 3, 2);
vehicles("yellow", 1, 5);
vehicles("purple", 5, 4);

//Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

let vehicles = ["motorbike", "caravan", "bike", "car"];

function createAdvertisement() {
  let advertisement = "Amazing Joe's Garage, we service ";
  
  for (let i = 0; i < vehicles.length; i++) {
    advertisement += vehicles[i];
    
    if (i < vehicles.length - 1) {
      advertisement += ", ";
    } else {
      advertisement += ".";
    }
  }

  console.log(advertisement);
}


//What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?


console.log(
`could be add the more items for the elment and can be use the same .`
);


//Create an empty object.


let emptyObject = {};
console.log{"emptyObject"};

//Create an object that contains the teachers that you have had so far for the different modules.

let teachers={
  "html":" Mr sahin",
  "java":"Mrs Tommy",
  "java"cript":"Mrs nille",
  "c++":"Mr dan"
};
console.log(teachers);

//Add a property to the object you just created that contains the languages that they have taught you.

let teachers = {
  "html": {
    name: "Mr sahin"",
    languagesTaught: ["English"]
  },
  "java": {
    name: "Mrs Tommy",
    languagesTaught: ["English"]
  },
  "java"cript": {
    name: "Mrs nille",
    languagesTaught: ["English"]
  },
  "c++": {
    name: "Mr dan",
    languagesTaught: ["swedish"]
  }
};




//Write some code to test two arrays for equality using == and ===. Test the following:


let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;


console.log("Using ==:");
console.log("x == y:", x == y); 
console.log("y == z:", y == z); 
console.log("x == z:", x == z); 


console.log("\nUsing ===:");
console.log("x === y:", x === y); 
console.log("y === z:", y === z); 
console.log("x === z:", x === z); 


//What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

//Don't cheat! Seriously - try it first.



x == y: This is false because == compares the objects for equality, and x and y are two different arrays, even though their contents are the same.

z == y: This is true because z is assigned the reference to the same array as y. Both z and y point to the same object.

z == x: This is false for the same reason as x == y. z and x are two different arrays.

x === y: This is false for the same reason as x == y. === checks for both value and type equality.

z === y: This is true because z and y reference the exact same array object.

z === x: This is false for the same reason as x === y. z and x are two different arrays.

//Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
//Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

o2.foo = "modified";

console.log("o2:", o2); 
console.log("o3:", o3); 

// Changing o1
o1.foo = "changed";

console.log("o1:", o1); 
console.log("o3:", o3); 


//What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;

typeof bar returns the string "number" because bar is initially assigned the value 42, which is a number.

Then, typeof "number" returns the string "string" because the typeof operator applied to the string "number" returns the type of the string itself.

So, typeof typeof bar; essentially means "get the type of the type of bar," which results in the final output being the string "string".



