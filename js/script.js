guardarEnLocalStorage = (clave, datos) => {
    let datosString = JSON.stringify(datos);
    localStorage.setItem(clave, datosString);
}

obtenerDeLocalStorage = (clave) => {
    const datosString = localStorage.getItem(clave);
    return JSON.parse(datosString);
}


