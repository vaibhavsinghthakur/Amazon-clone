const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app=express();

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get("/",function(req,res){
   res.render("home");
});

app.post("/",function(req,res){
  res.render("basket");
});

app.get("/signin",function(req,res){
  res.render("signin");
});

app.post("/signin",function(req,res){
  res.render("signin");
});

app.get("/tryprime",function(req,res){
  res.render("tryprime");
});

app.get("/basket",function(req,res){
  let sum=0;
  for (let i=0;i<array.length;i++){
    sum=parseInt(array[i].price)+sum;
  }
  res.render("basket",{array:array,sum:sum});
});

let array=[];
const length=array.length;

app.post("/basket",function(req,res){
   const items={
      p:req.body.p,
      price:req.body.price,
      rating:req.body.rating,
      img:req.body.img
    }
    //item is pushed inside array
    array.push(items);
    //grabbing the index of current item
    let t=array.indexOf(items);
    //adding new value index inside current item whicj=h is t
    items.index = t;

    let sum=0;
    //converting price which is string to int value and adding it to sum
    for (let i=0;i<array.length;i++){
      sum=parseInt(array[i].price)+sum;
    }

   res.render("basket",{array:array,sum:sum});
});


app.post("/delete",function(req,res){
  //Grabbing index of array passed through remove from basket button and deleting it from current array
  const t = req.body.button;
  if (t > -1) {
   array.splice(t, 1);
   }
  let sum=0;
  for (let i=0;i<array.length;i++){
   sum=parseInt(array[i].price)+sum;
 }
 res.render("basket",{array:array,sum:sum});
});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port,function(){
  console.log("server started on port 3000");
});
//
//background-blue=https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
