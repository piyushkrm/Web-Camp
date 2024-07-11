// console.log(`Welcome back piyush`);

// setTimeout ----> Allows us to run the function once after the set interval of time
// clearTimeout ---> Allows us to run the function repeatedly after the interval of time



// SET TIME OUT
function groot(name, text) {
    // name = "pihu"
    console.log(`Welcome back ` + name + text);
}
// setTimeout(groot, 3000, "Pihu", " Take care of your self");
// setTimeout(groot(), 2000); --> This statement is wrong becoz in this statement function are calling this is unfare




// CLEARE TIMEOUT
// timeOut = setTimeout(groot, 3000, "Pihu", " Take care of your self");
// console.log(timeOut);
// clearTimeout(timeOut)

// SET INTERVAL
// setInterval(groot, 1, "Pihu ", "Good Night");
// intervalID = setInterval(groot, 1000, "Pihu ", "Good Night");
// clearInterval(intervalID);

function displaytime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displaytime, 1000);