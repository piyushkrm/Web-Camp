var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pihuKart', {useNewUrlParser: true, 
useUnifiedTopology: true});

var db = mongoose.connection;
db.on('erroe', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected")
});