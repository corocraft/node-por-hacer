const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}