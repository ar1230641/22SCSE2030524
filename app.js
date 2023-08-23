const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const number = require("./routes/numbers");


app.use(cors());



app.use("/", number)




const Test = http.createServer(app);


module.exports = Test