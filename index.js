//importing required modules
import express from 'express';
import morgan from 'morgan';
import axios from 'axios';
import bodyParser from 'body-parser';
import { MongoClient, ServerApiVersion } from 'mongodb'
import mongoose from 'mongoose';

//setting up 
const app = express();
const url = 'mongodb+srv://paramjeetnpradhan:Paramjeet.826@cluster01.wmcwsfi.mongodb.net/';
const client = new MongoClient(url);
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
const obj=[];

/*async function insertData() {
  try {
    await client.connect();
    const database = client.db('DB2');
    const collection = database.collection('CL2');

    const document = { name: 'John Doe', age: 31 };
    await collection.insertOne(document);

    console.log('Data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    await client.close();
  }
}

insertData();
*/
    

app.get("/home",(req,res)=>{
    res.render("home.ejs");
 })


app.get("/", (req, res) => {   
    res.render("login.ejs")});

app.post("/", (req,res)=>{
   obj=req.body;
   console.log(obj);
   res.redirect("/home")
   
})
app.get("/signin",(req,res)=>{
    res.render("signin.ejs")
})
app.listen(3000,()=>{
    console.log("Server running on port 3000")
})