console.log("Welcome Again");

let main = document.getElementById('container');
console.log(main);

// let mainn = document.getElementsByClassName('cont');
// console.log(mainn);

let navi = document.getElementById('navi');
console.log(navi);


//return more than one element becoz we will declare more than one class by same name in the same program
let cont = document.getElementsByClassName('cont');
console.log(cont);

// return by css selector
// let con = document.querySelector('#navi');
// console.log("Selector return ", con);

let con = document.querySelectorAll('#navi>li');
console.log("Selector return ", con);