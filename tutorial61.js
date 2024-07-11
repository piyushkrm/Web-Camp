// Printing the Math object
let m = Math;
console.log(m);

//Printing the constants from Math Object
let M = Math;
console.log("The value of Math.E is ", Math.E);
console.log("The value of Math.LN2 is ", Math.LN2);
console.log("The value of Math.LN10 is ", Math.LN10);
console.log("The value of Math.LOG2E is ", Math.LOG2E);
console.log("The value of Math.PI is ", Math.PI);
console.log("The value of Math.SQRT1_2 is ", Math.SQRT1_2);
console.log("The value of Math.SQRT2 is ", Math.SQRT2);

// Printing the functions from the Math Object
let a = 34.65412;
let b = 30.542;

//ROUND are print the nearest numerical integer value
console.log("The value of a and b is ", a, b);
console.log("The value of a and b rounded is ", Math.round(a), Math.round(b));

//Power function keyword-----(pow)
console.log("2 raised the power 2 is ", Math.pow(2, 2))
console.log("8 raised the power 4 is ", Math.pow(8, 4))
console.log("12 raised the power 2 is ", Math.pow(12, 2))

//SQT (SQuare RooT) function
console.log("Square root of 64 is ", Math.sqrt(64))
console.log("Square root of 9 is ", Math.sqrt(9))
console.log("Square root of 144 is ", Math.sqrt(144))
console.log("Square root of 50 is ", Math.sqrt(50))

// Rounding
console.log("Rounding of square root of 50 is ", Math.round(7.0710678118654755))


//Ceil and Floor
console.log("7.07 up rounded to nearest integer is ", Math.ceil(7.07))
console.log("7.07 down rounded to nearest integer is ", Math.floor(7.07))

// Absoulute Function
// Negative value are changed to positive value by absolute function
console.log("Absolute value of 7.07 is ", Math.abs(7.07))
console.log("Absolute value of -7.07 is ", Math.abs(-7.07))

// E
// :
// 2.718281828459045
// LN2
// :
// 0.6931471805599453
// LN10
// :
// 2.302585092994046
// LOG2E
// :
// 1.4426950408889634
// LOG10E
// :
// 0.4342944819032518
// PI
// :
// 3.141592653589793
// SQRT1_2
// :
// 0.7071067811865476
// SQRT2
// :
// 1.4142135623730951


// Trigonometric function
console.log("The value of sin(pi) is ", Math.sin(Math.PI / 2));
console.log("The value of tan(pi) is ", Math.tan(Math.PI / 2));
console.log("The value of cos(pi) is ", Math.cos(Math.PI / 2));


//Min and Max math function
console.log("Minimum value of 4, 10, 9, -1 in ", Math.min(4, 10, 9, -1))
console.log("Maximum value of 4, 10, 9, -155550 in ", Math.max(4, 10, 9, -155550))


// Generating a rendom number
//Rnadom number between one and zero
let x = Math.random();
console.log("The random number is ", x)

//Rnadom number between p and s-----> p + (s - p)*Math.random()
//The random number between 1 to 100 is---->
let p = 1;
let s = 100;
let r = p + (s - p)*Math.random();
console.log("The random number between 1 to 100 is ", r)

//Rnadom number between 500 to 505 is---->
let z = 500;
let l = 505;
let i = z + (l - z)*Math.random();
console.log("The random number between 500 to 505 is ", i);

// The random number between 1000 to 1001 is---->
let w = 1000;
let o = 1001;
let d = w + (o - w)*Math.random();
console.log("The random number between 1000 to 1001 is ", d);

//I dont know what the use of this math function so i ignore this function
console.log(Math.clz32(1000));