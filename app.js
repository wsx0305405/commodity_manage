const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

const order = require('./routes/order');
// TODO:
// const product = require('./routes/product');
// const member = require('./routes/member');

// set cors
app.use(require('cors')());
// static files
app.use(express.static('public'));
// Parse application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: false }));
// Parse application/json
app.use(express.json());


app.use('/',order);
// TODO:
// app.use('/',product);
// app.use('/',member);


app.get('/',(req,res) => {
    res.sendFile(__dirname + '/public/Home.html');
});

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})

