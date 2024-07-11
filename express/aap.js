const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
port = 80;

//EXPESS SPECIFIC STUFF
app.use("/static", express.static("static")); //For serving static files
app.use(express.urlencoded());

// PUB SPECIFIC STUFF
app.set("view engine", "pug"); //set the template engines as pug
app.set("views", path.join(__dirname, "views")); //set the views directory

//ENDPOINTS
app.get("/", (req, res) => {
  const con = "Get this gym membership for $ -  Hurry ill this form now!";
  const params = { title: "Pug is the best", content: con };
  res.status(200).render("index.pug", params);
});

app.post("/", (req, res) => {
  name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  address = req.body.address;
  more = req.body.more;
  let outputToWrite = `The name of the client is ${name}, ${name} is ${age} year old,  ${name} gender is ${gender}, and ${name} is residing at ${address}, More about him/her : ${more}`;
  fs.writeFileSync("output.text", outputToWrite);

  const params = { message: "Your form has been submitted successfully" };
  res.status(200).render("index.pug", params);
});

//START THE SERVER
app.listen(port, () => {
  console.log(`This application started successfully on port ${port}`);
});
