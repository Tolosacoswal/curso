let palabra = 'JAVASCRIPT';
document.write('la palabra es:',palabra);
document.write('<br>');
//primera función string de JAVASCRIPT
// length nos indica la cantidad de letras que tiene una frase 

document.write('cantidad de letras: ', palabra.length);
document.write('<br>');

//ver ahora con base en lq cantidad en números equivalente en letras de la palabra que se pide  
//utilizamos el comando slice y le indicamos el numero o cantidad de letras 
//en este ejemplo 0,4 osea desde el 0 hasta el cuatro


document.write('las primeras cuatro letras: ', palabra.slice(0,4));
document.write('<br>');
//ahora con substring podemos usarla de la misma forma que slice
document.write('primeras cuatro letras ',palabra.substring(0,4));
document.write('<br>');

//cambiar valores en un texto lo que hacemos es reemplazar valores en nuestro texto
//esto con la función replace
let saludo = 'Hola a todos';
saludo = saludo.replace('Hola', 'Adios');
document.write(saludo);
//como vemos en ese ejemplo se realizo el cambio de 
//hola por adios usando la función replace 
document.write('<br>');

//poner o cambiar a mayúsculas 
document.write('en mayúsculas: ' ,palabra.toUpperCase());
document.write('<br>');
//poner en minúsculas
document.write('en minúscula: ',palabra.toLowerCase());
document.write('<br>');

//unir palabras o unir texto estamos uniendo 
//las palabras anteriores como lo era la variable JavaScript con palabra2 
//usando la funcion concat
let palabra2 ='curso de ';
document.write('unir palabras: ',palabra2.concat(palabra));
document.write('<br>');

//acortar espacios entre textos
//en este entorno no se ve o no es 
// notorio pero esta función es importante 
// al momento de estar generando código 
//este es para eliminar espacios del lado izquierdo
let palabra3 = '           hola       ';
document.write(palabra3);
document.write('<br>');
document.write(palabra3.trimStart());
document.write('<br>');
//para eliminar espacios a la derecha
document.write(palabra3.trimEnd());
//la mas util para eliminar seria trim
document.write('<br>');
document.write(palabra3.trim());
document.write('<br>');
//cortar ahora parte de una palabra
document.write(palabra.split('PT'));
document.write('<br>'); 





