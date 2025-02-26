/*let valor;
do {
    valor = parseInt(prompt('INGRESA EL VALOR  1 PARA SALIR'));
    document.write('ingrese valor: ', valor);
    document.write('<br>');
} while (valor != 1);
    document.write('fin')*/

let usuario, clave, control;

control = 0;
usuario = prompt('INGRESA USUARIO...');
clave = prompt('INGRESA TU CONTRASEÑA');
do {
    if( clave != 'Colombia2024*'){
        clave = prompt('CONTRASEÑA INCORRECTA\n'+'INGRESA CONTRASEÑA NUEVAMENTE...')
        control = 0;
    }
    else{
        control = 1
    }
} while (control != 1);
    document.write('ACCESO CORRECTO')