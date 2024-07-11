// scope of variable is global variable
var string ="This is a string";
var string ="This is a stringg";
console.log(string)

// Let is a block level variable
let a = "u"
console.log(a)
{
    let a = "u6"
    console.log(a)
}

// Constant
const p = "This can not be changed"
// p = "I want o change this ----- This can not be changed";
console.log(p);


// Conditions
// if else lader
let age = 18;
if(age>18){
    console.log('You can drink bear');
}
// Multiple decisions
else if(age==18){
    console.log('As your wish')
}
else if(age==5){
    console.log('No you can not drink bear')
}
else{
    console.log('You cant drink bear')
}

// Switch case statement
const cups = 49;
switch (cups) {
    case 4:
        console.log("The value of cups is 4");
        break;

    case 14:
        console.log("The value of cups is 14");
        break;

    case 24:
        console.log("The value of cups is 24");
        break;

    case 34:
        console.log("The value of cups is 34");
        break;

    case 44:
        console.log("The value of cups is 44");
        break;

    default:
        console.log("The value of cups in not matched");
        break;
}