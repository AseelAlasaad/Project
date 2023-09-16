'use strict';

const usermodel=require('./user.js');
const productmodel=require('./product/product.js');
const myProductmodel=require('./myProduct/myProduct.js');

const Collection=require('./data-collection');

const {Sequelize, DataTypes}=require('sequelize');

const DATABASE_URL=process.env.NODE_ENV === 'test'? 'sqlite:memory': process.env.DATABASE_URL;

let sequelizeOptions= process.env.NODE_ENV === 'production'?{

    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        }
      }
}:{};

const sequelize= new Sequelize(DATABASE_URL, sequelizeOptions);
const product=productmodel(sequelize, DataTypes);
const userproduct=myProductmodel(sequelize, DataTypes);

module.exports={
    db:sequelize,
    users:usermodel(sequelize,DataTypes),
    product:new Collection(product),
    userproduct:new Collection(userproduct)
}