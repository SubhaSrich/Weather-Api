const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//Get Request
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")

})
//Post Request
app.post("/", function(req, res) {

  console.log("Post request received ");
  //const url = <"api url">;
  //Calling api via HTTP method
  https.get(url, function(response) {
    console.log(response.statusCode);

    // Getting Data & Giving Response from the server   
    response.on("data", function(data) {
      //console.log("data");
      const query = req.body.cityName;
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      console.log(temp);
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("The weather is currently ");
      res.write("<h1>The temperature in London is " + temp + "degree celcius </h1 > ");
      res.write("<img src=" + imageURL + ">");
      /* const object ={
         name: "Kanhu",
         favoriteFood : "Everything";*/
    })
    // console.log(JSON.stringify(object));
  })
})

//Server Port
app.listen(3000, function() {
  console.log("Server running at port 3000");
})