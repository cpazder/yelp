var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
  name:String,
  image:String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Granite Hill", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=1650&q=80",
//     description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
// },function(err, campground){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("NEWLY CREATED CAMPGROUND: ");
//     console.log(campground);
  
  
// }
// });

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




app.get("/",function(req,res){
  res.render("landing");

});

app.get("/campgrounds", function(req, res){


Campground.find({}, function(err, allCampgrounds){
  if(err){
    console.log(err);
  } else {
    res.render("index",{campgrounds:allCampgrounds});
  }
});

});

app.post("/campgrounds", function(req, res){
var name = req.body.name;
var image = req.body.image;
var desc = req.body.description;
var newCampground = {name: name, image: image, description: desc};
Campground.create(newCampground, function(err, newlyCreated){
  if(err){
    console.log(err);
  } else {
    res.redirect("/campgrounds");
  }
});
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");

});

app.get("/campgrounds/:id", function(req, res){
  Campground.findById(req.params.id, function(err, foundCampground){
    if(err){
      console.log(err);
    } else{
      res.render("show", {campground: foundCampground});
  
    }
  });
});

app.listen(3000,function(){
  console.log("The YelpCamp Server has Started!!!");
});
