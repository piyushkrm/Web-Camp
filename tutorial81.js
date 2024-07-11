////Inserting data in mongo db
use pihuKart
//add only one documents
db.items.insertOne({name:"Samsung A51", price: 23000, rating:4.8, quantity:250, sold:149})


//add many more documents
db.items.insertMany([{name:"Samsung A51", price: 23000, rating:4.1, quantity:250, sold:149}, {name:"Samsung A71", price: 53000, rating:4.5, quantity:150, sold:149}, {name:"Samsung 30s", price: 18000, rating:4.8, quantity:350, sold:189}])