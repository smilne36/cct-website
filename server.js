// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/unit1", (request, response) => {
  response.sendFile(__dirname + "/views/unit1.html");
});
app.get("/unit2", (request, response) => {
  response.sendFile(__dirname + "/views/unit2.html");
});
app.get("/unit3", (request, response) => {
  response.sendFile(__dirname + "/views/unit3.html");
});
app.get("/syntax", (request, response) => {
  response.sendFile(__dirname + "/views/syntax.html");
});
app.get("/varubles", (request, response) => {
  response.sendFile(__dirname + "/views/varubles.html");
});
app.get("/datatypes", (request, response) => {
  response.sendFile(__dirname + "/views/datatypes.html");
});
app.get("/printfp", (request, response) => {
  response.sendFile(__dirname + "/views/printfp.html");
});
app.get("/Op", (request, response) => {
  response.sendFile(__dirname + "/views/Op.html");
});
app.get("/blool", (request, response) => {
  response.sendFile(__dirname + "/views/blool.html");
});
app.get("/wloop", (request, response) => {
  response.sendFile(__dirname + "/views/wloop.html");
});
app.get("/dwl", (request, response) => {
  response.sendFile(__dirname + "/views/dwl.html");
});
app.get("/floop", (request, response) => {
  response.sendFile(__dirname + "/views/floop.html");
});
app.get("/Mnum", (request, response) => {
  response.sendFile(__dirname + "/views/Mnum.html");
});
// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});
////////////////////////////////////////////////////////////////////////////
app.get("/Functions", (request, response) => {
  response.sendFile(__dirname + "/views/Functions.html");
});
app.get("/aas", (request, response) => {
  response.sendFile(__dirname + "/views/aas.html");
});
app.get("/cli", (request, response) => {
  response.sendFile(__dirname + "/views/cli.html");
});
app.get("/ecodes", (request, response) => {
  response.sendFile(__dirname + "/views/ecodes.html");
});
app.get("/tcast", (request, response) => {
  response.sendFile(__dirname + "/views/tcast.html");
});
app.get("/bug", (request, response) => {
  response.sendFile(__dirname + "/views/bug.html");
});
/////////////////////////////////////////////////////////////////////////
app.get("/line", (request, response) => {
  response.sendFile(__dirname + "/views/line.html");
});
app.get("/bubble", (request, response) => {
  response.sendFile(__dirname + "/views/bubble.html");
});
app.get("/sort1", (request, response) => {
  response.sendFile(__dirname + "/views/sort1.html");
});
app.get("/sort2", (request, response) => {
  response.sendFile(__dirname + "/views/sort2.html");
});
app.get("/bin", (request, response) => {
  response.sendFile(__dirname + "/views/bin.html");
});
////////////////////////////////////////////////////////////

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
