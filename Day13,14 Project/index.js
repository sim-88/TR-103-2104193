const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const urlRoute=require('./routes/url.route');
const {connectToMongoDB}=require('./connection');
const URL=require('./models/url.models');
const staticRouter=require('./routes/staticRouter');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/url",urlRoute);
app.use("/",staticRouter);


connectToMongoDB('mongodb://localhost:27017/url-shortner');
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})