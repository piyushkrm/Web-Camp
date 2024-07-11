// Step by step in terminal
show dbs
use pihuKart
show collections

pihuKart> db.items.find({price: 23000})//------>Searching Items

//Deleting items from the mongo databse

// Deleting one item at a time
//db.items.deleteOne({price: 23000})---> will delete the matching document first entry in case of multi document match
db.items.deleteOne({price: 23000})

//Delete many item at a time
db.items.deleteMany({price: 23000})