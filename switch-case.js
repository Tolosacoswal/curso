//este es un ejercicio de switch-case 

/*let valor;
valor = parseInt(prompt('Ingrese un valor entre 1 y 3'));
switch (valor) {
    case 1:
        document.write('Ingreso 1');
        break;
    case 2 :
        document.write('Ingreso 2');    
        break;
    case 3:
        document.write('Ingreso 3'); 
        break;   
    default:
        document.write('no es un valor correcto')
        break;
}*/

let color
color = prompt('Ingresa tu color:  ROJO/VERDE/AZUL');

switch (color) {
    case 'ROJO':
        document.write('Elegiste ROJO');
        
        break;
    case 'VERDE':
        document.write('Elegiste VERDE');
        break;
    case 'AZUL':
        document.write('elegiste AZUL');
        break
    default:
        document.write('no es un color valido');
        break;
}

