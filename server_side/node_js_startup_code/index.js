const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dxbcoder971:Liom2Gvnu5JyQ1Hg@ecommerce.dfucb.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce');
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.delete('/:id', async (req, res) => {
  const id = req.params.id;
// Update a document by 
await User.findByIdAndDelete(id);

  res.json("Deleted Successful");

});


app.listen(port, ()=>{
  console.log(`server is running on port:${port}`);
});



const { Schema, model } = mongoose;
const userSchema = new Schema({
name: String,
age: Number,
email: String
});

const User = model('User', userSchema);