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

module.exports.getHorarios = function () {
    const query = "SELECT profesor.nombre, materia.nombreMateria, profesorhorario.lunes,profesorhorario.martes,profesorhorario.miercoles,profesorhorario.jueves,profesorhorario.viernes FROM profesorhorario inner join profesor inner join materia inner join grupo on profesorhorario.cedulaP = profesor.cedulaP and profesorhorario.idMateria=materia.idMateria  and profesorhorario.idGrupo = grupo.idGrupo where grupo.nombreGrupo='1CM1'";
    return querySql(query);
}