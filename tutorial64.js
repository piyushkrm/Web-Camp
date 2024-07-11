// const fs =  require("fs");
// const text = fs.readFileSync("delete.txt", "utf-8");
// console.log(text);

const fs = require("fs");
let text = fs.readFileSync("delete.txt", "utf-8");
text = text.replace("file", "filee");
console.log("The content of the file is ")
console.log(text);

console.log("creating a new file ");
fs.writeFileSync("delete.txt", text);