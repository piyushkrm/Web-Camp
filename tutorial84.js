// CRUD
// C --> CREATE
// R --> READ
// U -->UPDATE
// D -->DELETE

// Step by step in terminal
show dbs
use pihuKart
show collections

// Update the item 
//only one updated
db.item.updateOne({name: "Samsung 30s"}, {$set: {price: 2}})

//more updated
db.item.updateMany({name: "Samsung 30s"}, {$set: {price: 2, rating: 4}})
db.item.updateMany({ObjectId: "64d784a0a93d1757e20475d8"}, {$set: {price: 2, rating: 4}})
