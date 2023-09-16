'use strict';

const express= require('express');
const cors=require('cors');
const morgan = require('morgan');

require('dotenv').config();
const PORT=process.env.PORT || 3000;

//Resources
const error404= require('./auth/error-handlers/404');
const error500= require('./auth/error-handlers/500');
const authRouter= require('./auth/routes/router');
const apiRouter=require('./auth/routes/v2')
const router=require('./auth/routes/v1');
// Prepare the express app
const app=express();


app.use(cors());
app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Routes

app.use(authRouter);
app.use(apiRouter);

app.use('/admin/v2',apiRouter);
app.use('/user/v1',router);

app.use(error404);
app.use(error500);

module.exports = {
    server: app,
    start: (port) => {
      app.listen(port, () => {
        console.log(`Server Up on ${port}`);
      });
    },
  };
