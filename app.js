var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/",function(req,res){
  res.render("landing");

});

app.get("/campgrounds", function(req, res){
  var campgrounds = [
      {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?auto=format&fit=crop&w=1650&q=80"},
      {name: "Granite Hill", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=1650&q=80"},
      {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1503604860655-5fd2b52ea860?auto=format&fit=crop&w=910&q=80"}
  ]

res.render("campgrounds", {campgrounds:campgrounds});

});

app.listen(3000,function(){
  console.log("The YelpCamp Server has Started!!!");
});
