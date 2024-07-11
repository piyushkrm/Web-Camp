function groot(){
    console.log("This is tutorial 60");
}
groot();

// Arrow function to make easy funtion 
let grout = ()=> {
    console.log("This is arrow function");
}
grout();

setTimeout(() => {
    console.log("This is time out function")
}, 2000);


let sub = (a, b)=>
{
    return a-b;
}

let mul = (a, b)=>
{
    return a*b;
}

let div = (a, b)=>
{
    return a/b;
}

let sum = (a, b)=>
{
    return a+b;
}

// Shortcut--ka--shortcut
let add = (a, b)=> a+b;

// Shortcut--ka--shortcut--ka--shortcut
let half = a => a/2;
// but this shortcut are used for only one argumrnt 


// Shortcut of function
let grroot = () => console.log("Marvels");
grroot()

// NOTE:-- When we have no any argument then we declare blank argument
// NOTE:-- let grroott = //This is wrong because here are no any argument// => console.log("marvels");
// grroot()

// Create object and methods


// NOTE:-- Agar aapne arrow function use kra hai or aap ".this" keyword ka use kr rhe hai function ko call karne ke liye to wo ".this" keyword apne parrent ke ".this" keyword ko chek krega naki khud ke ander ki this ko check krega 
// NOTE:-- Array function and this function is also called lexical function

// NOTE:--- Every function have own parrent this and when use arrow function then arrow function have own this

let object={
    greating: "Hey",
    names: ["Pihu", "Pallo", "Raghav", "Dell"],
    speak(){
        this.names.forEach((std)=>{
            console.log(this.greating +" Im "+ std);
        });
    }
}
object.speak()

// in this function ".this" keyword are find funtion in own declaring function and show function is undefined
let objectt={
    greating: "Hey",
    names: ["Pihu", "Pallo", "Raghav", "Dell"],
    speak(){
        this.names.forEach(function s (std){
            console.log(this.greating +" Im "+ std);
        });
    }
}
object.speak()