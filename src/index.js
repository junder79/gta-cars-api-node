const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'id11762251_gtacars'
});

// Routes 
app.get('/api/all', (req, res) => {

    connection.query("SELECT v.idvehiculo,v.nombre_vehiculo,v.descripcion_vehiculo , cv.nombre_categoria , r.resistencia,v.marca , vv.velocidad , tp.nombre_tipo_vehiculo , v.imagen_vehiculo FROM `vehiculo` as  v join categoria_vehiculo cv  on cv.id_categoria = v.categoria_vehiculo  join resistencia_vehiculo r   on r.idresistencia = v.resistencia  join velocidad_vehiculo vv  on vv.idvelocidad = v.velocidad  JOIN tipo_vehiculo tp   on tp.idtipovehiculo = v.tipo_vehiculo", function (error, results, fields) {
        if (error) throw error;

        res.send(results);
    });

});
app.get('/api/vehiculo', (req, res) => {

    connection.query("SELECT v.idvehiculo ,v.nombre_vehiculo , v.imagen_vehiculo , v.descripcion_vehiculo , cv.nombre_categoria , rv.resistencia , v.marca , vv.velocidad , tv.nombre_tipo_vehiculo  from vehiculo v  join categoria_vehiculo cv   on cv.id_categoria = v.categoria_vehiculo  join resistencia_vehiculo rv   on rv.idresistencia = v.resistencia  join velocidad_vehiculo vv   on vv.idvelocidad = v.velocidad  join tipo_vehiculo tv   on tv.idtipovehiculo = v.tipo_vehiculo  where v.categoria_vehiculo = 1", function (error, results, fields) {
        if (error) throw error;

        res.send(results);
    });

});
app.get('/api/aviones', (req, res) => {

    connection.query("SELECT v.idvehiculo ,v.nombre_vehiculo , v.imagen_vehiculo , v.descripcion_vehiculo , cv.nombre_categoria , rv.resistencia , v.marca , vv.velocidad , tv.nombre_tipo_vehiculo  from vehiculo v  join categoria_vehiculo cv   on cv.id_categoria = v.categoria_vehiculo  join resistencia_vehiculo rv   on rv.idresistencia = v.resistencia  join velocidad_vehiculo vv   on vv.idvelocidad = v.velocidad  join tipo_vehiculo tv   on tv.idtipovehiculo = v.tipo_vehiculo  where v.categoria_vehiculo = 3", function (error, results, fields) {
        if (error) throw error;

        res.send(results);
    });

});

app.get('/api/helicopteros', (req, res) => {

    connection.query("SELECT v.idvehiculo ,v.nombre_vehiculo , v.imagen_vehiculo , v.descripcion_vehiculo , cv.nombre_categoria , rv.resistencia , v.marca , vv.velocidad , tv.nombre_tipo_vehiculo from vehiculo v join categoria_vehiculo cv  on cv.id_categoria = v.categoria_vehiculo join resistencia_vehiculo rv  on rv.idresistencia = v.resistencia join velocidad_vehiculo vv  on vv.idvelocidad = v.velocidad join tipo_vehiculo tv  on tv.idtipovehiculo = v.tipo_vehiculo where v.categoria_vehiculo = 4 ", function (error, results, fields) {
        if (error) throw error;

        res.send(results);
    });

});

app.get('/api/extranos', (req, res) => {

    connection.query(" SELECT v.idvehiculo ,v.nombre_vehiculo , v.imagen_vehiculo , v.descripcion_vehiculo , cv.nombre_categoria , rv.resistencia , v.marca , vv.velocidad , tv.nombre_tipo_vehiculo  from vehiculo v  join categoria_vehiculo cv   on cv.id_categoria = v.categoria_vehiculo  join resistencia_vehiculo rv   on rv.idresistencia = v.resistencia  join velocidad_vehiculo vv   on vv.idvelocidad = v.velocidad  join tipo_vehiculo tv   on tv.idtipovehiculo = v.tipo_vehiculo  where v.categoria_vehiculo = 5 ", function (error, results, fields) {
        if (error) throw error;

        res.send(results);
    });

});
app.get('/api/botes', (req, res) => {

    connection.query("SELECT v.idvehiculo ,v.nombre_vehiculo , v.imagen_vehiculo , v.descripcion_vehiculo , cv.nombre_categoria , rv.resistencia , v.marca , vv.velocidad , tv.nombre_tipo_vehiculo from vehiculo v join categoria_vehiculo cv  on cv.id_categoria = v.categoria_vehiculo join resistencia_vehiculo rv  on rv.idresistencia = v.resistencia join velocidad_vehiculo vv  on vv.idvelocidad = v.velocidad join tipo_vehiculo tv  on tv.idtipovehiculo = v.tipo_vehiculo where v.categoria_vehiculo = 2 ", function (error, results, fields) {
        if (error) throw error;

        res.send(results);
    });

});

app.get('/api/motos', (req, res) => {

    connection.query("SELECT v.idvehiculo ,v.nombre_vehiculo , v.imagen_vehiculo , v.descripcion_vehiculo , cv.nombre_categoria , rv.resistencia , v.marca , vv.velocidad , tv.nombre_tipo_vehiculo from vehiculo v join categoria_vehiculo cv  on cv.id_categoria = v.categoria_vehiculo join resistencia_vehiculo rv  on rv.idresistencia = v.resistencia join velocidad_vehiculo vv  on vv.idvelocidad = v.velocidad join tipo_vehiculo tv  on tv.idtipovehiculo = v.tipo_vehiculo where v.categoria_vehiculo = 6 ", function (error, results, fields) {
        if (error) throw error;

        res.send(results);
    });

});

app.get('/api/vehiculos/:id', (req, res) => {
    var idVehiculo = req.params.id;

    connection.query("SELECT v.idvehiculo , v.marca, v.nombre_vehiculo , v.imagen_vehiculo , v.descripcion_vehiculo , r.resistencia , cv.nombre_categoria , vv.velocidad FROM `vehiculo` v   join categoria_vehiculo cv   on cv.id_categoria = v.categoria_vehiculo  join resistencia_vehiculo r   on r.idresistencia = v.resistencia  join velocidad_vehiculo vv   on vv.idvelocidad = v.velocidad  where v.idvehiculo = " + idVehiculo + " ", function (error, results, fields) {
        if (error) throw error;

        res.send(results);
    });

});

app.post('/api/nuevovehiculo', (req, res) => {
    var nombreVehiculo = req.body.nombre;
    var imagen = req.body.imagen;
    var descripcion = req.body.descripcion;
    var categoria = req.body.categoria;
    var resistencia = req.body.resistencia;
    var marca = req.body.marca;
    var velocidad = req.body.velocidad;
    var tipo = req.body.tipo;
   
    var query = "INSERT INTO `vehiculo` (`idvehiculo`, `nombre_vehiculo`, `imagen_vehiculo`, `descripcion_vehiculo`, `categoria_vehiculo`, `resistencia`, `marca`, `velocidad`, `tipo_vehiculo`)  VALUES (NULL,'" + nombreVehiculo + "', '" + imagen + "', '" + descripcion + "', '" + categoria + "', '" + resistencia + "', '" + marca + "', '" + velocidad + "', '" + tipo + "')";

    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log("Error" + error + "QUERT " + query);
        }

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.contentType('application/json').status(200);
        res.send(JSON.stringify(1));
    });

});
app.post('/api/eliminar', (req, res) => {
    var idVehiculo = req.body.id;
   
    var query = "DELETE from vehiculo WHERE idvehiculo ="+idVehiculo+" ";

    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log("Error" + error + "QUERT " + query);
        }

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.contentType('application/json').status(200);
        res.send(JSON.stringify(1));
    });

});


app.get('/api/notificaciones', (req, res) => {
    

    connection.query("SELECT idNotificacion as 'id' ,imagen_url , mensajeNotificacion as 'mensaje' , descripcion ,  fechaNotificacion as 'fecha' from notificaciones ORDER BY  fechaNotificacion desc ", function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

});

app.get('/api/notificaciones/:id', (req, res) => {
    var idNotificacion = req.params.id;

    connection.query("SELECT idNotificacion as 'id' , mensajeNotificacion as 'mensaje' , descripcion , fechaNotificacion as 'fecha' from notificaciones where idNotificacion = "+idNotificacion+"", function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

});


// Nuevo vehiculo 


app.listen(3000, () => {
    console.log("Encendido");
})