'use strict';

const productmodel=(sequelize, DataTypes)=> sequelize.define('product',{
  name:{type: DataTypes.STRING, required:true},
  url:{type:DataTypes.STRING, required:true},
  category: { type:DataTypes.STRING, required: true},
  price:{ type:DataTypes.INTEGER, required: true},
  inStock:{ type:DataTypes.INTEGER, required: true},
  count:{ type:DataTypes.INTEGER, required: true}
});

module.exports=productmodel;

// {
//   "name":"computer",
//   "url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
//   "category":"Electronics",
//   "price":1234,
//   "inStock":80,
//   "count":1
// }