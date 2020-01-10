function contraseñaPorRut(rut) {
    const base = rut.split('-', 1);
    const contenedor = base[0].replace('.', '');
    const posicion = contenedor.lastIndexOf('.');
    const limite = contenedor.length;

    const clave = contenedor.slice(0, posicion) + contenedor.slice(posicion + 1, limite);

    return clave;
}

function tieneExtension(elemento) {
    // Logica esta en que si tiene imagen es = 1 y si no tiene no tendra absolutamente nada
    if (elemento) {
        return 1;
    } else {
        return 0;
    }
}

function capitalizar(texto) {
    let contenido = ''
    let palabras = texto.split(' ');
    palabras.forEach((palabra, indice) => {
        palabras[indice] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        contenido += palabras[indice] + ' ';
    });

    return contenido;
}

module.exports = {
    contraseñaPorRut,
    tieneExtension,
    capitalizar
}