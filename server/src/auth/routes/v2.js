'use strict';

const express= require('express');
const bearerAuth= require('../middleware/bearer.js');
const dataModules= require('../models/index');
const acl= require('../middleware/acl');
const apiRouter= express.Router();

apiRouter.param('model', (req, res, next)=> {
    const modelName= req.params.model;
    if(dataModules[modelName])
    {
        req.model= dataModules[modelName];
        next();
    }
    else{
        next('Invalid Model');
    }
});

apiRouter.get('/:model',bearerAuth,acl('user') ,handleGetAll);
apiRouter.get('/:model/:id',bearerAuth,acl('user'), handleGetOne);
apiRouter.post('/:model',bearerAuth,acl('admin') ,handleCreate);
apiRouter.put('/:model/:id',bearerAuth,acl('admin') ,handleUpdate);
apiRouter.delete('/:model/:id', bearerAuth,acl('user'),handleDelete);

async function handleGetAll(req, res)
{
    let allRecords= await req.model.get();
    res.status(200).json(allRecords);
}

async function handleGetOne(req, res){

    const id= req.params.id;
    let record= await req.model.get(id);
    res.status(200).json(record); 
}

async function handleCreate(req, res){
    let obj= req.body;
    let newRecord= await req.model.create(obj);
    res.status(201).json(newRecord);
}

async function handleUpdate(req, res){
    const id= req.params.id;
    const obj= req.body;
    let updateRecord= await req.model.update(id, obj);
    res.status(200).json(updateRecord);
}

async function handleDelete(req, res){
    const id= req.params.id;
    let deleteRecord= await req.model.delete(id);
    res.status(200).json(deleteRecord);
}

module.exports= apiRouter;