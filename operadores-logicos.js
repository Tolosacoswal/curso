// operador && (Y) en la cual deben cumplirse las dos condiciones
//deben ser iguales para que el valor sea verdadero

/*let a, b;
a = 20;
b = 22;
//preguntaremos si A es igual a B en el navegador
//la respuesta sera FALSE
document.write(a == b);
document.write('<br>');

//vamos a hacer un ejercicio de && (Y)
let pais, edad 
pais = prompt('ingresa tu pais... ');
edad = prompt('indicanos tu edad...');

if (pais == 'Colombia' && edad >=18) {
   document.write('eres colombiano'); 
}else{
    document.write('o no eres colombiano o no eres adulto');
}*/

//operador || (o)

let dia, mes, anio;
dia = prompt('ingresa dia...');
mes = prompt('ingresa mes...');
anio = prompt('ingresa año');

if (mes == 1 || mes == 2 || mes  == 3 ) {
    document.write('pertenece al primer trimestre');
}else{
    document.write('no pertenece al primer trimestre');
}


