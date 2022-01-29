const express = require("express");
const app = express();
const path = require("path")
// app.use(express.static(path.join(__dirname, "")))
app.use(express.static(path.join(__dirname, 'build')));
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port =  5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/user"));
// get driver connection
const dbo = require("./db/conn");

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
