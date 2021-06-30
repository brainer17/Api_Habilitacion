const express = require('express')
const {MongoClient, ObjectId} = require('mongodb')    
const dbName = 'blog'
const url = 'mongodb://localhost:27017/${dbName}';
const client = new MongoClient(url,{ useUnifiedTopology: true });
const bodyParser = require('body-parser').json();
const app = express();
const apor = 300;

////Publicaciones////

async function Agregarpublicacion(comentario){
    let db = client.db(dbName);
    let collection= db.collection('Publicacion');
    collection.insertOne(comentario,function(res){
        console.log(res);
    })
}

app.post('/Publicacion', function(req,res){
    console.log(req.body);
    Agregarpublicacion(req.body);
    res.send('Publicacion Agregada');
})

async function Editarpublicacion(id){
    let db = client.db(dbName)
    let collection = db.collection('Publicacion')
    const _id = new ObjectId(id);
    collection.updateOne({_id},(err, question)=>{
        if(err) return 'Error al Editar', err;
  
    });
  }

  app.put('/Publicacion', function(req, res){
      console.log(req.body);
      const id = req.params.id;
      console.log(' id=>',id);
    let query = await Editarpublicacion(id);
    res.send('EDITADO')
  })