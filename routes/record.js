const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myobj = {

    client_name: req.body.client_name,
    client_number: req.body.client_number,
    client_dispatch: req.body.client_dispatch,
    order_number: req.body.order_number,
    vendor: req.body.vendor,
    date: req.body.date,
    productoMat: req.body.productoMat, // Foam o bolsa
    productoTipo: req.body.productoTipo,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd :req.body.NombreProd,    // Plato 6,
    Codigo: req.body.Codigo,
    
    productoMat2: req.body.productoMat2, // Foam o bolsa
    productoTipo2: req.body.productoTipo2,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd2: req.body.NombreProd2,    // Plato 6,
    Codigo2: req.body.Codigo2,

    productoMat3: req.body.productoMat3, // Foam o bolsa
    productoTipo3: req.body.productoTipo3,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd3: req.body.NombreProd3,    // Plato 6,
    Codigo3: req.body.Codigo3,

    productoMat4: req.body.productoMat4, // Foam o bolsa
    productoTipo4: req.body.productoTipo4,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd4: req.body.NombreProd4,    // Plato 6,
    Codigo4: req.body.Codigo4,

    productoMat5: req.body.productoMat5, // Foam o bolsa
    productoTipo5: req.body.productoTipo5,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd5: req.body.NombreProd5,    // Plato 6,
    Codigo5: req.body.Codigo5,

    productoMat6: req.body.productoMat6, // Foam o bolsa
    productoTipo6: req.body.productoTipo6,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd6: req.body.NombreProd6,    // Plato 6,
    Codigo6: req.body.Codigo6,

    productoMat7: req.body.productoMat7, // Foam o bolsa
    productoTipo7: req.body.productoTipo7,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd7: req.body.NombreProd7,    // Plato 6,
    Codigo7: req.body.Codigo7,

    productoMat8: req.body.productoMat8, // Foam o bolsa
    productoTipo8: req.body.productoTipo8,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd8: req.body.NombreProd8,    // Plato 6,
    Codigo8: req.body.Codigo8,

    productoMat9: req.body.productoMat9, // Foam o bolsa
    productoTipo9: req.body.productoTipo9,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd9: req.body.NombreProd9,    // Plato 6,
    Codigo9: req.body.Codigo9,

    productoMat10: req.body.productoMat10, // Foam o bolsa
    productoTipo10: req.body.productoTipo10,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd10: req.body.NombreProd10,    // Plato 6,
    Codigo10: req.body.Codigo10,
    
    canti:req.body.canti,
    canti2:req.body.canti2,
    canti3:req.body.canti3,
    canti4:req.body.canti4,
    canti5:req.body.canti5,
    canti6:req.body.canti6,
    canti7:req.body.canti7,
    canti8:req.body.canti8,
    canti9:req.body.canti9,
    canti10:req.body.canti10,
   
    total:req.body.total,

  
	
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { id: req.body.id };
  let newvalues = {
    $set: {
      client_name: req.body.client_name,
    client_number: req.body.client_number,
    client_dispatch: req.body.client_dispatch,
    order_number: req.body.order_number,
    vendor: req.body.vendor,
    date: req.body.date,
    productoMat: req.body.productoMat, // Foam o bolsa
    productoTipo: req.body.productoTipo,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd: req.body.NombreProd,    // Plato 6,
    Codigo: req.body.Codigo,

    productoMat2: req.body.productoMat2, // Foam o bolsa
    productoTipo2: req.body.productoTipo2,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd2: req.body.NombreProd2,    // Plato 6,
    Codigo2: req.body.Codigo2,

    productoMat3: req.body.productoMat3, // Foam o bolsa
    productoTipo3: req.body.productoTipo3,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd3: req.body.NombreProd3,    // Plato 6,
    Codigo3: req.body.Codigo3,

    productoMat4: req.body.productoMat4, // Foam o bolsa
    productoTipo4: req.body.productoTipo4,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd4: req.body.NombreProd4,    // Plato 6,
    Codigo4: req.body.Codigo4,

    productoMat5: req.body.productoMat5, // Foam o bolsa
    productoTipo5: req.body.productoTipo5,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd5: req.body.NombreProd5,    // Plato 6,
    Codigo5: req.body.Codigo5,

    productoMat6: req.body.productoMat6, // Foam o bolsa
    productoTipo6: req.body.productoTipo6,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd6: req.body.NombreProd6,    // Plato 6,
    Codigo6: req.body.Codigo6,

    productoMat7: req.body.productoMat7, // Foam o bolsa
    productoTipo7: req.body.productoTipo7,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd7: req.body.NombreProd7,    // Plato 6,
    Codigo7: req.body.Codigo7,

    productoMat8: req.body.productoMat8, // Foam o bolsa
    productoTipo8: req.body.productoTipo8,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd8: req.body.NombreProd8,    // Plato 6,
    Codigo8: req.body.Codigo8,

    productoMat9: req.body.productoMat9, // Foam o bolsa
    productoTipo9: req.body.productoTipo9,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd9: req.body.NombreProd9,    // Plato 6,
    Codigo9: req.body.Codigo9,

    productoMat10: req.body.productoMat10, // Foam o bolsa
    productoTipo10: req.body.productoTipo10,  // Gabacha,sello verde,plato,contenedor... etc
    NombreProd10: req.body.NombreProd10,    // Plato 6,
    Codigo10: req.body.Codigo10,
    
    canti:req.body.canti,
    canti2:req.body.canti2,
    canti3:req.body.canti3,
    canti4:req.body.canti4,
    canti5:req.body.canti5,
    canti6:req.body.canti6,
    canti7:req.body.canti7,
    canti8:req.body.canti8,
    canti9:req.body.canti9,
    canti10:req.body.canti10,
   
    total:req.body.total,

    
   
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, res) => {
  let db_connect = dbo.getDb("employees");
  var myquery = { id: req.body.id };
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

module.exports = recordRoutes;