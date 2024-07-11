// // console.log("Hello World")
// // console.log(`Hey Good Morning How are you dear`);

// // //Variables---->
// // a = "piyu"
// // b = "sh"
// // c = a+b;
// // console.log(c);

// // //Operators---->
// // a = -10
// // console.log(a);

// // q = 10+10
// // console.log(q);

// // z = 10
// // x  = 15
// // console.log(z+x);
// // console.log(z-x);
// // console.log(z*x);
// // console.log(z/x);

// // console.log(x++);
// // console.log(x);

// // console.log(z--);
// // console.log(z);

// // // String Variable
// // a1 = "pi";
// // b = "yu";
// // c = "sh";
// // console.log(`This is my name :`+a1+b+c);

// // name = "Piyush";
// // age = 20;

// // var temp = `This is ${name} and there age is ${age}`;
// // console.log(temp);

// // var len = temp.length;
// // console.log(len)

// // // document.getElementById('//id name').innerHTML = '<h2> This is heaing 2'

// // var string = "This is my country";
// // var string1 = "IM FROM BIHAR AND YOU";
// // var string2 = "im also from bihar and you";

// // let position = string.indexOf('s');
// // console.log(position);

// // let this_position = string.indexOf("this");
// // console.log(this_position);

// // console.log(string2.toUpperCase());

// // console.log(string1.toLowerCase());

// // let concat = string.concat(` My county is lovely I love my country`);
// // console.log(concat);

// // let strWithWhitespaces=`        This is contain lot of free space           `;
// // console.log(strWithWhitespaces);

// // let chart = string.charAt(15);
// // console.log(chart);

// // console.log(string2[12]);

// // var string = "This is java";
// // var string = "This is also java";
// // console.log(string);

// // // block level variable
// // let y = 4;
// // console.log(y)
// // {
// //     let y = 44;
// //     console.log(y);
// // }

// // console.log(y);

// // const p = "This is constant and this value are never changed";
// // console.log(p);

// // let ag = 20;
// // if (ag > 18) {
// //     console.log("Your are drived car");
// // } 
// // else {
// //     console.log("You cant drived car");
// // }

// // const car = 45;
// // switch (car) {
// //     case 1:
// //         console.log("There are 10 are availabe in the showroom");
// //         break;

// //     case 15:
// //         console.log("There are 15 are availabe in the showroom");
// //         break;

// //     case 40:
// //         console.log("There are 40 are availabe in the showroom")
// //         break;

// //     default:
// //         console.log("No any car are available in the showroom")
// //         break;
// // }

// // //This is a way of declaring the variable
// // let nname = "dell"
// // let salary = 10;
// // let agge = 23;

// // //This is a another way of declaring the variable using creating object

// // let this_is_me = {
// //     namee : "Piyush",
// //     salaryy : 11,
// //     agee : 20
// // }
// // console.log(this_is_me);

// // //Array
// // let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // console.log(ary.length);
// // console.log(ary);
// // console.log(ary[5]);

// // const arry = [10, 22, 3, 4, 5, 6, 7, 8, 9];
// // aray = arry.sort()
// // console.log(aray);

// // const aryy = [20, 15, 20, 13, 59, 1, 26, 1998];
// // sort = aryy.sort()
// // console.log(sort);

// // aryy.push(39);
// // console.log(aryy);

// // aryy.pop(1998);
// // console.log(aryy);


// let name1 = "Piyush";
// let name2 = "Abhinav";
// let name3 = "Aayush";

// console.log(name1 + " have a car");
// console.log(name2 + " have mobile");
// console.log(name3 + " have a bike");

// function sum(a, b, c, d, e) {
//     let x = a + b + c + d + e
//     return x;
// }

// const returnvalue = sum(10, 20, 30, 40, 50);
// console.log("Sum of above describing number is: " + returnvalue);





//ALERT 
// alert("Hey stop! Not go ahead there are denger");
// console.log(alert);-----> without this line of code we also execute this alert function

// let r = alert("hey man what are you doing here");
// console.log(r);





//PROMPT
// let e = prompt("This is our world", "Stranger");
// console.log(e);

// let name = prompt("Enter your last name","");
// console.log(name);





// CONFORM
// confirm("Are you sure you can delete this post");

// let age = prompt("Enter you age for this job");
// if (age<21) {
//     confirm("You are not eligible for this job");
//     confirm("Better luck next time!");
// } else {
//     confirm("Your request are submitted");
// }





// LOOPS
// let i = 1;
// for(i=1; i<=10; i++){
//     console.log(i);
// }


// let p=1;
// for(p=1; p<=20; p++){
//     console.log(p+2)
// }




// FOR LOOP
// let frnd = ["Aayush", "Piyush", "Aaditya", "Harsh", "Palak"];
// for(i=0; i<=frnd.length; i++){
//     console.log("Hey " + frnd[i] + " Good Mornig");
// }




// FOR EACH LOOP
// frnd.forEach(function f(element) {
//     console.log("Good evening "+  element);
// });

// WHILE LOOP IN JAVA SCRIPT
// let r = 5;
// while (r>1) {
//     console.log(`${r} greater than 0`);
//     // r++;
// }

// let byid = document.getElementById("cont");
// console.log(byid);

// let bycls = document.getElementsByClassName(`bycls`);
// console.log(bycls);




// // SET TIMEOUT
// function groot(name) {
//     name = "pihu"
//     console.log(`Welcome back ` + name);
// }

// // setTimeout(groot, 3000, "pihu"," Take care of your self")
// setTimeout(groot, 4000)




// // CLEAR TIMEOUT
// setTimeout(groot, 3000)
// console.log(setTimeout);
// clearTimeout(setTimeout)

// function displaytime() {
//     time = new Date();
//     console.log(time);
//     document.getElementById(`time`).outerHTML = time;
// }
// setInterval(displaytime, 1000);

// function displaytime() {
//     time = new Date();
//     console.log(time);
//     document.getElementById(`time`).outerHTML = time;
// }
// setInterval(displaytime, 2000);




// DATE AND TIME
// let date = new Date;
// console.log(date);

// date = new Date;
// console.log(date);

// let date = new Date(0);-------> this is first date and time
// console.log(date);

// let date = Date(2023, 7, 30, 12, 56)
// console.log(date);


// let date1 = new Date(2023, 7, 35, 8, 6)
// console.log(date1);

// let year = date1.getFullYear()
// console.log("This is above defined year ", + year)

// let hour = date1.getHours()
// console.log("Above defined hour is ", +hour);

// let month = date1.getMonth()
// console.log(month);

// date1.setFullYear(2020)
// console.log(date1);

// function iron() {
//     console.log(`iro-man`)
// }
// iron();

// let dell = ()=> {
//     console.log(`this is a easy way of declaring function`);
// }
// dell();
// iron();
// iron();
// iron();
// iron();

// let pc = ()=> {
//     console.log("Hello world");
// }
// pc();

// // let fn =()=> {
// //     console.log("function");
// // }
// // fn();

// // let fun =()=>{
// //     console.log(`welcome`);
// // }
// // fun();

// // setTimeout(() => {
// //     console.log(`Tihs is easy function`)
// // }, 3000);

// let a = 10;
// let b = 5;

// let sum = (a, b)=> {
//     return a+b;
// }

// let sub = (a, b)=> {
//     return a - b;
// }

// let mul = (a, b)=> {
//     return a * b;
// }

// let div = (a, b)=> {
//     return(a/b);
// }

// // SHORTCUTS FOR ABOVE FUNCTION
// let add = (a, b)=> a+b;

// let dv = (a, b)=> a/b;

// let me = ()=> console.log("hey im your shortcut");
// me();

// let object={
//     greating: "hii",
//     names:["piyush", "aayush", "harsh"],
//     speak(){
//         this.names.forEach((student)=>{
//             console.log(this.greating + " im "+ student);
//         });
//     }
// }
// object.speak()




// // MATH 
// let m = Math;
// console.log(m);

// // ROUND
// let a = 2.5;
// let b = 8.9;
// console.log(Math.round(a), Math.round(b));

// //MIN MAX
// console.log(Math.min(10, 56, 78, 45, 8))
// console.log(Math.max(4, 8, 9, 10, 75, 2))

// //RANDOM NUMBER
// let z = Math.random();
// console.log(z);

// let x = 5;
// let y = 8;
// let w = x + (y-x)*Math.random();
// console.log(w);




// JSON (JAVASCRIPT OBJET NATION)
// let Json = {
//     name : "piyush",
//     age : 20,
//     phn : 74882
// }
// console.log(Json);

// let json = JSON.stringify(Json);
// console.log(json);

// json = json.replace("piyush", "pihu");
// console.log(json)

// json = json.toUpperCase()
// console.log(json);

// json = json.toLowerCase()
// console.log(json);

// json = JSON.parse(json);
// console.log(json);


//SERVER NODE.js

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content type', 'text/html');
//     res.end();
// });

// server.listen(port,hostname, () => {
//     console.log(`Server is running at http://${hostname}:${port}/`);
// })

// const http = require('http');
// const fs = require('fs');
// const fileContent = fs.readFileSync((req, res)=>{

//     res.writeHead(200, {'Content-type':'text/html'});
//     res.end(fileContent)
// })
// server.listen(80,'127.0.0.1',()=>{
//     console.log("Listening on port 80")
// })