///Searching data in mongo db
use pihuKart


//This query will return all the objects with rating equal to 4.8
db.items.find({rating:4.8})//--------------->{rating:4.8} <------This is filter for searching this pattern

db.items.find({rating: {$gte: 3.8}})

db.items.find({rating: {$gt: 3.8}})

//And operator
//Greaterthan
db.items.find({rating: {$gt: 3.8}, price:{$gt: 10000}})

//Lessthan
db.items.find({rating: {$gt: 3.8}, price:{$gt: 10000}})

//Or operator
db.items.find({$or: [{rating: {$gt: 3.8}}, {price:{$gt: 10000}}]})

// Only show rating
db.items.find({rating: {$gt: 3.5}}, {rating: 1})