let resultado
function suma (a, b){
    
    
    resultado = a + b;
    return resultado;

    
}
document.write(suma(89,12));
document.write('<br>');

function saludar() {
    return 'hola'
}
let mensaje = saludar();
document.write(mensaje)
document.write('<br>');


function valores(valor){
    valor = parseInt(prompt( 'INGRESA valor 1/3...'));
    switch (valor) {
        case 1:
            return 'rojo';
        case 2:
            return 'azul';
        case 3:
            return 'blanco';
        default:
          return  'Valor incorrecto';
    }
}
document.write(valores());