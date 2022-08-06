const mongoose = require("mongoose");

// TODO: Connection string
// Here you need to enter your own connection string
    // connection.js (5)
    // Enter your own MongoDB connection string
let mongoDB = `mongodb+srv://Nikhil:hlKDRIdUeIZUoQhk@cluster0.jjtdp.mongodb.net/JobBoard?retryWrites=true&w=majority`

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose.connection;