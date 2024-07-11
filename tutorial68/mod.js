console.log("this is mod");
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// module.exports = {
//     avg: average,
//     name: "piyush",
//     repo: "codeblock"
// } 

module.exports.name = "pihu"