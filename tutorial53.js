console.log("This is tutorial 53");
let name = "Piyush";
let name1 = "Aayush";
let name2 = "Harsh";
let name3 = "Palak";
let greetText = "Morning"

// Simple
console.log(name);

// Using variable
console.log(name + " is a Coder");
console.log(name1 + " is a Cricketer");
console.log(name2 + " is a Singer");
console.log(name3 + " is a Dancer");

// Use functions-----code reausebility
function shot(name) {
    console.log(name + " is a Coder")
};

function shot(name, greetText) {
    let name1 = "Name1"
    console.log(greetText + " " + name);
    console.log(name + " is a Coder")
};

function shot(name, greetText = "Good Evening") {
    let name1 = "Name1"
    console.log(greetText + " " + name);
    console.log(name + " is a Coder")
};

// Function calling
shot(name, greetText);
shot(name1, greetText);
shot(name2, greetText);
shot(name3);

function sum(a, b, c) {
    let z = a + b + c;
    return z;
    // console.log("This line is never execute because of here are function are stopped on return time");

}

let returnvalue = sum(10, 25, 75);
console.log(returnvalue);