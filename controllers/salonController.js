const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
const getSqlConnection = db.getSqlConnection;
//manejo de promises node.js
const Promise = require("bluebird");

module.exports.getSalonesLibres = function (dia,hora,edificio) {
    const query = "select edificio.numSalon from profesorhorario inner join edificio on edificio.idEdificio = profesorhorario.idEdificio where '"+dia+"' =!'"+hora+"' and edificio.idEdificio= '"+edificio+"' ";
    return querySql(query);
}