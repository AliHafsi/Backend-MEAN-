const express=require ('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require ('cors');
const app=express();
app.use (bodyParser.urlencoded({extende:true}));
app.use (express.json());
app.use (cors);
mongoose.connect ('');
app.use ('/',require('./routes/index.route'))
const port =3000  ||process.env.PORT;
app.listen(port);