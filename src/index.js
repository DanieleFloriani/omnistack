const express  = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(express.json());

 mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-mcxls.mongodb.net:27017,cluster0-shard-00-01-mcxls.mongodb.net:27017,cluster0-shard-00-02-mcxls.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true  
 })

app.use(routes);

app.listen(3333);


