const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//routes
const productRoute = require("./routes/product.route.js");
app.use('/api/products', productRoute);




mongoose.connect('mongodb+srv://jatinpatil287:BvXAYwX4GTxBlC2j@backenddb.j5glm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to the DB!');
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
    
  })
  .catch(() => {
    console.log("Connection failes");
});


app.get('/', (req, res) => {
    res.send("Hello from the node api. This is jatin patil");
});

