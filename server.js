const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
//app.use(bodyParser.json());
// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b7a8adb1fd7dcf',
    password: '5aa41273',
    database: 'heroku_66db3627632a476'
});

//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
});


//show all products
app.get('/api/products',(req, res) => {
    let sql = "SELECT * FROM product";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"response": results}));
    });
});

//show single product
app.get('/api/products/:id',(req, res) => {
    let sql = "SELECT * FROM product WHERE product_id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"response": results}));
    });
});

//add new product
app.post('/api/products',(req, res) => {
    let data = {product_name: req.body.product_name, product_price: req.body.product_price};
    let sql = "INSERT INTO product SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"response": results}));
    });
});

//update product
app.put('/api/products/:id',(req, res) => {
    let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"response": results}));
    });
});

//Delete product
app.delete('/api/products/:id',(req, res) => {
    let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"response": results}));
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});