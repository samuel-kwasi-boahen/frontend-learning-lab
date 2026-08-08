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

/*let scores = [45, 80, 30, 95, 60];

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


 // Object

 let person = {
    name: "Samuel",
    age: 24,
    job: "UI/UX Designer"
}; 

console.log(person.age);


let phone = {
    brand: "Samsung",
    model: "S25",
    color: "Black"
};

console.log(phone.brand);
console.log(phone.model);

//add new properpty
/*let student = {
    name: "Samuel"
};

student.course = "Computer Science";
console.log(student)

//Mini project 1
let student = {
    name :"Asana",
    course : "Development Planning",
    level : 100
};

console.log("name: "+ student.name);
console.log("course: " + student.course);
console.log("level: " + student.level);

//Mini project 2

let laptop = {
    brand: "Lenovo",
    ram: 8+"GB",
    storage: 500+"GB"
}

console.log(laptop.brand);
console.log(laptop.ram);
console.log(laptop.storage);

laptop.storage = 1+"TB";

console.log(laptop.storage);



//Mini project 3

let expenseTracker = {
    Name: "Expense Tracker",
    Role: "UI/UX Designer",
    Duration: "2 Weeks",
    Tool: "Figma",
    Status: "Completed"
}

console.log("Name: "+ expenseTracker.Name);
console.log("Role: "+ expenseTracker.Role);
console.log("Duration: " + expenseTracker.Duration);
console.log("Tool: "+ expenseTracker.Tool);
console.log("Status: "+ expenseTracker.Status)*/


//ARRAYS OF OBJECTS
/*
let projects = [
    {
        name: "Expense Tracker",
        role: "UI/UX Designer"
    },
    {
        name: "Food Vendor Dashboard",
        role: "Product Designer"
    }
];

projects.forEach(function(project){

    console.log(project.name);

});




//arrays of objects
let portfolioProjects = [
    {
        name: "Expense Tracker",
        category: "UI/UX",
        tool: "Figma"
    },
    {
        name: "Food Vendor Dashboard",
        category: "UI/UX",
        tool: "Figma"
    },
    {
        name: "Checkout Redesign",
        category: "UI/UX",
        tool: "Figma"
    }
];


portfolioProjects.forEach(function(project){

    // Create a project card

});





//Mini project 1

let students = [
    {
        name: "Samuel",
        course: "Computer Science"
    },
    {
        name: "Ama",
        course: "Business"
    },
    {
        name: "Kwame",
        course: "Engineering"
    }
];

students.forEach(
    function(identity){
        console.log(identity.name)
    }
)


//Mini project 2

let laptops = [
    {
        brand: "HP",
        ram: "8GB"
    },
    {
        brand: "Dell",
        ram: "16GB"
    },
    {
        brand: "Lenovo",
        ram: "32GB"
    }
];

laptops.forEach(
    function(info){
        console.log(info.brand + " - "+ info.ram)
    }
)



///Mini project 3
let portProjects = [
    {
        name: "SaveWise",
        role: "UI/UX Designer",
        duration: "2 Weeks",
        Tool: "Figma"
    },

    {
        name: "NeighborAid",
        role: "Frontend Developer",
        duration: "1 Month",
        Tool: "VS Code"

    },

    {
        name: "Fibkon",
        role: "Frontend Developer",
        duration: "2 Months",
        Tool: "Sublime Text"
    }

];

portProjects.forEach(
    function(detail){
        console.log(detail.name);
        console.log("Role: "+ detail.role);
        console.log("Duration: "+ detail.duration);
        console.log("Tool: "+ detail.Tool);
    }
);
*/

//Mini project 1

/*let title = document.getElementById("title");
title.textContent = "Learning Frontend"

//Mini project 2
let paragraph = document.getElementById("status");
paragraph.textContent = "completed";

//Mini project 3

let hero = document.getElementById("heroName");
hero.textContent = "Samuel Boahen - Product Designer";
*/


/*let button11 = document.getElementById("btn");
button11.addEventListener("click", function(){
    console.log("Button clicked");
}

)


let message1 = document.getElementById("message");
let changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener( 
    "click", function(){
        message1.textContent = "Text Changed"
    }
)



//Mini project 1

let button1 = document.getElementById("helloBtn");
    button1.addEventListener(
        "click", function(){
            console.log("Hello Samuel!");
        }
    )

    //Mini project 2

let button2 = document.getElementById("statusBtn");
let message2 = document.getElementById("status");

button2.addEventListener(
    "click", function(){
        message2.textContent = "Completed!"
    }
)



let title = document.getElementById("heroTitle");
let button3 = document.getElementById("roleBtn");

button3.addEventListener(
    "click", function(){
        title.textContent = "Samuel Boahen - Product Designer"
    }
)*/




//Changing CSS with JavaScript

/*let message = document.getElementById("message");
message.style.color = "white";

message.style.backgroundColor = "black";

message.style.padding = "20px";

message.style.borderRadius = "10px";


//mini project 1
let text = document.getElementById("text");
text.style.color = "blue";
text.style.fontSize = "30px";
text.style.display = "none";

//mini project 2
let title = document.getElementById("heroTitle");
let button3 = document.getElementById("roleBtn");

button3.addEventListener(
    "click", function(){
        title.textContent = "Samuel Boahen - Product Designer";
        title.style.color = "white";
        title.style.backgroundColor = "black";
        title.style.borderRadius = "10px";
        title.style.padding = "20px";

    }
)


//mini project 3
let heroName = document.getElementById("heroName");
let button = document.getElementById("themeBtn");
button.addEventListener(
    "click", function(){
        heroName.style.color = "gold";
        heroName.style.fontSize = "42px";
        heroName.style.textDecoration = "underline";
        heroName.style.backgroundColor = "black";
        heroName.style.padding = "15px";
        heroName.style.border = "2px solid blue";
        heroName.style.borderRadius = "10px";
    }
);


//Mini project 1
let msg = document.getElementById("msg");
let buttonn = document.getElementById("hide");

buttonn.addEventListener(
    "click", function(){
        msg.style.display = "none";
    }
)

//Mini project 2

let hide = document.getElementById("hide");
let show = document.getElementById("show");

hide.style.display = "none";
show.style.display = "block";


//mini project 3

let about = document.getElementById("about");
let aboutBtn = document.getElementById("aboutBtn");

aboutBtn.addEventListener(
    "click", function() {
        if(about.style.display === "none"){
            about.style.display = "block";

        } else {
            about.style.display = "none"
        }
    }
);


//Creating New Elements with JavaScript
let container = document.getElementById("container");
let paragraph = document.createElement("p");
paragraph.textContent = "Hello My People!";
container.appendChild(paragraph);

//example
let skills = document.getElementById("skills");
let skill = document.createElement("p")
skill.textContent = "UI/UX Designer";
skills.appendChild(skill);

// adding multiple elements
let skill1 = document.createElement("p");
skill1.textContent = "CSS"
skills.appendChild(skill1);

let skill2 = document.createElement("h3");
skill2.textContent = "JavaScript";
skills.appendChild(skill2);

let skill3 = document.createElement("p");
skill3.textContent = "HTML";
skills.appendChild(skill3)


//Mini project 1
let box1 = document.getElementById("box1");
let learn = document.createElement("p");
learn.textContent = "Learning DOM";
box1.appendChild(learn);

//Mini project 2

let courses = document.getElementById("courses");
let c1 = document.createElement("p");
c1.textContent = "HTML";
courses.appendChild(c1);

let c2 = document.createElement("p");
c2.textContent = "CSS";
courses.appendChild(c2);

let c3 = document.createElement("p");
c3. textContent = "JavaScript";
courses.appendChild(c3);


//Mini project 3

let projects = document.getElementById("projects");
let name = document.createElement("p");
name.textContent = "Project: SaveWise";
projects.appendChild(name);

let role = document.createElement("p");
role.textContent = "Role: UI/UX Designer"
projects.appendChild(role);

let duration = document.createElement("p");
duration.textContent = "Duration: 8 Weeks";
projects.appendChild(duration);


let skillsad = document.getElementById("skillsad");
let buttonskill = document.getElementById("addskill");

buttonskill.addEventListener("click", function () {

    let createskill = document.createElement("p");

    createskill.textContent = "JavaScript";

    skillsad.appendChild(createskill);

});*/



//Removing an Element

/*let messagee = document.getElementById("messagee");
messagee.remove();

//Removing by click

let note = document.getElementById("note");
let deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", function(){
    note.remove();
}

)

//mini project 1
let texti = document.getElementById("texti");
let removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", function(){
    texti.remove();
});


//mini project 2
let skilli = document.getElementById("skilli");
let deleteSkill = document.getElementById("deleteSkill");

deleteSkill.addEventListener("click", function(){
    skilli.remove();
});


//mini project 3
let projectCard = document.getElementById("projectCard");
let buttonDelete = document.getElementById("deleteProject");

buttonDelete.addEventListener(
    "click", function(){
        projectCard.remove();
    }
)

// DYNAMIC NOTES
let notes = document.getElementById("notes");
let ButtonRemove = document.getElementById("removeNote")

ButtonRemove.addEventListener(
    "click", function(){
        notes.remove();
    }
)
    */



//Working with CSS Classes (classList)
//Mini Project
/*
let text2 = document.getElementById("text2");
let highlightBtn = document.getElementById("highlightBtn");

highlightBtn.addEventListener(
    "click", function(){
        text2.classList.add("highlight");
    }
)



let card = document.getElementById("card");
let buttonStyle = document.getElementById("removeStyle");
card.classList.add("cardStyle");

buttonStyle.addEventListener(
    "click", function (){
        card.classList.remove("cardStyle");
    }
)


//Mini project 3
let heroTitle = document.getElementById("heroTitle");
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener(
    "click", function (){
        heroTitle.classList.toggle("darkTheme")
    }
)


//Interactive Project Card

let projectCard = document.getElementById("projectCard");
let favoriteBtn = document.getElementById("favoriteBtn");

favoriteBtn.addEventListener("click", function(){
    projectCard.classList.toggle("favorite");
}
    
)
*/



// LOCAL STORAGE

//mini project 1
/*

localStorage.setItem("studentName", "Samuel");
console.log(localStorage.getItem("studentName"));

//mini project 2

localStorage.setItem("career", "Frontend Developer");
console.log(
    localStorage.getItem("career")
);

//Mini project 3

localStorage.setItem("favoriteProject", "Vendor Checkout");
localStorage.removeItem("favoriteProject");
console.log(localStorage.getItem("favoriteProject"));

//Project_Favorite Language Saver

let languagediv = document.getElementById("language");
let saveBtn = document.getElementById("saveBtn");
let loadBtn = document.getElementById("loadBtn");


saveBtn.addEventListener(
    "click", function(){
        localStorage.setItem("language", "JavaScript");

    }
)

loadBtn.addEventListener(
    "click", function(){
        let language = localStorage.getItem("language");
        languagediv.textContent = language;
        
    }
)



// Persistent Dark Mode (Local Storage + DOM + Events)

let portfolioThemeSection =
document.getElementById("portfolioThemeSection");

let portfolioThemeToggleButton =
document.getElementById("portfolioThemeToggleButton");

/*portfolioThemeToggleButton.addEventListener(

    "click",

    function () {

        portfolioThemeSection.classList.toggle(
            "portfolioDarkTheme"
        );

    }

);

portfolioThemeSection.classList.contains(
    "portfolioDarkTheme"
);   */



/*portfolioThemeToggleButton.addEventListener(

    "click",

    function () {

        portfolioThemeSection.classList.toggle(
            "portfolioDarkTheme"
        );

        if (

            portfolioThemeSection.classList.contains(
                "portfolioDarkTheme"
            )

        ) {

            localStorage.setItem(
                "portfolioThemePreference",
                "dark"
            );

        } else {

            localStorage.setItem(
                "portfolioThemePreference",
                "light"
            );

        }

    }

);


let savedPortfolioTheme =

localStorage.getItem(
    "portfolioThemePreference"
);

if (savedPortfolioTheme === "dark") {

    portfolioThemeSection.classList.add(
        "portfolioDarkTheme"
    );

}


// Select the theme button and the hero section
let themeButton = document.getElementById('portfolioHeroThemeButton');
let heroSection = document.getElementById('portfolioHeroSection');

// 1. When page loads: Automatically restore the theme
let savedTheme = localStorage.getItem('portfolioHeroTheme');

if (savedTheme === 'dark') {
  heroSection.classList.add('portfolioHeroDark');
}

// 2. When button is clicked: Toggle and Save
themeButton.addEventListener('click', () => {
  // Toggle the class
  heroSection.classList.toggle('portfolioHeroDark');
  
  // Check if the dark class is now active
  let isDark = heroSection.classList.contains('portfolioHeroDark');
  
  // Save the preference as 'portfolioHeroTheme'
  localStorage.setItem('portfolioHeroTheme', isDark ? 'dark' : 'light');
});


let lesson12NameInput =
    document.getElementById("lesson12NameInput");

let lesson12ShowNameBtn =
    document.getElementById("lesson12ShowNameBtn");

let lesson12Output =
    document.getElementById("lesson12Output");

lesson12ShowNameBtn.addEventListener(
    "click",
    function () {

        lesson12Output.textContent =
            lesson12NameInput.value;

    }
);



//FORMS AND user INPUT
// MIni project 1

let lesson12GreetingInput = document.getElementById("lesson12GreetingInput");
let lesson12GreetingBtn = document.getElementById("lesson12GreetingBtn");
let lesson12GreetingOutput = document.getElementById("lesson12GreetingOutput");

lesson12GreetingBtn.addEventListener(
    "click", function (){
        lesson12GreetingOutput.textContent = lesson12GreetingInput.value
    }
)

//Mini project 2

let lesson12SkillInput = document.getElementById("lesson12SkillInput");
let lesson12SkillBtn = document.getElementById("lesson12SkillBtn");
let lesson12SkillOutput = document.getElementById("lesson12SkillOutput");

lesson12SkillBtn.addEventListener (
    "click", function (){
        lesson12SkillOutput.textContent = "Favorite Skill: "+ lesson12SkillInput.value
    }
)


//Mini project 3
let lesson12RoleInput = document.getElementById("lesson12RoleInput");
let lesson12RoleBtn = document.getElementById("lesson12RoleBtn");
let lesson12RoleOutput = document.getElementById("lesson12RoleOutput");

lesson12RoleBtn.addEventListener(
    "click", function (){
        lesson12RoleOutput.textContent = "Role: " + lesson12RoleInput.value;
    }
)


// Project_Build a simple introduction generato

let lesson12IntroName = document.getElementById("lesson12IntroName");
let lesson12IntroRole = document.getElementById("lesson12IntroRole");
let lesson12GenerateIntroBtn = document.getElementById("lesson12GenerateIntroBtn");
let lesson12IntroOutput = document.getElementById("lesson12IntroOutput");

lesson12GenerateIntroBtn.addEventListener(
    "click", function(){
        lesson12IntroOutput.textContent = "Hello, I'm "+ lesson12IntroName.value + ", a "+ lesson12IntroRole.value+".";
     
    }
)

*/


let lesson12UsernameInput =
    document.getElementById("lesson12UsernameInput");

let lesson12ValidateBtn =
    document.getElementById("lesson12ValidateBtn");

let lesson12ValidationMessage =
    document.getElementById("lesson12ValidationMessage");

lesson12ValidateBtn.addEventListener(
    "click",
    function () {

        if (lesson12UsernameInput.value === "") {

            lesson12ValidationMessage.textContent =
                "Username is required.";

        } else {

            lesson12ValidationMessage.textContent =
                "Welcome, " + lesson12UsernameInput.value + "!";

        }

    }
);




//Mini Project 1
let lesson12NameCheckInput = document.getElementById("lesson12NameCheckInput");
let lesson12NameCheckBtn = document.getElementById("lesson12NameCheckBtn");
let lesson12NameCheckOutput = document.getElementById("lesson12NameCheckOutput");

lesson12NameCheckBtn.addEventListener(
    "click", function (){
        if(lesson12NameCheckInput.value === ""){
            lesson12NameCheckOutput.textContent = "Please enter your name";
        } else{
            lesson12NameCheckOutput.textContent = "Hello, "+  lesson12NameCheckInput.value
        }
    }
)



//Mini project 2

let lesson12SkillCheckInput = document.getElementById("lesson12SkillCheckInput");
let lesson12SkillCheckBtn = document.getElementById("lesson12SkillCheckBtn");
let lesson12SkillCheckOutput = document.getElementById("lesson12SkillCheckOutput");

lesson12SkillCheckBtn.addEventListener(
    "click", function(){
        if (lesson12SkillCheckInput.value === "") {
            lesson12SkillCheckOutput.textContent = "Skill cannot be empty";
             }  else {
                lesson12SkillCheckOutput.textContent = "Skill Saved: "+ lesson12SkillCheckInput.value;
             }
    }
)



// Mini project 3

let lesson12RoleCheckInput = document.getElementById("lesson12RoleCheckInput");
let lesson12RoleCheckBtn = document.getElementById("lesson12RoleCheckBtn");
let lesson12RoleCheckOutput = document.getElementById("lesson12RoleCheckOutput");

lesson12RoleCheckBtn.addEventListener (
    "click", function () {
        if(lesson12RoleCheckInput.value === "") {
            lesson12RoleCheckOutput.textContent = "Role is required."
        } else {lesson12RoleCheckOutput.textContent = "Current Role: "+ lesson12RoleCheckInput.value};
    }
)


// Project_Contact Validation

let lesson12ContactNameInput = document.getElementById("lesson12ContactNameInput");
let lesson12ContactSubmitBtn = document.getElementById ("lesson12ContactSubmitBtn");
let lesson12ContactFeedback = document.getElementById("lesson12ContactFeedback");

lesson12ContactSubmitBtn.addEventListener(
    "click", function (){
        if (lesson12ContactNameInput.value === ""){
           lesson12ContactFeedback.textContent = "Please enter your name before submitting.";

        } else {
           lesson12ContactFeedback.textContent = "Thank you, " + lesson12ContactNameInput.value+"! Your request has been received." 
        }
    }
)

let lesson12FullNameInput =
    document.getElementById("lesson12FullNameInput");

let lesson12ProfessionInput =
    document.getElementById("lesson12ProfessionInput");

let lesson12MultiSubmitBtn =
    document.getElementById("lesson12MultiSubmitBtn");

let lesson12MultiValidationOutput =
    document.getElementById("lesson12MultiValidationOutput");

lesson12MultiSubmitBtn.addEventListener(
    "click",
    function () {

        if (
            lesson12FullNameInput.value === "" ||
            lesson12ProfessionInput.value === ""
        ) {

            lesson12MultiValidationOutput.textContent =
                "Please complete all fields.";

        } else {

            lesson12MultiValidationOutput.textContent =
                "Welcome, " +
                lesson12FullNameInput.value +
                "! Profession: " +
                lesson12ProfessionInput.value;

        }

    }
);

//FILLING MORE THAN ONE FIELD
//Mini project 1
let lesson12ProfileNameInput = document.getElementById("lesson12ProfileNameInput");
let lesson12ProfileRoleInput = document.getElementById("lesson12ProfileRoleInput");
let lesson12ProfileBtn = document.getElementById("lesson12ProfileBtn");
let lesson12ProfileOutput = document.getElementById("lesson12ProfileOutput");

lesson12ProfileBtn.addEventListener(
    "click", function (){
        if (lesson12ProfileNameInput.value === "" || lesson12ProfileRoleInput.value === ""){
          lesson12ProfileOutput.textContent = "Please fill in every field."  
        } else {
            lesson12ProfileOutput.textContent = lesson12ProfileNameInput.value+ " - "+ lesson12ProfileRoleInput.value;
        }
    }
)


//Mini project 2

let lesson12CourseNameInput = document.getElementById("lesson12CourseNameInput");
let lesson12CourseInput = document.getElementById("lesson12CourseInput");
let lesson12CourseBtn = document.getElementById("lesson12CourseBtn");
let lesson12CourseOutput = document.getElementById("lesson12CourseOutput");

lesson12CourseBtn.addEventListener(
    "click", function(){
        if(lesson12CourseNameInput.value ==="" || lesson12CourseInput.value ==="") 
            {lesson12CourseOutput.textContent = "Registration incomplete."
        } else { lesson12CourseOutput.textContent = lesson12CourseNameInput.value + " registered for "+ lesson12CourseInput.value;

        }
    }
)



//Mini project 3

let lesson12ProjectNameInput = document.getElementById("lesson12ProjectNameInput");
let lesson12ProjectDurationInput = document.getElementById("lesson12ProjectDurationInput");
let lesson12ProjectBtn = document.getElementById("lesson12ProjectBtn");
let lesson12ProjectOutput = document.getElementById("lesson12ProjectOutput");

lesson12ProjectBtn.addEventListener(
    "click", function(){
        if(lesson12ProjectNameInput.value === "" || lesson12ProjectDurationInput.value === ""){
lesson12ProjectOutput.textContent = "Project information is incomplete."
        } else { 
            lesson12ProjectOutput.textContent = lesson12ProjectNameInput.value + " - "+lesson12ProjectDurationInput.value;
        }
    }
)


// Project_Mini Contact Preview

let lesson12CardNameInput = document.getElementById("lesson12CardNameInput");
let lesson12CardRoleInput = document.getElementById("lesson12CardRoleInput");
let lesson12CardGenerateBtn = document.getElementById("lesson12CardGenerateBtn");
let lesson12CardOutput = document.getElementById("lesson12CardOutput")

lesson12CardGenerateBtn.addEventListener(
    "click", function(){
        if (lesson12CardNameInput.value === "" || lesson12CardRoleInput.value === ""){
            lesson12CardOutput.textContent = "Please complete both fields.";
        } else {
            lesson12CardOutput.innerHTML = "Name: "+ lesson12CardNameInput.value + "<br>" + "Role: "+ lesson12CardRoleInput.value;
        }
    }
)



// Trim() METHOD


let username = lesson12UsernameInput.value.trim();

if (username === "") {

    lesson12ValidationMessage.textContent =
        "Username is required.";

} else {

    lesson12ValidationMessage.textContent =
        "Welcome, " + username + "!";

}

//Project
let lesson12TrimNameInput = document.getElementById("lesson12TrimNameInput");
let lesson12TrimRoleInput = document.getElementById("lesson12TrimRoleInput")
let lesson12TrimGenerateBtn = document.getElementById("lesson12TrimGenerateBtn");
let lesson12TrimOutput = document.getElementById("lesson12TrimOutput");

lesson12TrimGenerateBtn.addEventListener(
    "click", function(){
        let oboy = lesson12TrimNameInput.value.trim()
        let ogirl = lesson12TrimRoleInput.value.trim()
        if (oboy===""|| ogirl===""){
           lesson12TrimOutput.textContent = "Please complete all fields."
        } else {
                lesson12TrimOutput.textContent = "Hello, I'm "+ oboy + ", a "+ ogirl 
        }
    }
)



//Clearing Form Inputs


let lesson12ClearNameInput =
    document.getElementById("lesson12ClearNameInput");

let lesson12ClearBtn =
    document.getElementById("lesson12ClearBtn");

let lesson12ClearOutput =
    document.getElementById("lesson12ClearOutput");

lesson12ClearBtn.addEventListener(
    "click",
    function () {

        let cleanName =
            lesson12ClearNameInput.value.trim();

        if (cleanName === "") {

            lesson12ClearOutput.textContent =
                "Please enter your name.";

        } else {

            lesson12ClearOutput.textContent =
                "Welcome, " + cleanName + "!";

            lesson12ClearNameInput.value = "";

        }

    }
);



//Project_Contact Form

let lesson12ResetNameInput = document.getElementById("lesson12ResetNameInput");
let lesson12ResetMessageInput = document.getElementById("lesson12ResetMessageInput");
let lesson12ResetSubmitBtn = document.getElementById("lesson12ResetSubmitBtn");
let lesson12ResetFeedback = document.getElementById("lesson12ResetFeedback");


lesson12ResetSubmitBtn.addEventListener(
    "click", function(){
        let cleanName = lesson12ResetNameInput.value.trim();
        let cleanMessage = lesson12ResetMessageInput.value.trim();

    if (cleanName === "" || cleanMessage === ""){
        lesson12ResetFeedback.textContent = "Please complete all fields.";
    } else {
        lesson12ResetFeedback.textContent = "Thank you, " + cleanName +"! Your message has been sent."
        
        lesson12ResetNameInput.value = "";
        lesson12ResetMessageInput.value = "";
        
    }
    }
)




//REUSING FUNCTIONS AND EVENTS

let lesson12ReusableNameInput =
document.getElementById("lesson12ReusableNameInput");

let lesson12ReusableBtn =
document.getElementById("lesson12ReusableBtn");

let lesson12ReusableOutput =
document.getElementById("lesson12ReusableOutput");

function showGreeting() {

    let cleanName =
    lesson12ReusableNameInput.value.trim();

    if (cleanName === "") {

        lesson12ReusableOutput.textContent =
        "Please enter your name.";

    } else {

        lesson12ReusableOutput.textContent =
        "Hello, " + cleanName + "!";

    }

}

lesson12ReusableBtn.addEventListener(
    "click",
    showGreeting
);







//Project_Profile Generator


let lesson12ReusableProfileNameInput = document.getElementById("lesson12ReusableProfileNameInput");
let lesson12ReusableProfileRoleInput = document.getElementById("lesson12ReusableProfileRoleInput");
let lesson12ReusableProfileBtn = document.getElementById("lesson12ReusableProfileBtn");
let lesson12ReusableProfileOutput = document.getElementById("lesson12ReusableProfileOutput");

function generateProfile(){
    let nameTrim = lesson12ReusableProfileNameInput.value.trim();
    let roleTrim = lesson12ReusableProfileRoleInput.value.trim();

        if(nameTrim==="" || roleTrim === ""){
            lesson12ReusableProfileOutput.textContent = "Please complete both fields."
        } else {
            lesson12ReusableProfileOutput.textContent = nameTrim + " - "+ roleTrim;
        }

}


    lesson12ReusableProfileBtn.addEventListener(
        "click", 
        generateProfile
    )






    //Multiple Conditions with else if 

    //example 1

    let age = 17;

if (age >= 18) {

    console.log("Adult");

} else if (age >= 13) {

    console.log("Teenager");

} else {

    console.log("Child");

}



//example 2

let projectCount = 5;

if (projectCount === 0) {

    console.log("No projects yet.");

} else if (projectCount < 5) {

    console.log("Portfolio growing.");

} else {

    console.log("Strong portfolio!");

}


//Mini Project - username length

let lesson12ElseIfNameInput = document.getElementById("lesson12ElseIfNameInput");
let lesson12ElseIfNameBtn = document.getElementById("lesson12ElseIfNameBtn");
let lesson12ElseIfNameOutput = document.getElementById("lesson12ElseIfNameOutput");

lesson12ElseIfNameBtn.addEventListener("click", function() {
let TrimmName = lesson12ElseIfNameInput.value.trim();
if (TrimmName === ""){
    lesson12ElseIfNameOutput.textContent = "Please enter your name."
} else if (TrimmName.length < 3){
    lesson12ElseIfNameOutput.textContent = "Name is too short."
}  else {
    lesson12ElseIfNameOutput.textContent = "Welcome, "+ TrimmName;
}}
)


// Mini Project 2 - Skill Validation

lesson12ElseIfSkillInput = document.getElementById("lesson12ElseIfSkillInput");
lesson12ElseIfSkillBtn = document.getElementById("lesson12ElseIfSkillBtn");
lesson12ElseIfSkillOutput = document.getElementById("lesson12ElseIfSkillOutput");

function skillValid(){
    let SkillTrim = lesson12ElseIfSkillInput.value.trim();
    
    if (SkillTrim === ""){
        lesson12ElseIfSkillOutput.textContent= "Please enter a skill."
    } else if (SkillTrim.length<4) {
       lesson12ElseIfSkillOutput.textContent = "Skill name is too short"
    } else {
        lesson12ElseIfSkillOutput.textContent = "Skill saved: "+ SkillTrim;

    }
}

lesson12ElseIfSkillBtn.addEventListener("click",
    skillValid
)




//Mini Project 3 - Role Validation

let lesson12ElseIfRoleInput = document.getElementById("lesson12ElseIfRoleInput");
let lesson12ElseIfRoleBtn = document.getElementById("lesson12ElseIfRoleBtn");
let lesson12ElseIfRoleOutput = document.getElementById("lesson12ElseIfRoleOutput");

function roleValid(){
    let roleTrim = lesson12ElseIfRoleInput.value.trim();
    if (roleTrim === ""){
        lesson12ElseIfRoleOutput.textContent = "Role is required";
     
    } else if (roleTrim.length < 5){
                lesson12ElseIfRoleOutput.textContent = "Role name is too short.";

    } else {
        lesson12ElseIfRoleOutput.textContent = "Current Role: " + roleTrim;

    }

}


lesson12ElseIfRoleBtn.addEventListener(
    "click",
    roleValid
)


//Project - Contact Validator

let lesson12ElseIfContactNameInput = document.getElementById("lesson12ElseIfContactNameInput");
let lesson12ElseIfContactBtn = document.getElementById("lesson12ElseIfContactBtn");
let lesson12ElseIfContactOutput = document.getElementById("lesson12ElseIfContactOutput");
 
function validateContact(){

    let contactTrim = lesson12ElseIfContactNameInput.value.trim();
    if (contactTrim === ""){
        lesson12ElseIfContactOutput.textContent = "Please enter your name."
    } else if (contactTrim.length < 3){
        lesson12ElseIfContactOutput.textContent = "Name must be at least 3 characters";
    } else {
        lesson12ElseIfContactOutput.textContent = "Thank you, "+ contactTrim + "!";
    }

}


lesson12ElseIfContactBtn.addEventListener(
    "click",
    validateContact
)




// Storing User Data in Arrays

/*let skills=[];
skills.push("JavaScript");
skills.push("React");
console.log(skills);
*/

// let lesson13SkillInput =
// document.getElementById("lesson13SkillInput");

// let lesson13SkillBtn =
// document.getElementById("lesson13SkillBtn");

// let lesson13SkillOutput =
// document.getElementById("lesson13SkillOutput");

// let skills = [];

// function addSkill() {

//     let skill =
//     lesson13SkillInput.value.trim();

//     if (skill === "") {

//         lesson13SkillOutput.textContent =
//         "Please enter a skill.";

//     } else {

//         skills.push(skill);

//         lesson13SkillOutput.textContent =
//         skills.join(", ");

//         lesson13SkillInput.value = "";

//     }

// }

// lesson13SkillBtn.addEventListener(
//     "click",
//     addSkill
// );


//project - favorite tools list
/*
let lesson13ToolInput = document.getElementById("lesson13ToolInput");
let lesson13ToolBtn = document.getElementById("lesson13ToolBtn");
let lesson13ToolOutput = document.getElementById("lesson13ToolOutput");

let tools = [];

function favTools(){
    let toolsTrim = lesson13ToolInput.value.trim();

    if(toolsTrim === ""){
        lesson13ToolOutput.textContent = "Please enter name of tool"
    } else {tools.push(toolsTrim);
            lesson13ToolOutput.textContent = tools.join(", ")
            lesson13ToolInput.value = ""
    } 
}

lesson13ToolBtn.addEventListener(
    "click",
    favTools
)





//Project - Learning Project

let lesson13TopicInput = document.getElementById("lesson13TopicInput");
let lesson13TopicBtn = document.getElementById ("lesson13TopicBtn");
let lesson13TopicOutput = document.getElementById("lesson13TopicOutput");

let topics = [];

function addProject(){
    let topic = lesson13TopicInput.value.trim();

    if (topic === ""){
        lesson13TopicOutput.textContent = "Please input a topic name";
    } else {
        topics.push(topic);
        lesson13TopicOutput.textContent = topics.join(", ");
        lesson13TopicInput.value = "";
    }

}


lesson13TopicBtn.addEventListener(
    "click",
    addProject

)



// Project - Technology Tracker

let lesson13TechInput = document.getElementById("lesson13TechInput");
let lesson13TechBtn = document.getElementById("lesson13TechBtn");
let lesson13TechOutput = document.getElementById("lesson13TechOutput");

let technologies = [];

function addTechnology(){
    let cleanTech = lesson13TechInput.value.trim();

    if(cleanTech ===""){
        lesson13TechOutput.textContent = "Please type name of technology."

    } else {
        technologies.push(cleanTech);
        lesson13TechOutput.textContent = technologies.join(" | ");
        lesson13TechInput.value = "";
    }
}


lesson13TechBtn.addEventListener(
    "click",
    addTechnology
)



//ARRAY OF OBJECTS

// let lesson13DynamicProjectInput = document.getElementById("lesson13DynamicProjectInput");
// let lesson13DynamicRoleInput = document.getElementById("lesson13DynamicRoleInput");
// let lesson13DynamicAddBtn = document.getElementById("lesson13DynamicAddBtn");
// let lesson13DynamicOutput = document.getElementById("lesson13DynamicOutput");

// let lesson13DynamicProjectInput =
// document.getElementById(
//     "lesson13DynamicProjectInput"
// );

// let lesson13DynamicRoleInput =
// document.getElementById(
//     "lesson13DynamicRoleInput"
// );

// let lesson13DynamicAddBtn =
// document.getElementById(
//     "lesson13DynamicAddBtn"
// );

// let lesson13DynamicOutput =
// document.getElementById(
//     "lesson13DynamicOutput"
// );

// let projects = [];

// function addProject() {

//     let cleanProject =
//     lesson13DynamicProjectInput.value.trim();

//     let cleanRole =
//     lesson13DynamicRoleInput.value.trim();

//     if (
//         cleanProject === "" ||
//         cleanRole === ""
//     ) {

//         lesson13DynamicOutput.textContent =
//         "Please complete all fields.";

//         return;
//     }

//     let projectObject = {

//         name: cleanProject,

//         role: cleanRole

//     };

//     projects.push(projectObject);

//     let outputText = "";

//     projects.forEach(function(project){

//         outputText +=
//         project.name +
//         " - " +
//         project.role +
//         "<br>";

//     });

//     lesson13DynamicOutput.innerHTML =
//     outputText;

//     lesson13DynamicProjectInput.value = "";
//     lesson13DynamicRoleInput.value = "";

// }

// lesson13DynamicAddBtn.addEventListener(
//     "click",
//     addProject
// );


//Mini project 1 - Course Tracker
let lesson13CourseNameInput = document.getElementById("lesson13CourseNameInput");
let lesson13CourseAddBtn = document.getElementById("lesson13CourseAddBtn");
let lesson13CourseOutput = document.getElementById("lesson13CourseOutput");

let lesson13CourseObjects = [];

function addCourse() {
    let cleanCourse = lesson13CourseNameInput.value.trim();

    if (cleanCourse === "") {
        lesson13CourseOutput.textContent = "Please enter a course name.";
        return;
    }

    let courseObject = {
        name: cleanCourse
    };
    lesson13CourseObjects.push(courseObject);
    let outputCourse = "";

    lesson13CourseObjects.forEach(function(course){
        outputCourse += course.name + "<br>";
    });
    lesson13CourseOutput.innerHTML = outputCourse; 
    lesson13CourseNameInput.value = "";
}

lesson13CourseAddBtn.addEventListener(
    "click",
    addCourse
);



//Mini project 2 - Skill Tracker

let lesson13SkillNameInput = document.getElementById("lesson13SkillNameInput");
let lesson13SkillAddBtn = document.getElementById("lesson13SkillAddBtn");
let lesson13SkillOutput = document.getElementById("lesson13SkillOutput");

let lesson13SkillObjects = [];

function addSkill() {
    let cleanSkill = lesson13SkillNameInput.value.trim();

    if (cleanSkill === "") {
        lesson13SkillOutput.textContent = "Please enter a skill name.";
        return;
    }

    let skillObject = {
        name: cleanSkill
    };
    lesson13SkillObjects.push(skillObject);
    let outputSkill = "";
    lesson13SkillObjects.forEach(function(skill){
        outputSkill += skill.name + "<br>";
    });
    lesson13SkillOutput.innerHTML = outputSkill;
    lesson13SkillNameInput.value = "";
}

lesson13SkillAddBtn.addEventListener(
    "click",
    addSkill
);




//project - project manager

let lesson13PortfolioManagerProjectInput = document.getElementById("lesson13PortfolioManagerProjectInput");
let lesson13PortfolioManagerRoleInput = document.getElementById("lesson13PortfolioManagerRoleInput");
let lesson13PortfolioManagerAddBtn = document.getElementById("lesson13PortfolioManagerAddBtn");
let lesson13PortfolioManagerOutput = document.getElementById("lesson13PortfolioManagerOutput");

let portfolioManagerProjects = [];

function addPortfolioManagerProject() {
    let cleanProject = lesson13PortfolioManagerProjectInput.value.trim();
    let cleanRole = lesson13PortfolioManagerRoleInput.value.trim();

    if (cleanProject === "" || cleanRole === "") {
        lesson13PortfolioManagerOutput.textContent = "Please complete all fields.";
        return;
    }

    let portfolioManagerProjectObject = {
        name: cleanProject,
        role: cleanRole
    };
    portfolioManagerProjects.push(portfolioManagerProjectObject);
    let PortfolioManagerOutput = "";
    portfolioManagerProjects.forEach(function(portfolioManagerProject){
        PortfolioManagerOutput += portfolioManagerProject.name + " - " + portfolioManagerProject.role + "," + "<br>";
    });
    lesson13PortfolioManagerOutput.innerHTML = PortfolioManagerOutput;
    lesson13PortfolioManagerProjectInput.value = "";
    lesson13PortfolioManagerRoleInput.value = "";
}


lesson13PortfolioManagerAddBtn.addEventListener("click", addPortfolioManagerProject);
*/



//Rendering Multiple Cards
//New Concept: Building HTML with JavaScript

//Mini Project 1 - Course Cards
let lesson13CourseCardInput = document.getElementById("lesson13CourseCardInput");
let lesson13CourseCardBtn = document.getElementById("lesson13CourseCardBtn");
let lesson13CourseCardOutput = document.getElementById("lesson13CourseCardOutput");

let lesson13CourseCards = [];
function addCourses(){
    let cleanCard = lesson13CourseCardInput.value.trim();

    if(cleanCard === ""){
        lesson13CourseCardOutput.textContent = "Please input name of course"
        return;
    }

        let cardObject = {
                name:cleanCard
        }
         lesson13CourseCards.push(cardObject)

         let cardOutput = "";

        lesson13CourseCards.forEach( function(coursecard){
        cardOutput += 

           "<div>" +
            coursecard.name +
           "</div>"

        });

        lesson13CourseCardOutput.innerHTML = cardOutput
        lesson13CourseCardInput.value = "";
}

lesson13CourseCardBtn.addEventListener(
    "click",
    addCourses
)



// ship - Project Cards

let lesson13PortfolioCardProjectInput = document.getElementById("lesson13PortfolioCardProjectInput");
let lesson13PortfolioCardRoleInput = document.getElementById("lesson13PortfolioCardRoleInput");
let lesson13PortfolioCardBtn = document.getElementById("lesson13PortfolioCardBtn");
let lesson13PortfolioCardOutput = document.getElementById("lesson13PortfolioCardOutput");

let lesson13PortfolioCards = [];
function addPortfolioCards(){
    let cleanProject = lesson13PortfolioCardProjectInput.value.trim();
    let cleanRole = lesson13PortfolioCardRoleInput.value.trim();

    if (cleanProject === "" || cleanRole === ""){
        lesson13PortfolioCardOutput.textContent = "Please complete all fields.";
        return;
    }

    let portfolioCardObject = {
        name: cleanProject,
        role: cleanRole
    };
    lesson13PortfolioCards.push(portfolioCardObject);
    let portfolioCardOutput = "";
    lesson13PortfolioCards.forEach(function(portfolioCard){
        portfolioCardOutput += "<div>"+
        "<h3>" + portfolioCard.name + "</h3>" + 
        "<p>" + portfolioCard.role + "</p>" +
        "</div>"
    });
    lesson13PortfolioCardOutput.innerHTML = portfolioCardOutput;
    lesson13PortfolioCardProjectInput.value = "";
    lesson13PortfolioCardRoleInput.value = "";
}

lesson13PortfolioCardBtn.addEventListener("click", addPortfolioCards);





//Updating Existing Data

let lesson13UpdateCourseBtn =
document.getElementById("lesson13UpdateCourseBtn");

let lesson13UpdateCourseOutput =
document.getElementById("lesson13UpdateCourseOutput");

let lesson13UpdateCourseObjects = [
    {
        name: "HTML"
    }
];

function displayCourses() {

    let output = "";

    lesson13UpdateCourseObjects.forEach(function(course){

        output += course.name + "<br>";

    });

    lesson13UpdateCourseOutput.innerHTML = output;
}

displayCourses();

lesson13UpdateCourseBtn.addEventListener(
    "click",
    function(){

        lesson13UpdateCourseObjects[0].name =
        "HTML & CSS";

        displayCourses();

    }
);



//mini project 2

let lesson13UpdateSkillBtn =
document.getElementById("lesson13UpdateSkillBtn");

let lesson13UpdateSkillOutput =
document.getElementById("lesson13UpdateSkillOutput");

let lesson13UpdateSkillObjects = [
    {
        name: "JavaScript"
    }
];

function displaySkills(){

    let output = "";

    lesson13UpdateSkillObjects.forEach(function(skill){

        output += skill.name + "<br>";

    });

    lesson13UpdateSkillOutput.innerHTML = output;
}

displaySkills();

lesson13UpdateSkillBtn.addEventListener(
    "click",
    function(){

        lesson13UpdateSkillObjects[0].name =
        "JavaScript ES6";

        displaySkills();

    }
);


//project 3 - team updater

let lesson13UpdateTeamBtn =
document.getElementById("lesson13UpdateTeamBtn");

let lesson13UpdateTeamOutput =
document.getElementById("lesson13UpdateTeamOutput");

let lesson13UpdateTeamObjects = [
    {
        name: "Samuel",
        role: "Student"
    }
];

function displayTeam(){

    let output = "";

    lesson13UpdateTeamObjects.forEach(function(member){

        output +=
        member.name +
        " - " +
        member.role +
        "<br>";

    });

    lesson13UpdateTeamOutput.innerHTML = output;
}

displayTeam();

lesson13UpdateTeamBtn.addEventListener(
    "click",
    function(){

        lesson13UpdateTeamObjects[0].role =
        "Frontend Developer";

        displayTeam();

    }
);


// Portfolio Project Updater

let lesson13UpdatePortfolioBtn =
document.getElementById("lesson13UpdatePortfolioBtn");

let lesson13UpdatePortfolioOutput =
document.getElementById("lesson13UpdatePortfolioOutput");

let lesson13UpdatePortfolioProjects = [
    {
        name: "SaveWise",
        role: "UI/UX Designer"
    }
];

function displayPortfolio(){

    let output = "";

    lesson13UpdatePortfolioProjects.forEach(function(project){

        output +=
        "<div>" +
        "<h3>" + project.name + "</h3>" +
        "<p>" + project.role + "</p>" +
        "</div>";

    });

    lesson13UpdatePortfolioOutput.innerHTML = output;
}

displayPortfolio();

lesson13UpdatePortfolioBtn.addEventListener(
    "click",
    function(){

        lesson13UpdatePortfolioProjects[0].name =
        "SaveWise Finance Tracker";

        displayPortfolio();

    }
);



//Deleting Existing Data

let lesson13DeleteCourseBtn =
document.getElementById("lesson13DeleteCourseBtn");

let lesson13DeleteCourseOutput =
document.getElementById("lesson13DeleteCourseOutput");

let lesson13DeleteCourseObjects = [
    {
        name: "HTML"
    },
    {
        name: "CSS"
    }
];

function displayDeleteCourses(){

    let output = "";

    lesson13DeleteCourseObjects.forEach(function(course){

        output += course.name + "<br>";

    });

    lesson13DeleteCourseOutput.innerHTML = output;
}

displayDeleteCourses();

lesson13DeleteCourseBtn.addEventListener(
    "click",
    function(){

        lesson13DeleteCourseObjects.splice(0, 1);

        displayDeleteCourses();

    }
);


//Mini Project 2 - Skill remover
let lesson13DeleteSkillBtn =
document.getElementById("lesson13DeleteSkillBtn");

let lesson13DeleteSkillOutput =
document.getElementById("lesson13DeleteSkillOutput");

let lesson13DeleteSkillObjects = [
    {
        name: "JavaScript"
    },
    {
        name: "React"
    }
];

function displayDeleteSkills(){

    let output = "";

    lesson13DeleteSkillObjects.forEach(function(skill){

        output += skill.name + "<br>";

    });

    lesson13DeleteSkillOutput.innerHTML = output;
}

displayDeleteSkills();

lesson13DeleteSkillBtn.addEventListener(
    "click",
    function(){

        lesson13DeleteSkillObjects.splice(0, 1);

        displayDeleteSkills();

    }
);



// Team Member Remover


let lesson13DeleteTeamBtn =
document.getElementById("lesson13DeleteTeamBtn");

let lesson13DeleteTeamOutput =
document.getElementById("lesson13DeleteTeamOutput");

let lesson13DeleteTeamObjects = [
    {
        name: "Samuel",
        role: "Frontend Developer"
    },
    {
        name: "Ama",
        role: "UI Designer"
    }
];

function displayDeleteTeam(){

    let output = "";

    lesson13DeleteTeamObjects.forEach(function(member){

        output +=
        member.name +
        " - " +
        member.role +
        "<br>";

    });

    lesson13DeleteTeamOutput.innerHTML = output;
}

displayDeleteTeam();

lesson13DeleteTeamBtn.addEventListener(
    "click",
    function(){

        lesson13DeleteTeamObjects.splice(0, 1);

        displayDeleteTeam();

    }
);


//Portfolio Project Deleter

let lesson13DeletePortfolioBtn =
document.getElementById("lesson13DeletePortfolioBtn");

let lesson13DeletePortfolioOutput =
document.getElementById("lesson13DeletePortfolioOutput");

let lesson13DeletePortfolioProjects = [
    {
        name: "SaveWise",
        role: "UI/UX Designer"
    },
    {
        name: "Vendor Dashboard",
        role: "Product Designer"
    },
    {
        name: "Checkout Redesign",
        role: "UX Researcher"
    }
];

function displayDeletePortfolio(){

    let output = "";

    lesson13DeletePortfolioProjects.forEach(function(project){

        output +=
        "<div>" +
        "<h3>" + project.name + "</h3>" +
        "<p>" + project.role + "</p>" +
        "</div>";

    });

    lesson13DeletePortfolioOutput.innerHTML = output;
}

displayDeletePortfolio();

lesson13DeletePortfolioBtn.addEventListener(
    "click",
    function(){

        lesson13DeletePortfolioProjects.splice(0, 1);

        displayDeletePortfolio();

    }
);


//Local Storage + Arrays of Objects

// let skills = [
//     "HTML",
//     "CSS",
//     "JavaScript"
// ]

// localstorage.setitem("skills", JSON.stringify(skills)); //saving an array

// let storedSkills = localstorage.getItem("skills");
// let skills = JSON.parse(storedSkills); //retrieving or loading an array

/*
let projects = [
    {
        name: "SaveWise",
        role: "UI/UX Designer"
    }
];

//save
localStorage.setItem(
    "portfolioProjects",
    JSON.stringify(projects)
);

//Load

let projects = JSON.parse(localStorage.getItem("portfolioProjects"));
*/


//mini project 1 - save courses 

let lesson13StorageCourseSaveBtn =
document.getElementById("lesson13StorageCourseSaveBtn");

let lesson13StorageCourseOutput =
document.getElementById("lesson13StorageCourseOutput");

let lesson13StorageCourses = [
    "HTML",
    "CSS"
];

lesson13StorageCourseSaveBtn.addEventListener(
    "click",
    function(){

        localStorage.setItem(
            "lesson13StorageCourses",
            JSON.stringify(
                lesson13StorageCourses
            )
        );

        lesson13StorageCourseOutput.textContent =
        "Courses Saved";

    }
);

//Mini Project 2 — Save Array of Objects

let lesson13StorageSkillSaveBtn =
document.getElementById("lesson13StorageSkillSaveBtn");

let lesson13StorageSkillOutput =
document.getElementById("lesson13StorageSkillOutput");

let lesson13StorageSkillObjects = [
    {
        name: "JavaScript"
    }
];

lesson13StorageSkillSaveBtn.addEventListener(
    "click",
    function(){

        localStorage.setItem(
            "lesson13StorageSkillObjects",
            JSON.stringify(
                lesson13StorageSkillObjects
            )
        );

        lesson13StorageSkillOutput.textContent =
        "Skills Saved";

    }
);



//Mini Project 3 — Save and Load Skills

let lesson13StorageSaveSkillsBtn =
document.getElementById("lesson13StorageSaveSkillsBtn");

let lesson13StorageLoadSkillsBtn =
document.getElementById("lesson13StorageLoadSkillsBtn");

let lesson13StorageSkillsOutput =
document.getElementById("lesson13StorageSkillsOutput");

let lesson13StorageSkills = [
    "HTML",
    "CSS",
    "JavaScript"
];

lesson13StorageSaveSkillsBtn.addEventListener(
    "click",
    function(){

        localStorage.setItem(
            "lesson13StorageSkills",
            JSON.stringify(
                lesson13StorageSkills
            )
        );

    }
);

lesson13StorageLoadSkillsBtn.addEventListener(
    "click",
    function(){

        let savedSkills =
        localStorage.getItem(
            "lesson13StorageSkills"
        );

        let loadedSkills =
        JSON.parse(savedSkills);

        lesson13StorageSkillsOutput.textContent =
        loadedSkills.join(", ");

    }
);




//Project — Persistent Portfolio Manager

let lesson13StoragePortfolioSaveBtn = document.getElementById("lesson13StoragePortfolioSaveBtn");
let lesson13StoragePortfolioLoadBtn = document.getElementById("lesson13StoragePortfolioLoadBtn");
let lesson13StoragePortfolioOutput = document.getElementById("lesson13StoragePortfolioOutput");

let lesson13StoragePortfolioProjects = [
    {
        name: "SaveWise",
        role: "UI/UX Designer"
    },
    {
        name: "Vendor Dashboard",
        role: "Product Designer"
    }
];

lesson13StoragePortfolioSaveBtn.addEventListener(
    "click", function(){
        localStorage.setItem( 
            "lesson13StoragePortfolioProjects", JSON.stringify(lesson13StoragePortfolioProjects));

            lesson13StorageSkillsOutput.textContent = "Projects Saved";


        });



lesson13StoragePortfolioLoadBtn.addEventListener(
    "click", function (){
        let loadedProjects = JSON.parse(localStorage.getItem("lesson13StoragePortfolioProjects"));

        output = "";
        loadedProjects.forEach(
            function(sammy){
                output += sammy.name + " - " + sammy.role + "<br>";

            }
        )
        lesson13StoragePortfolioOutput.innerHTML = output;
    }
);




//Portfolio Project Manager Pro
/*
let lesson13FinalProjectNameInput = document.getElementById("lesson13FinalProjectNameInput");
let lesson13FinalProjectRoleInput = document.getElementById("lesson13FinalProjectRoleInput");
let lesson13FinalProjectAddBtn = document.getElementById("lesson13FinalProjectAddBtn");
let lesson13FinalDeleteBtn = document.getElementById("lesson13FinalDeleteBtn");
let lesson13FinalSaveBtn = document.getElementById("lesson13FinalSaveBtn");
let lesson13FinalLoadBtn = document.getElementById("lesson13FinalLoadBtn");
let lesson13FinalOutput = document.getElementById("lesson13FinalOutput");

let lesson13FinalProjects = [];

function displayFinalProjects(){

 let finalNameInput = lesson13FinalProjectNameInput.value.trim();
 let finalRoleInput = lesson13FinalProjectRoleInput.value.trim();


    if (finalNameInput === "" || finalRoleInput === ""){
        lesson13FinalOutput.textContent = "Please complete all fields.";
        return;
    }

    let finalProjectObjects = {
        name: finalNameInput,
        role: finalRoleInput
    }

         let finalOutput = "";
        lesson13FinalProjects.push(finalProjectObjects);
        lesson13FinalProjects.forEach(function(finalProject){
            finalOutput += "<div>" + "<h3>" + finalProject.name + "</h3>" + "<p>" + finalProject.role + "</p>" + "</div>";
        });

        lesson13FinalOutput.innerHTML = finalOutput;
        lesson13FinalProjectNameInput.value = "";
        lesson13FinalProjectRoleInput.value = "";



}

lesson13FinalAddBtn.addEventListener(
    "click",
    displayFinalProjects
);


lesson13FinalDeleteBtn.addEventListener(
    "click",
    function(){
        lesson13FinalProjects.splice(0, 1);
        displayFinalProjects();
    }
);


lesson13FinalSaveBtn.addEventListener(
    "click",
    function(){localStorage.setItem("lesson13FinalProjects", JSON.stringify(lesson13FinalProjects));
    lesson13FinalOutput.textContent = "Projects Saved";
    });

lesson13FinalLoadBtn.addEventListener(
    "click",
    function(){
        let finalloadedProjects = JSON.parse(localStorage.getItem("lesson13FinalProjects"));
        let finalOutput = "";
        finalloadedProjects.forEach(function(finalProject){
            finalOutput += "<div>" + "<h3>" + finalProject.name + "</h3>" + "<p>" + finalProject.role + "</p>" + "</div>";
        });
        lesson13FinalOutput.innerHTML = finalOutput;
    });
*/    //wrong




// Portfolio Project Manager Pro

let lesson13FinalProjectNameInput =
document.getElementById(
    "lesson13FinalProjectNameInput"
);

let lesson13FinalProjectRoleInput =
document.getElementById(
    "lesson13FinalProjectRoleInput"
);

let lesson13FinalProjectAddBtn =
document.getElementById(
    "lesson13FinalProjectAddBtn"
);

let lesson13FinalDeleteBtn =
document.getElementById(
    "lesson13FinalDeleteBtn"
);

let lesson13FinalSaveBtn =
document.getElementById(
    "lesson13FinalSaveBtn"
);

let lesson13FinalLoadBtn =
document.getElementById(
    "lesson13FinalLoadBtn"
);

let lesson13FinalOutput =
document.getElementById(
    "lesson13FinalOutput"
);


// MAIN ARRAY

let lesson13FinalProjects = [];


// DISPLAY PROJECTS

function displayProjects() {

    let output = "";

    lesson13FinalProjects.forEach(
        function(project) {

            output +=
            "<div>" +
                "<h3>" +
                project.name +
                "</h3>" +

                "<p>" +
                project.role +
                "</p>" +
            "</div>";

        }
    );

    lesson13FinalOutput.innerHTML =
    output;
}


// ADD PROJECT

function addProject() {

    let cleanName =
    lesson13FinalProjectNameInput.value.trim();

    let cleanRole =
    lesson13FinalProjectRoleInput.value.trim();

    if (
        cleanName === "" ||
        cleanRole === ""
    ) {

        lesson13FinalOutput.textContent =
        "Please complete all fields.";

        return;
    }

    let projectObject = {

        name: cleanName,

        role: cleanRole

    };

    lesson13FinalProjects.push(
        projectObject
    );

    displayProjects();

    lesson13FinalProjectNameInput.value =
    "";

    lesson13FinalProjectRoleInput.value =
    "";
}


// DELETE PROJECT

function deleteProject() {

    if (
        lesson13FinalProjects.length === 0
    ) {

        lesson13FinalOutput.textContent =
        "No projects to delete.";

        return;
    }

    lesson13FinalProjects.splice(
        0,
        1
    );

    displayProjects();
}


// SAVE PROJECTS

function saveProjects() {

    localStorage.setItem(
        "lesson13FinalProjects",
        JSON.stringify(
            lesson13FinalProjects
        )
    );

    lesson13FinalOutput.textContent =
    "Projects Saved";
}


// LOAD PROJECTS

function loadProjects() {

    let savedProjects =
    localStorage.getItem(
        "lesson13FinalProjects"
    );

    if (
        savedProjects === null
    ) {

        lesson13FinalOutput.textContent =
        "No saved projects found.";

        return;
    }

    lesson13FinalProjects =
    JSON.parse(
        savedProjects
    );

    displayProjects();
}


// EVENT LISTENERS

lesson13FinalAddBtn.addEventListener(
    "click",
    addProject
);

lesson13FinalDeleteBtn
.addEventListener(
    "click",
    deleteProject
);

lesson13FinalSaveBtn
.addEventListener(
    "click",
    saveProjects
);

lesson13FinalLoadBtn
.addEventListener(
    "click",
    loadProjects
);



//mini project 1
let lesson14NameInput = document.getElementById("lesson14NameInput");
let lesson14NameBtn = document.getElementById("lesson14NameBtn");
let lesson14NameOutput = document.getElementById("lesson14NameOutput");

lesson14NameBtn.addEventListener(
    "click", 
    function(){
        let name14 = lesson14NameInput.value.trim();
        lesson14NameOutput.textContent = `Hello, ${name14}!`;
    }
)



//Mini project 2

let lesson14SkillInput = document.getElementById("lesson14SkillInput");
let lesson14SkillBtn = document.getElementById("lesson14SkillBtn");
let lesson14SkillOutput = document.getElementById("lesson14SkillOutput");

lesson14SkillBtn.addEventListener(
    "click",
    function(){
        let skill14 = lesson14SkillInput.value.trim();
        lesson14SkillOutput.textContent = `Favorite Skill: ${skill14}`;
    });


    //Mini project 3

    let lesson14RoleInput = document.getElementById("lesson14RoleInput");
    let lesson14RoleBtn = document.getElementById("lesson14RoleBtn");
    let lesson14RoleOutput = document.getElementById("lesson14RoleOutput");

    lesson14RoleBtn.addEventListener(
        "click",
        function(){
            let role14 = lesson14RoleInput.value.trim();
            lesson14RoleOutput.textContent = `Current Role: ${role14}`;
            lesson14RoleInput.value = "";
        }
    )



    //Project - mini profile generator
    let lesson14ProfileNameInput = document.getElementById("lesson14ProfileNameInput");
    let lesson14ProfileRoleInput = document.getElementById("lesson14ProfileRoleInput");
    let lesson14ProfileGenerateBtn = document.getElementById("lesson14ProfileGenerateBtn");
    let lesson14ProfileOutput = document.getElementById("lesson14ProfileOutput");

    lesson14ProfileGenerateBtn.addEventListener(
        "click",
        function(){
            let profileName = lesson14ProfileNameInput.value.trim();
            let profileRole = lesson14ProfileRoleInput.value.trim();

            if (profileName === "" || profileRole === "") {
                lesson14ProfileOutput.textContent = "Please complete all fields.";
                return;
            }

            lesson14ProfileOutput.innerHTML = 
            `<p>Name: ${profileName} </p>
             <p>Role: ${profileRole}</p>`;
            lesson14ProfileNameInput.value = "";
            lesson14ProfileRoleInput.value = "";
        }
    )




    //Rendering HTML with Template Literals
//mini project 1 - skill array renderer

let lesson14Skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

let lesson14SkillArrayOutput =
document.getElementById(
    "lesson14SkillArrayOutput"
);

let lesson14ArrayOutput = "";

lesson14Skills.forEach(function(skill){

    lesson14ArrayOutput += `
    <div>
        ${skill}
    </div>
    `;

});

lesson14SkillArrayOutput.innerHTML =
lesson14ArrayOutput;


//mini project 2

roleArray = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer"
];

let lesson14RoleArrayOutput = document.getElementById("lesson14RoleArrayOutput");

let RoleArrayOutput = "";

roleArray.forEach(function(samRole){
   RoleArrayOutput += `<div>
        <h3>${samRole}</h3>
    </div>`
});

lesson14RoleArrayOutput.innerHTML = RoleArrayOutput;

//mini project 3

let lesson14Projects = [
    "SaveWise",
    "Vendor Dashboard",
    "Checkout Redesign"
];

let lesson14ProjectArrayOutput =
document.getElementById(
    "lesson14ProjectArrayOutput"
);

let lesson14ProjectOutput = "";

lesson14Projects.forEach(function(project){

    lesson14ProjectOutput += `
    <div>
        ${project}
    </div>
    `;

});

lesson14ProjectArrayOutput.innerHTML =
lesson14ProjectOutput;


//project - array of objects renderer

let  portfolioArray = [
    {
        name: "SaveWise",
        role: "Product Designer"
    },
    {
        name: "Vendor Dashboard",
        role: "UI/UX Designer"
    }
];

let lesson14PortfolioCardsOutput =
document.getElementById(
    "lesson14PortfolioCardsOutput"
);

portProjectOutput = "";
portfolioArray.forEach(
    function(samProject){
portProjectOutput += `
<div>
    <h3> ${ samProject.name} </h3>
    <p> ${ samProject.role} </p>
</div>
`;
    }
)

lesson14PortfolioCardsOutput.innerHTML = portProjectOutput;


//CRUD replacement with template literals
//project 1
let lesson14CourseCardsOutput = document.getElementById("lesson14CourseCardsOutput");

let lesson14CourseCards = [
    {
        name: "Google UX Design"
    },

    {
        name: "ALX Data Analytics"
    }
];

function courseCard(){
 let cardOutput = "";
lesson14CourseCards.forEach(
    function(samCard){
       cardOutput += `
       <div>
            <h3>${samCard.name}</h3>
       </div>
       ` 
    }
)
lesson14CourseCardsOutput.innerHTML = cardOutput; 

}

courseCard()



//Mini project 2

let lesson14SkillCardsOutput = document.getElementById("lesson14SkillCardsOutput");

function skillCarding(){
let lesson14SkillCards = [
    {
        skill: "HTML"
    },

    {
        skill: "CSS"
    },

    {
        skill: "JavaScript"
    }
];


skillCardOutput = "";
lesson14SkillCards.forEach(
    function(skillCard){
        skillCardOutput += `
        <div>
        <p>${skillCard.skill}</p>
        </div>
        `
    }
)

lesson14SkillCardsOutput.innerHTML = skillCardOutput;

}

skillCarding();



//Mini project 3

let lesson14RoleCardsOutput =
document.getElementById(
    "lesson14RoleCardsOutput"
);

let lesson14RoleCards = [

    {
        role: "Designer"
    },

    {
        role: "Frontend Developer"
    }

];

function displayRoleCards(){

    let roleOutput = "";

    lesson14RoleCards.forEach(
        function(roleCard){

            roleOutput += `
            <div>
                <p>${roleCard.role}</p>
            </div>
            `;

        }
    );

    lesson14RoleCardsOutput.innerHTML =
    roleOutput;

}

displayRoleCards();


//Project - Portfolio showcase

let lesson14PortfolioShowcaseProjectsOutput = document.getElementById("lesson14PortfolioShowcaseProjectsOutput");

let lesson14PortfolioShowcaseProjects = [
    {
        name: "SaveWise",
        role: "Product Designer"
    },

    {
        name: "Vendor Dashboard",
        role: "UI/UX Designer"
    },

    {
        name: "Checkout Redesign",
        role: "UX Designer"
    }
];


function projectShowCase(){

let showCaseOutput = "";
lesson14PortfolioShowcaseProjects.forEach(
    function(showProject){
        showCaseOutput += `
        <div>
            <h3>${showProject.name} </h3>

            <p>${showProject.role} </p>

        </div>
        
        `
    }
)


lesson14PortfolioShowcaseProjectsOutput.innerHTML = showCaseOutput;

}

projectShowCase();


//Functions with Parameters

 function showSkill(skill){
    console.log(skill);
 }

 showSkill("JavaScript");
 showSkill("HTML");
 showSkill("UIUX");


 function displayProject(project) {
    console.log(project);
}

displayProject("SaveWise");
displayProject("Vendor Dashboard");
displayProject("Checkout Redesign");


//Multiple Parameters

function showProject(name, role) {
    console.log(name + " - " + role);
}

showProject("SaveWise", "Product Designer");



function showPortfolio(project, role) {
    console.log(project + " - " + role);
}

showPortfolio(
    "SaveWise",
    "Product Designer"
);

showPortfolio(
    "Vendor Dashboard",
    "UI/UX Designer"
);



function showCourse(course, level) {
    console.log(course + " : " + level);
}

showCourse(
    "JavaScript",
    "Beginner"
);


function portfolioCard(project, role) {
    console.log(project + " - " + role);
}

portfolioCard(
    "SaveWise",
    "Product Designer"
);

portfolioCard(
    "Vendor Dashboard",
    "UI/UX Designer"
);



function technicianJob(
    technician,
    location
) {
    console.log(
        technician + " : " + location
    );
}

technicianJob(
    "Kwame",
    "Accra"
);

technicianJob(
    "Michael",
    "Kumasi"
);



//Parameter + Template Literals
//example 1
function showProject(project, role) {
    console.log(`${project} - ${role}`);
}


//example 2
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Samuel");


//example 3
function showSkill(skill) {
    console.log(`Favorite Skill: ${skill}`);
}

showSkill("JavaScript");

//example 4
function portfolioCard(project, role) {
    let output = `
        <div>
            <h3>${project}</h3>
            <p>${role}</p>
        </div>
    `;

    console.log(output);
}

portfolioCard(
    "SaveWise",
    "Product Designer"
);


//example 5 

function technicianCard(
    technician,
    location
) {
    let output = `
        <div>
            <h3>${technician}</h3>
            <p>${location}</p>
        </div>
    `;

    console.log(output);
}

technicianCard(
    "Kwame",
    "Accra"
);



//Parameters Inside DOM Projects

//example 1

let lesson15Output = document.getElementById("lesson15Output");
function showName(name) {
    lesson15Output.textContent = name;
}

showName("Samuel");
showName("Kwame");
showName("Michael");


//example 2
let lesson15Output2 = document.getElementById("lesson15Output2");

function showSkill15(skill) {
    lesson15Output2.textContent =
    `Favorite Skill: ${skill}`;
}

showSkill15("JavaScript");


//Rendering HTML

let lesson15Output3 = document.getElementById("lesson15Output3");

function projectCard15(
    project,
    role
) {

    lesson15Output3.innerHTML = `
        <div>
            <h3>${project}</h3>
            <p>${role}</p>
        </div>
    `;
}

projectCard15(
    "SaveWise",
    "Product Designer"
);



//mini project 1

let lesson15NameInput = document.getElementById("lesson15NameInput");
let lesson15NameBtn = document.getElementById("lesson15NameBtn");
let lesson15NameOutput = document.getElementById("lesson15NameOutput");

function greeting(name) {
    lesson15NameOutput.textContent = `Hello ${name}`;
}

lesson15NameBtn.addEventListener(
    "click",
    function () {
        let enterName = lesson15NameInput.value.trim();

        if (enterName === "") {
            lesson15NameOutput.textContent = "Please enter a name.";
            return;
        }

        greeting(enterName);

        lesson15NameInput.value = "";
    }
);


// mini project 2

let lesson15SkillInput = document.getElementById("lesson15SkillInput");
let lesson15SkillBtn = document.getElementById("lesson15SkillBtn");
let lesson15SkillOutput = document.getElementById("lesson15SkillOutput");

function showSkilling(skill) {
    lesson15SkillOutput.textContent = `Favorite Skill: ${skill}`;
}

lesson15SkillBtn.addEventListener(
    "click",
    function () {
        let enterSkill = lesson15SkillInput.value.trim();

        if (enterSkill === "") {
            lesson15SkillOutput.textContent = "Please enter a skill.";
            return;
        }

        showSkilling(enterSkill);

        lesson15SkillInput.value = "";
    }
);


//Mini project 3

//mini project 3
let lesson15RoleInput = document.getElementById("lesson15RoleInput");
let lesson15RoleBtn = document.getElementById("lesson15RoleBtn");
let lesson15RoleOutput = document.getElementById("lesson15RoleOutput");

function showRole(role){
    lesson15RoleOutput.textContent = `Current Role: ${role}`;
}


lesson15RoleBtn.addEventListener("click",
    function(){
        let trimmedRole = lesson15RoleInput.value.trim();

        if (trimmedRole === ""){
            lesson15RoleOutput.textContent = "Please input role name";
            return;
        }

        showRole(trimmedRole);
        lesson15RoleInput.value = "";
    }
);



//Project - card generator


let lesson15ProjectInput = document.getElementById("lesson15ProjectInput");
let lesson15ProjectRoleInput = document.getElementById("lesson15ProjectRoleInput");
let lesson15ProjectBtn = document.getElementById("lesson15ProjectBtn");
let lesson15ProjectOutput = document.getElementById("lesson15ProjectOutput");

function createProjectCard(projectName, projectRole){
    lesson15ProjectOutput.innerHTML +=
    `<div>
    <h3>${projectName}<h3>
    <p> ${projectRole} </p>
    </div>
    `;
}


lesson15ProjectBtn.addEventListener(
    "click", function(){
        let cleanInput = lesson15ProjectInput.value.trim();
        let cleanRoleInput = lesson15ProjectRoleInput.value.trim();

        if (cleanInput === "" || cleanRoleInput === ""){
            lesson15ProjectOutput.textContent = "Please complete all fields.";
            return;

        }

        createProjectCard(
    cleanInput,
    cleanRoleInput);
    lesson15ProjectInput.value = "";
    lesson15ProjectRoleInput.value = "";
    }
)



//RETURN STATEMENTS
function calculatePrice(price, quantity){
  return price * quantity;  
 }

 let total = calculatePrice(50, 3);
 console.log(`Your total price is GHS${total}`)


 //example 2
 function createProjectName(name){
    return `Project: ${name}`
 }

 let project = createProjectName("SaveWise");
 console.log(project);

 //Parameters + Return
function introduce(name, role){
    return `Hello ${name}, you're a ${role}.`
}

let introduction = introduce("Samuel", "Frontend Developer");
console.log(introduction);

//return ends a function > anything after return in the function doesn't execute

//returning an object

function createProject(){
    return{
        name: "SaveWise",
        role: "Product Designer"
    }
}

let projectObjec = createProject();
console.log(projectObjec.name);
console.log(projectObjec.role);
console.log(projectObjec);


//returning an array

function getSkill(){
    return ["HTML", "JavaScript", "UIUX", "Product Design"];
}

let skillis = getSkill();
console.log(skillis);

skillis.forEach(
    function(skill){
        console.log(skill)
    }
)


//Mini Project 1 — Greeting Generator

let lesson16NameInput = document.getElementById("lesson16NameInput");
let lesson16NameBtn = document.getElementById("lesson16NameBtn");
let lesson16NameOutput = document.getElementById("lesson16NameOutput");

function createGreeting(name) {
    return `Hello ${name}!`;
}

lesson16NameBtn.addEventListener("click", function () {
    let name = lesson16NameInput.value.trim();

    if (name === "") {
        lesson16NameOutput.textContent = "Please enter your name.";
        return;
    }

    let greeting = createGreeting(name);

    lesson16NameOutput.textContent = greeting;

    lesson16NameInput.value = "";
});


//mini project 2
function createProjectCard(name, role){
    return  `
    <div>
        <h3>${name}</h3>
        <p>${role}</p>
    </div>
    `
};

let card = createProjectCard(
    "SaveWise",
    "Product Designer"
)

console.log(card)

let output = document.getElementById("lesson16ProjectOutput");

output.innerHTML = card;


//project 3 - Project Information Generator

let lesson16ProjectNameInput = document.getElementById("lesson16ProjectNameInput");
let lesson16ProjectRoleInput = document.getElementById("lesson16ProjectRoleInput");
let lesson16ProjectBtn = document.getElementById("lesson16ProjectBtn");
let lesson16ProjectOutput = document.getElementById("lesson16ProjectOutput");

function createProject(name, role) {
    return `
        <div>
            <h3>${name}</h3>
            <p>Role: ${role}</p>
        </div>
    `;
}

lesson16ProjectBtn.addEventListener("click", function () {

    let projectName = lesson16ProjectNameInput.value.trim();
    let projectRole = lesson16ProjectRoleInput.value.trim();

    if (projectName === "" || projectRole === "") {
        lesson16ProjectOutput.textContent = "Please complete all fields.";
        return;
    }

    let projectCard = createProject(projectName, projectRole);

    lesson16ProjectOutput.innerHTML = projectCard;

    lesson16ProjectNameInput.value = "";
    lesson16ProjectRoleInput.value = "";
});


//mini project 4 - Calculate Project Total

let lesson16PriceInput = document.getElementById("lesson16PriceInput");
let lesson16QuantityInput = document.getElementById("lesson16QuantityInput");
let lesson16CalculateBtn = document.getElementById("lesson16CalculateBtn");
let lesson16CalculateOutput = document.getElementById("lesson16CalculateOutput");

function calculateTotal(price, quantity) {
    return price * quantity;
}

lesson16CalculateBtn.addEventListener("click", function () {

    let price = Number(lesson16PriceInput.value);
    let quantity = Number(lesson16QuantityInput.value);

    if (price <= 0 || quantity <= 0) {
        lesson16CalculateOutput.textContent = "Enter valid values.";
        return;
    }

    let total = calculateTotal(price, quantity);

    lesson16CalculateOutput.textContent = `Total: GHS ${total}`;
});


// project - profile generator

let lesson16ProfileNameInput =
    document.getElementById("lesson16ProfileNameInput");

let lesson16ProfileRoleInput =
    document.getElementById("lesson16ProfileRoleInput");

let lesson16ProfileSkillInput =
    document.getElementById("lesson16ProfileSkillInput");

let lesson16ProfileBtn =
    document.getElementById("lesson16ProfileBtn");

let lesson16ProfileOutput =
    document.getElementById("lesson16ProfileOutput");


function createProfile(name, role, skill) {

    return `
        <div>
            <h2>${name}</h2>

            <p>Role: ${role}</p>

            <p>Skill: ${skill}</p>
        </div>
    `;
}


lesson16ProfileBtn.addEventListener("click", function () {

    let name =
        lesson16ProfileNameInput.value.trim();

    let role =
        lesson16ProfileRoleInput.value.trim();

    let skill =
        lesson16ProfileSkillInput.value.trim();


    if (name === "" || role === "" || skill === "") {

        lesson16ProfileOutput.textContent =
            "Please complete all fields.";

        return;
    }


    let profile =
        createProfile(name, role, skill);


    lesson16ProfileOutput.innerHTML =
        profile;


    lesson16ProfileNameInput.value = "";
    lesson16ProfileRoleInput.value = "";
    lesson16ProfileSkillInput.value = "";
});



//SCOPE - Global, function/local, block scope

let lesson17ProjectInput =
    document.getElementById("lesson17ProjectInput");

let lesson17ProjectBtn =
    document.getElementById("lesson17ProjectBtn");

let lesson17ProjectOutput =
    document.getElementById("lesson17ProjectOutput");


function displayingProject() {

    let projectName =
        lesson17ProjectInput.value.trim();

    if (projectName === "") {

        lesson17ProjectOutput.textContent =
            "Please enter a project.";

        return;
    }

    lesson17ProjectOutput.textContent =
        `Project: ${projectName}`;
}


lesson17ProjectBtn.addEventListener(
    "click",
    displayingProject
);