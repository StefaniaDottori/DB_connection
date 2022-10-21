// imports 
const express = require('express');
const mysql = require('mysql');
// creacion del server (express)
const app = new express();
const port = 3307;
// setear un puerto distinto al del proyecto para la BDs porq el que usamos para el mismo funciona como una puerta donde se abre espacio interestelar internetico para viajar datos. Ninguna info puede compartir el mismo canar de comuncacion. 
// conexion a MySQL:
// config. de datos de conexion a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CRUD_Express_MySQL'
});
// accion de conexion --// + Excepcion de error por consola
connection.connect( error => {
    if (error) { -------------------------revissar
        console.log(error);
        console.log("Conexion a la base de datos ok!");
        res.jsonjson("Ha ocurrido un error en la conexion!");
});
// middlewares (ANTES DE LAS RUTAS!)
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// rutas 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
// Crud
app.post("/insertar", (req, res) => {
    const datos = req.body;
    // mysql
    connection.query(`insert into datos values (default, '${datos.texto}', ${datos.numero}, default)`, error => { // como es un instert, tomo como valor a Agregar los datos.texto q ha colocado el usuario en la primer casilla y segunda. Los invoco.
        if (error) {
            console.log(error);
            res.json("Ha ocurrido un error en la actualizacion!");
        }
        console.log("Datos insertados correctamente!");
        res.json("Datos insertados correctamente!");
    });
});
// cRud
app.get("/leer", (req, res) => {
    connection.query("select * from datos" , (error, results) => {
        if (error) {
            console.log(error);
            res.json("Ha ocurrido un error en la base de datos!");
        }
        res.json(results);
    });
});
// cruD
app.post("/borrar", (req, res) => {
    const datos = req.body;
    connection.query( `delete from datos where iddatos = '${datos.iddatos}'`, error => {
        if (error) {
            console.log(error);
            res.json("Ha ocurrido un error en la base de datos!");
        }
        res.json("Dato borrado correctamente!");
    });
});
// el req.body hace referencia al paquete que definimos en el index.js del public.osea el conjunto de datos que puso el clinete/usuario empaquetados en formato json.
app.put("/actualizar", (req, res) => {
    const datos = req.body;
    connection.query( `UPDATE DATOS SET TEXTO = '${datos.texto}', numero = '${datos.numero}' where iddatos = '${datos.iddatos}'`, error => {
        if (error) {
            console.log(error);
            res.json("Ha ocurrido un error en la base de datos!");
        }
        res.json("Dato actualizado correctamente!");
    });
});

// server escuchando
app.listen(port, () => {
    console.log(`Server http://localhost:${port}`);
});