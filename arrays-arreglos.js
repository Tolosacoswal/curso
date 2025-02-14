//los arrays contienen indices numéricos recordemos 
// que el primer indice es 0
//iniciamos declarando un array asi 

let numeros = [];
//esta declaración 9inicial no es obligatoria  con solo dejar 
// las dos siguientes también funcionaria sin problema
numeros = [45,66,789,23,12,0];
document.write('elementos: ',numeros);
document.write('<br>');
//si quiero ver un numero en esppecifico hacemos lo siguiente 
document.write('el primer elemento: ',numeros[0]);
document.write('<br>');
//para cambiar un numero de la lista de nuestro array 
//lo que hacemos es nuevamente llamar a nuestra variable numeros y 
// le indicamos que el numero en la posicion 0 
// se cambie por otra cifra en este caso le pediremos por 33 
numeros[0] = 33;
document.write('elementos: ',numeros);
document.write('<br>----------');

//vamos ahora a realizar un array con valores de texto

let frutas = ['manzanas', 'peras','mangos','fresas'];
document.write('<br>');
document.write('frutas: ',frutas);
document.write('<br>');
//para numeros o textos se maneja de la misma manera 


//metodos  o funciones internas de JAVASCRIPT
//metodos de los ARRAYS
//ver cantidad de elementos 
document.write('cantidad: ', numeros.length);//con este metodo .length indica la cantidad de datos en nuestro array
document.write('<br>');

//como podemos saber ultimo elemento
document.write('ultimo dato: ', numeros [numeros.length-1]);//lo que hace esta funcion es
//con .length-1 es tomas todos los datos y restar el ultimo 
document.write('<br>');

//arrays en tipo Texto aunque no se vea con 
// lo que sigue un dato en numero pasa a string o texto 
document.write('en string: ',numeros.toString());
document.write('<br>');

//unir tipos de arrays usando concat
let letras =['a','b','c'];
let numeros2 =[1,2,3];
document.write('combinar:', letras.concat(numeros2));
document.write('<br>');


//borrar elemento de un array
//usamos el metodo pop este metodo le pide a nuestro codigo
//borrar el ultimo dato de nuestro array
numeros.pop();
document.write(numeros);
document.write('<br>');

//agregar elementos a un array
//usamos el metodo push para agregar indicando ell que quieres agregar
numeros.push(0);
document.write(numeros);
document.write('<br>');

//eliminar primer elemento
numeros.shift();
document.write(numeros);
document.write('<br>');

//agregar elemento al inicio
numeros.unshift(8);
document.write(numeros);
document.write('<br>');

//eliminar elementos a partir de un punto
//aqui con splice le indicamos que desde la posicion 2 se lleve tres valores
// como lo vemos a continuacion 
numeros.splice(2,1);
document.write(numeros);
document.write('<br>');

//como copiar un array
//es confuso pero pide llevar de la posicion 1 a la posicion 3 pero en 
//JAVASCRIPT nos toma la posicion antes a la que ponemos 
//en este caso hasta la 2
let cantidades = [100,101,102,103,104];
let copia = cantidades.slice(1,3);
document.write('copia de array;', copia);
document.write('<br>');

//ejercicio de array practica 
let carros = ['mazda','ford','renauld','subaru'];
document.write('lista carros: ', carros);
document.write('<br>');
document.write('lista de carros: ', carros.sort());
document.write('<br>');
//ejercicio array practica 


//organizar array alfabéticamente 
let objetos = ['oso','maleta','espejo','farol'];
document.write(objetos.sort());
document.write('<br>');

//los trae del ultimo al primero
document.write(objetos.reverse());
document.write('<br>');






































