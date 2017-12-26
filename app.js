var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?auto=format&fit=crop&w=1650&q=80"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=1650&q=80"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1444124818704-4d89a495bbae?auto=format&fit=crop&w=1950&q=80"},
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?auto=format&fit=crop&w=1650&q=80"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=1650&q=80"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1444124818704-4d89a495bbae?auto=format&fit=crop&w=1950&q=80"},
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?auto=format&fit=crop&w=1650&q=80"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=1650&q=80"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1444124818704-4d89a495bbae?auto=format&fit=crop&w=1950&q=80"},
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?auto=format&fit=crop&w=1650&q=80"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=1650&q=80"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1444124818704-4d89a495bbae?auto=format&fit=crop&w=1950&q=80"}
];


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/",function(req,res){
  res.render("landing");

});

app.get("/campgrounds", function(req, res){


res.render("campgrounds", {campgrounds:campgrounds});

});

app.post("/campgrounds", function(req, res){
var name = req.body.name;
var image = req.body.image;
var newCampground = {name: name, image: image};
campgrounds.push(newCampground);
res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");

});

app.listen(3000,function(){
  console.log("The YelpCamp Server has Started!!!");
});
