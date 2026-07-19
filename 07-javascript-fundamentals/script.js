//         //alert("Hello! Welcome to JavaScript Fundamentals.");
// let fullName = "Samuel Boahen";
// let profession = "frontend Engineer";
// let yearLearning = 1;
// let enjoysCoding = true;
// let isLearningJS = true;

// console.log("--- Developer Info ---");
// console.log("fullName:", fullName);
// console.log("profession:", profession);
// console.log("yearLearning:", yearLearning);
// console.log("enjoysCoding:", enjoysCoding);
// console.log("isLearningJS:", isLearningJS);

// let productName = "Notebooks";
// let price = 25;
// let quantity = 4;

// let totalCost = price * quantity;
// console.log("--- Product Info ---");
// console.log("productName:", productName);
// console.log("price:", price);
// console.log("quantity:", quantity);
// console.log("totalCost:", totalCost);

// let customerName = "Samuel Boahen";
// console.log("customerName:", customerName);
// let message = customerName + " bought " + quantity + " " + productName + " for GHS" + totalCost;
// console.log(message);

/*let apples = 5;

let oranges = 3;

let fruits = apples + oranges;


apples = 10;

console.log(fruits);*/

/*let studentName = "Samuel"
let age = 22;
let minimumAge = 18;

console.log("---Student Eligibility Checker---")

console.log(studentName)
console.log("The student is older than the minimum age: " +( age > minimumAge));

console.log("The student is older than or equal to the minimum age: " + (age >= minimumAge));

console.log("The student is less than the minimum age: " + (age < minimumAge));

console.log("The student is exactly the minimum age: " + (age === minimumAge));

console.log("The student is not equal to the minimum age: "+ (age != minimumAge));*/


// let username = "Samuel";
// let password = "12345";

// if (password==="12345") {
//     console.log("Welcome "+ username)
// }


/*let studentName = "Samuel";
let score = 72;

if (score >= 50) {
    console.log (studentName + " passed the exams.")
}*/


/*let name = "Kwasi";
let age = 17;

if (age>=18){
    console.log(name + " is eligible to drive.");
} else {
    console.log(name + " is not eligible to drive.");
    }


    let balance = 500;
    let withdrawal = 700;

    if (balance >=withdrawal) {
        console.log("withdrawal approved")
    } else {
        console.log ("Insufficient funds")
    }

let age = 14;

if (age < 13) {
    console.log("Child Ticket");
} else if (age < 18) {
    console.log("Teen Ticket");
} else {
    console.log("Adult Ticket");
}

let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else {
    console.log("Below Grade B");
}*/


//*let purchaseAmount = 150;

/*if (purchaseAmount>=1000) {
    console.log("20% Discount");
} else if(purchaseAmount >= 500){
    console.log("10% Discount")
} else {
    console.log("No Discount")
}*/


//first Mini Project

/*let username = "Samuel";
let password = "frontend123";

if (username === "Samuel" && password === "frontend123") {
    console.log ("login successful");

} else {
    console.log("invalid credentials")
}


 //Second Mini Project

let isAdmin = false;
let isEditor = false;

if (isAdmin === false || isEditor === true) {
    console.log("Dashboard Access");
} else {
    console.log("Access Denied");
}*/


// Third Mini Project

/*let isLoggedIn = true;

if (!isLoggedIn) {
    console.log("Please log in.");
} 

// 4th project

let hasPassport = true;
let hasVisa = false;
let isCitizen = false;

if ((hasPassport && hasVisa) || isCitizen) {
    console.log("Travel Allowed");
} else {
    console.log("Travel Not Allowed");
}*/


// Creating and Calling a Function
//Mini Project 1

/*function sayHello(){
    console.log("Hello World");
}

sayHello();
sayHello();
sayHello();

function showMenu(){
    console.log("1. Home");
    console.log("2. About");
    console.log("3. Contact");

}

showMenu();
showMenu();*/

/*function introduce(name){
    console.log("My name is " + name);
}

introduce("Sammy");
introduce("Kwabena");
introduce("Ali");



function welcome(user) {
    console.log("Welcome " + user);
}

welcome("Samuel");*/


/*function introduce(name, age) {
    console.log("My name is " + name);
    console.log("I am " + age + " years old.");
}

introduce("Samuel", 25);


function createProfile(name, job){
    console.log(name + " is a " + job)
}

createProfile("Samuel", "UI/UX Designer.");
createProfile("Salu", "Full-stack Developer.");
createProfile("Mawutor", "Frontend Developer.");


function studentCard(name, course, level){
    console.log("Name: "+ name);
    console.log("Course: "+ course);
    console.log("Level: "+ level);
}

studentCard("Samuel", "Computer Science", 300);*/

/*function multiply(a,b) {
    return a * b;
}

let answer = multiply(4, 6);
console.log(answer);


function fullName(firstname, lastname){
    return firstname +" "+lastname;
}

let user = fullName("Samuel", "Boahen");
console.log(user);

function calculateTotal(price, quantity){
    return price * quantity;
}

let Total = calculateTotal(50, 4);
console.log("The total price is GHS"+ " "+ Total);

let name = "Samuel";

function greet() {
    console.log(name);
}

greet();*/

//SCOPE

//Mini Project 1
/*let website = "samuelboahen.com";

function showWebsite() {
    console.log(website);
}

showWebsite();

//Mini Project 2

let language = "English";

function translate() {
    let language = "French";

    console.log(language);
}

translate();

console.log(language);

//Mini Project 3
function student() {
    let school = "University of Ghana";

    console.log(school);
}

student();

//console.log(school); >exist outside the function hence cannot access the inside var of the function

//Challenge
let appName = "Expense Tracker";

function displayApp() {
    let version = "1.0";

    console.log("Application: " + appName);
    console.log("Version: " + version);
}

displayApp();*/
//console.log(version); >exist outside the function hence cannot access the inside var of the function



// ARRAYS

// Mini Project 1
/*let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits);

//Mini Project 2
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[3]);

//Mini Project 3

let countries = [
    "Ghana",
    "Nigeria",
    "Kenya",
    "South Africa"
];

console.log(countries[0]);
console.log(countries[2]);*/


//Adding items with push
/*let skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

skills.push("React");

console.log(skills);*/


//Removing items with pop
/*let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

skills.pop();
console.log(skills)


//Using Variable and index to change an existing item

let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

skills[2] = "UIUX Design";
console.log(skills)

//Mini project 1
let languages = [
    "HTML",
    "CSS",
    "JavaScript"
];

languages.push("Vue");
console.log(languages);

//languages.pop();
//console.log(languages);

//Mini project 2
let frameworks = [
    "React",
    "Angular",
    "Svelte"
];

frameworks[1] = "Vue";
console.log(frameworks);*/

/*let hobbies = [
    "Reading",
    "Football",
    "Coding",
    "Music"
];

console.log(hobbies.length);

let colors = [
    "Red",
    "Blue",
    "Green"
];

console.log(colors[colors.length-1])*/


// For Loop

/*for (let i = 0; i < 5; i++) {
    console.log(i);
}

//mini project 1
for (let b = 1; b < 6; b++){
    console.log(b);
}

//mini project 2

for (let m = 10; m > 4; m--){
    console.log(m);
}*/

//Looping Through Arrays

/*let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

for (let i = 0; i < skills.length; i++){
    console.log(skills[i]);
}


skills.push("UI/UX Design");
   for (let i = 0; i < skills.length; i++){
    console.log(skills[i]);
}





//Mini Project 1

let fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango"
];
for (let b = 0; b < fruits.length; b++) {
    console.log(fruits[b]);
}


//Mini Project 2
let scores = [80, 90, 75, 95, 88];
for (let i = 0; i < scores.length; i++) {
    console.log("Score: " + scores[i]);
}
*/


//Using forEach

/*let skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

skills.forEach(function(skill) {
    console.log(skill);
});





let fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango"
];

fruits.forEach(
    function(fruit){
        console.log(fruit);
    }
)


//Mini project 2

let prices = [
    10, 25, 50, 100
];

prices.forEach(
    function(ball){
        console.log("Price: " + ball) //the parameter name is just a temporal variable
    }
)


//Mini project 3

let teammates = [
    "Samuel",
    "Kwame",
    "Akosua"
];

teammates.forEach(
    function(person){
        console.log("Welcome "+ person); //the parameter name can be anything
    }
);  */





//map() creates a new array. it doesn't replace it

/*let prices = [10, 20, 30];

let doubledPrices = prices.map(function(price) {
    return price * 2;
});

console.log(doubledPrices);



//Mini Project 1
let names = [
    "Samuel",
    "Kwame",
    "Akosua"
];

let greetings = names.map(function(name) {
    return "Hello " + name;
});

console.log(greetings);


//Mini Project 2
let numbers = [
    5,
    10,
    15,
    20
];

let trice = numbers.map(
    function(bossman){
        return bossman * 3;
    }
)

console.log(trice);
console.log(numbers);


//Mini Project 2

let cities = [
    "Accra",
    "Kumasi",
    "Tamale"
];

let describe = cities.map(
    function(tina){
        return "City: " + tina;
    }
)

console.log(describe);




//Mini Project 3

let ages = [
    18,
    25,
    30
];

let withYears = ages.map(
    function(Obi){
        return Obi + " years"
    }
)

console.log(withYears);
*/



// Filter array method

let scores = [45, 80, 30, 95, 60];

let passed = scores.filter(function(score) {
    return score >= 50;
});

console.log(scores);
console.log(passed);

//new

let ages = [12, 18, 25, 15, 30];

let adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults);

//mini project 1

let numbers = [5, 10, 15, 20, 25];

let newNum = numbers.filter(
    function(Asana){
        return Asana >= 15
    }
)

console.log(newNum);
console.log(numbers);


//mini project 2
let prices = [50, 200, 80, 500, 30];

let filterPrice = prices.filter(
    function(moi){
        return moi >= 100;
    }
)

//mini project 3
let names = [
    "Samuel",
    "Ama",
    "Kwame",
    "Akosua"
];

 let keepName = names.filter(
    function(pname){
        return pname.length > 4;
    }
 )

 console.log(keepName);