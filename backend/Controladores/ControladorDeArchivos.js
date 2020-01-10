const fs = require('fs');
const path = require('path');
const ruta = path.join(__dirname.split('Controladores')[0]);
const excel = require('exceljs');

const crearArchivo = (nombre, image, extension) => {
    return new Promise((resolve, reject) => {
        // fs.writeFile('ruta/nombre.extension', datos, decodificacion -Opcional, callback)
        fs.writeFile(`${ruta}View/assets/img/ImagenesUsuarios/${nombre}.${extension}`, image, 'base64', (err) => {
            if (err)
                reject(err);
            else
                resolve(`${nombre}.${extension}`);
        });
    });
}

const eliminarArchivo = (nombre, extension) => {
  return new Promise((resolve, reject) => {
    fs.unlink(`${ruta}View/assets/img/ImagenesUsuarios/${nombre}.${extension}`, (err) => {
      if (err)
        reject(err);
      else
        resolve('Se ha eliminado satisfactoriamente');
    });
  });
};

const crearExcel = (nombre, datos, nombreEspacioTrabajo) => {

  let libroDeTrabajo = new excel.Workbook();
  let estilosDeTrabajo = libroDeTrabajo.addWorksheet(nombreEspacioTrabajo);

  // Revisar si es que realmente elimina o no
  // libroDeTrabajo.eachSheet((libro, idLibro) => {
  //   // En caso que el libro ya existia entonces este lo elimina
  //   if (libro.name == nombreEspacioTrabajo) {
  //     libroDeTrabajo.removeWorksheet(idLibro);
  //   }
  // });

  // Molde de las tablas de excel
  // Este tambien se puede llevar mediante el nombre de los datos que traigamos desde la base de datos
  // Header => columnas
  // Key => propiedad A buscar exactametne con ese nombre por el cual este traera los datos
  // Tener en mente que este sistema hace un foreach por que funciona con los arreglos(cajitas de datos) por ende los datos debe ser un array

  // Reporte Anual
  // RUT: '15.506.062-k',
  // MARCA: 'CACHANTUN',
  // CLIENTE: 'PORTA',
  // NOMBRE: 'MIGUEL PASTENES',
  // ENERO: 0,
  // FEBRERO: 0,
  // MARZO: 0,
  // ABRIL: 0,
  // MAYO: 0,
  // JUNIO: 0,
  // JULIO: 0,
  // AGOSTO: 0,
  // SEPTIEMBRE: 0,
  // OCTUBRE: 0,
  // NOVIEMBRE: 0,
  // DICIEMBRE: 9.090909090909092

  estilosDeTrabajo.columns = [
    { header: 'Rut', key: 'RUT', width: 15 },
    { header: 'Marca', key: 'MARCA', width: 25 },
    { header: 'Cliente', key: 'CLIENTE', width: 25 }, 
    { header: 'Nombre', key: 'NOMBRE_USUARIO', width: 45 },
    { header: 'Enero', key: 'ENERO', width: 12 },
    { header: 'Febrero', key: 'FEBRERO', width: 12 },
    { header: 'Marzo', key: 'MARZO', width: 12 },
    { header: 'Abril', key: 'ABRIL', width: 12 },
    { header: 'Mayo', key: 'MAYO', width: 12 },
    { header: 'Junio', key: 'JUNIO', width: 12 },
    { header: 'Julio', key: 'JULIO', width: 12 },
    { header: 'Agosto', key: 'AGOSTO', width: 12 },
    { header: 'Septiembre', key: 'SEPTIEMBRE', width: 12 },
    { header: 'Octubre', key: 'OCTUBRE', width: 12 },
    { header: 'Noviembre', key: 'NOVIEMBRE', width: 12 },
    { header: 'Diciembre', key: 'DICIEMBRE', width: 12 }
  ];

  estilosDeTrabajo.addRows(datos);

  return libroDeTrabajo.xlsx.writeFile(`${ruta}View/assets/${nombre}.xlsx`);
};

const bloqueadosExcel = (datos, nombreEspacioTrabajo = 'Bloqueados') => {

  let libroDeTrabajo = new excel.Workbook();
  let estilosDeTrabajo = libroDeTrabajo.addWorksheet(nombreEspacioTrabajo);

  estilosDeTrabajo.columns = [
    { header: 'Rut', key: 'RUT', width: 15 },
    { header: 'Nombre', key: 'NOMBRE', width: 45 },
    { header: 'Cargo', key: 'CARGO', width: 35 },
    { header: 'Enero', key: 'ENERO', width: 12 },
    { header: 'Febrero', key: 'FEBRERO', width: 12 },
    { header: 'Marzo', key: 'MARZO', width: 12 },
    { header: 'Abril', key: 'ABRIL', width: 12 },
    { header: 'Mayo', key: 'MAYO', width: 12 },
    { header: 'Junio', key: 'JUNIO', width: 12 },
    { header: 'Julio', key: 'JULIO', width: 12 },
    { header: 'Agosto', key: 'AGOSTO', width: 12 },
    { header: 'Septiembre', key: 'SEPTIEMBRE', width: 12 },
    { header: 'Octubre', key: 'OCTUBRE', width: 12 },
    { header: 'Noviembre', key: 'NOVIEMBRE', width: 12 },
    { header: 'Diciembre', key: 'DICIEMBRE', width: 12 }
  ];

  estilosDeTrabajo.addRows(datos);

  return libroDeTrabajo.xlsx.writeFile(`${ruta}View/assets/bloqueados.xlsx`);
};

const obtenerImagen = (id, estado, extension, entidad) => {
    let nombreImagen;
    let ruta;

    if (!estado || estado == 0) {
      nombreImagen = 'default.png';
    } else {
      nombreImagen = `${id}.${extension}`;
    }

    switch (entidad) {
      case 'Usuario':
        ruta = `../assets/img/ImagenesUsuarios/${nombreImagen}`;
        break;
      default:
        ruta = `../assets/img/ImagenesUsuarios/${nombreImagen}`;
        break;
    }

    return ruta;
};

module.exports = {
    crearArchivo: crearArchivo,
    obtenerImagen,
    crearExcel,
    eliminarArchivo,
    bloqueadosExcel,
}