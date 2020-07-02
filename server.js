const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const path = require('path');

const publicPath = path.join(__dirname, '..', 'public');

// parse application/json
//app.use(bodyParser.json());
app.use(express.static(publicPath));

//create database connection
const conn = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b7a8adb1fd7dcf',
    password: '5aa41273',
    database: 'heroku_66db3627632a476'
});
//show all products
app.get('/api/products',(req, res) => {
    let sql = "SELECT * FROM product";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        //res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        res.sendFile(path.join(publicPath, 'index.html'));
    });
});

//show single product
app.get('/api/products/:id',(req, res) => {
    let sql = "SELECT * FROM product WHERE product_id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//add new product
app.post('/api/products',(req, res) => {
    let data = {product_name: req.body.product_name, product_price: req.body.product_price};
    let sql = "INSERT INTO product SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//update product
app.put('/api/products/:id',(req, res) => {
    let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//Delete product
app.delete('/api/products/:id',(req, res) => {
    let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//Server listening
const PORT = process.env.PORT || 3000;

app.listen(PORT,() =>{
    console.log('Server started on port 3000 or whatever the port is...');
});
