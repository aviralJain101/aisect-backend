const express = require('express');

const sequelize = require('./database');
//router
const studentRouter = require('./routers/student');

const app = express();
const port = process.env.PORT

app.use(express.json());//parse the incoming json data
app.use(studentRouter);

sequelize
  //.sync({force: true}) 
  .sync()
  .then(result => {
    app.listen(port,()=>{
      console.log('Server is up on port',port)
    })  
  })
  .catch(err => {
    console.log(err);
  });