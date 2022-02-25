const express = require('express');
const router = require('./routes/route');
const cors = require('cors');
const app=express();
require('./models/db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/tasks', router);


app.listen(5000,console.log("server is running in 5000"));