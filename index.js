//importing required modules
import express from 'express';
import morgan from 'morgan';
import axios from 'axios';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session  from 'express-session'
import passport from "passport"
import passportLocalMongoose from"passport-local-mongoose"


//setting up sessions
const app = express();
app.use(session({
  secret: 'I am paramjeet.',
  resave: false,
  saveUninitialized: false,
}))
//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//mongo setup
await mongoose.connect("mongodb+srv://paramjeetnpradhan:Paramjeet.826@cluster01.wmcwsfi.mongodb.net/")
const userSchema=new mongoose.Schema({
  email:String,
  name:String,
  password:String,
})
userSchema.plugin(passportLocalMongoose);
const User=new mongoose.model("User", userSchema);

//using passport local mongoose strategy
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
const obj=[];





    

app.get("/",(req,res)=>{
    res.render("home.ejs");
 })
 app.get("/secret",(req,res)=>{
  if(req.isAuthenticated()){
    res.render("secrets.ejs");
  }
  else{
    res.redirect("/signin")
  }
 })

app.get("/signin", (req, res) => {   
    res.render("signin.ejs")});

app.post("/signin", (req,res)=>{
   const user=new User({
    username:req.body.username,
    password:req.body.password
   })
   req.login(user,function(err){
    if(err){

    }
    else{
      passport.authenticate("local")(req,res,function(){
        res.redirect("/secret")

      })
    }
   })
   
})
app.get("/signup",(req,res)=>{
    res.render("signup.ejs")
})
app.post("/signup",(req,res)=>{
User.register({username:req.body.username},req.body.password, function(err,user){
  if(err){
console.log(err)
res.redirect("/signup")
  }
  else{
passport.authenticate("local")(req,res,function(){
res.redirect("/secret");
})
  }
})
})
app.get('/signout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect("/");
  });
});
app.listen(3000,()=>{
    console.log("Server running on port 3000")
})
