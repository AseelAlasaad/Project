'use strict';

const myproductmodel=(sequelize, DataTypes)=> sequelize.define('myproduct',{
  userid:{ type:DataTypes.INTEGER, required: true},
  name:{type: DataTypes.STRING, required:true},
  url:{type:DataTypes.STRING, required:true},
  category: { type:DataTypes.STRING, required: true},
  price:{ type:DataTypes.INTEGER, required: true},
  inStock:{ type:DataTypes.INTEGER, required: true},
  count:{ type:DataTypes.INTEGER, required: true}
});

module.exports=myproductmodel;