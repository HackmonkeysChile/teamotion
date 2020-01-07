// Establecer todos los tipos de mensajes que enviaremos al cliente por el cual nosotros podremos manipular mas facilmente

// npm i chalk => para agregar colores a nuestras respuestas por consola donde solamente nosotros sabreros el error especifico de lo ocurrido, sin brindar tanta informacion confidencial al usuario

// import chalk from 'chalk';
const chalk = require('chalk');

exports.success = (req, res, message, status) => {
    // res.send(message);
    // res.status(status || 200).send({
    //     message
    // })
    res.status(status || 200).send(message);
};

exports.error = (req, res, message, status, details) => {
    // res.send(message);
    console.log(chalk.red('[response error]:' + details));
    res.status(status || 500).send(message);
};