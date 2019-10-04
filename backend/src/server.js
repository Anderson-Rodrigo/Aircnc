const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://oministack:oministack@oministack-shard-00-00-ygrjm.mongodb.net:27017,oministack-shard-00-01-ygrjm.mongodb.net:27017,oministack-shard-00-02-ygrjm.mongodb.net:27017/admin?ssl=true&replicaSet=Oministack-shard-0&authSource=admin&retryWrites=true&w=majority',  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(express.json());
app.use(routes);

app.listen(3333);