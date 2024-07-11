// Synchronous or blocking---->Line-by-line code execution
// Asynchronous or non-blocking----->Line-by-line code execution not guaranted----callbacks will fire

// Asynchronous Function
const fs = require("fs");
fs.readFile("delete.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");

//Synchronous Function
const fs = require("fs");
let text = fs.readFileSync("delete.txt", "utf-8");
text = text.replace("file", "filee");
console.log("The content of the file is ")
console.log(text);