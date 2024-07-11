console.log("Welcome back 😊")

let jsonObj = {
    name: "Piyush",
    phn: 74882,
    food: "Kaddu"
}
console.log(jsonObj);

// javastring object convert to string using strinify
let json = JSON.stringify(jsonObj); //stringify is a function
console.log(json)
//perform all string operation on this string

json = json.replace('Kaddu', 'kathal');
console.log(json);

json = json.toUpperCase('json');
console.log(json);

// Now convert string to object using parse function
json = JSON.parse(json)
console.log(json);