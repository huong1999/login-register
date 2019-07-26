const config = require("config");

let mongo_port = config.get("MONGO_PATH");
let mongo_host = config.get("MONGO_HOST");

/*
let mongo_port = 27017;
let mongo_host ="localhost";
*/

let mongoose = require('mongoose');
let connect = mongoose.createConnection(`mongodb://${mongo_host}:${mongo_port}/dblogin`,{ useNewUrlParser: true }, () => {
    console.log("Connect database oki");
});

module.exports = connect;