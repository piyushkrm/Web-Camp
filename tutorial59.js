console.log("This is date and time tutorial")
let det = new Date;
console.log(det)

// Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time) in this date are define after all date
let dt = new Date(0);
console.log(dt)

// let newDate = new Date(year, month, date, hour, minutes, seconds, milliseconds);
let date = Date(2023, 7, 20, 3, 5, 11)
console.log(date)

let newDate = new Date(2023, 6, 6, 15, 10, 45);
console.log(newDate);

let year = newDate.getFullYear();
console.log("The year is ", year);

let d = newDate.getDate();
console.log("The Date is", d);

let mn = newDate.getMonth();
console.log("The Month is", mn);

let hr = newDate.getHours();
console.log("The Hour is", hr);

let minutes = newDate.getMinutes();
console.log("The Minute is", minutes);

let seconds = newDate.getSeconds();
console.log("The second is ", seconds);

let time = newDate.getTime();
console.log("The time is", time);

let day = newDate.getDay();
console.log("The day is", day);

newDate.setDate(45);
console.log(newDate);

newDate.setHours(18);
console.log(newDate)

newDate.setMinutes(1);
console.log(newDate);