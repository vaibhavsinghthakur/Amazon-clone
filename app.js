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

app.post("/basket",function(req,res){
   const items={
      p:req.body.p,
      price:req.body.price,
      rating:req.body.rating,
      img:req.body.img
    }
    array.push(items);
    let sum=0;
    for (let i=0;i<array.length;i++){
      sum=parseInt(array[i].price)+sum;
    }
   res.render("basket",{items:items,array:array,sum:sum});
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port,function(){
  console.log("server started on port 3000");
});
//https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/BITS/Launch/3000x1200_Hero-Tall_np._CB410403189_.jpg
