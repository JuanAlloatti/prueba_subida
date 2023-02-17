const dniValidator = (value) => {
    if (/^\d{8}[a-zA-Z]$/.test(value)){
        return false                            
    }
    const listaLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const numero = value.slice(0,8);
    const letra = value.slice(8,9);
    
    const posicion = parseInt(numero) % 23;
    if(listaLetras.at(posicion) !== letra.toUpperCase()){
        return false                                
    }

    return true;
}

export {dniValidator}