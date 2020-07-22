const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Amazondb", {useUnifiedTopology: true,useNewUrlParser:true});

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const AmazonSchema=new mongoose.Schema({
  p:String,
  price:String,
  rating:String,
  img:String
});

const Amazon = mongoose.model("Amazon",AmazonSchema);

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
  Amazon.find({}, function(err, item){
    let sum=0;
    for(let i=0;i<item.length;i++)
    {
      sum=parseInt(item[i].price)+sum;
    }
    res.render("basket", {
      item:item,sum:sum
      });
  });
});


app.post("/basket",function(req,res){
   const items=new Amazon({
      p:req.body.p,
      price:req.body.price,
      rating:req.body.rating,
      img:req.body.img,
    });
    items.save(function(err){
    if (!err){
     res.redirect("/basket");
     }
     });
});


app.post("/delete",function(req,res){
 const check=req.body.button;
  Amazon.findByIdAndRemove(check,function(err){
    if(!err)
    {
      console.log("success");
      res.redirect("/basket");
    }
  });
 });


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port,function(){
  console.log("server started on port 3000");
});

/*
 <%=array.length%>
 $<%=sum%>
*/

/*   let t = req.body.button;
  if (t >-1) {
   array.splice(t, 1);
 }*/

 /*  let t=array.indexOf(items);
   items.index = t;
   */
