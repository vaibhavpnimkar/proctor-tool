const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const bodyParser = require('body-parser')
const multer =require('multer');

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())



mongoose.connect('mongodb://127.0.0.1:27017/proctor-app',  
{ useNewUrlParser: true, useUnifiedTopology: true }
)  .then(() => console.log("connected successfully"))
.catch((err) => console.log("it has an error", err));

;


app.post('/api/register', async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    console.log('Registration successful');
    res.json({ status: 'ok' });
  } catch (error) {
    console.error('Registration error:', error);

    res.json({ status: 'error', error: 'Duplicate email' });
  }
});


app.post('/api/login', async (req, res) => {

    const user = await  User.findOne({
      email:req.body.email,
      password:req.body.password,
  
    })
    if(user){
      
      return res.json({staus:'ok',user:true})
     
    } else{
      return res.json({status:'error',user:false})
    }
  });


app.listen(8080, () => {
  console.log('Server started at 8080');
});
