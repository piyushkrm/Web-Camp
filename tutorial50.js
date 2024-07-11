var str = "This is a string";
var stri = "THIS IS A STRING SENTANCE";
console.log(str);

// First occurence of a string
var position = str.indexOf('is');
console.log(position);

// Last occurence of a string
position = str.lastIndexOf('is');
console.log(position);

// Substring from a string
// var Substring = str.Substring(1,6);
var Substring = str.slice(1, 6);
console.log(Substring);

// Replacement
var Replacement = str.replace('string', 'Piyush');
console.log(str);
console.log(Replacement);

// String converted to UPPER CASE
console.log(str.toUpperCase())

// String converted to lower case
console.log(stri.toLowerCase())

// Concatination method
var newString = stri.concat(' --- new string added in the old sentance')
console.log(newString)

// White space remover
var strWithWhitespaces = "          this contain        lot of                                              whitespaces                                                 ";
console.log(strWithWhitespaces)

// remove space starting and ending of the sentance
console.log(strWithWhitespaces.trim())

// Character string address
var Character = str.charAt(8);
console.log(Character)

// Show Character code
// My character coding is utf encoding -------- based on this encoding show character code
var Character = str.charCodeAt(8);
console.log(Character)

//Show the character using their position
console.log(str[8])