//función de redondeo de cifras matemáticas
// vamos a utilizar otra palabra reservada en este caso VAR
//con round yo redondeo los valores de decimales a números enteros como veremos a continuación tambien utilizaremos una clase MATH esto se explicara  conforme se avance en el curso 
//match contiene o permite realizar funciones matemáticas dentro de mi código
//con round podemos redondear una cifra 

var precio = Math.round(499.51);
document.write('precio redondeado:', precio);
document.write('<br>');
//ceil redondea sin importar el decimal siempre redondea hacia arriba
var precio = Math.ceil(299.449);
document.write('precio redondeado:', precio);
document.write('<br>');
//floor hace el redondeo hacia abajo 
var precio = Math.floor(540.7);
document.write('precio redondeado:', precio);
document.write('<br>');
<<<<<<< HEAD
=======
//la función sin nos calcula el SENO 
var seno =  Math.sin(45);
document.write('seno de 45: ',seno);
document.write('<br>')
//asi mismo podemos validar las siguientes 
//Math.cos  coseno;
//Math.tan   tangente

//calcular el exponencial de un numero 
 var exponencial = Math.exp(2);
 document.write('exponencial de 2: ',exponencial );
 document.write('<br>'); 
 //calcular logaritmo de un numero 
 var logaritmo = Math.log(10);
 document.write('logaritmo de 10: ', logaritmo);
 document.write('<br>');
 //valor absoluto de un numero 
 var absoluto = Math.abs(-10);
 document.write('valor absoluto -10: ', absoluto);
 document.write('<br>');
 //calcular valor máximo de secuencia 
 var máximo = Math.max(10,50,600,1,8);
 document.write('mayor valor: ', máximo);
 document.write('<br>');
 //calcular valor minimo
 var mínimo = Math.min(10,55,785,2,3,9);
 document.write('valor mínimo: ', mínimo);
 document.write('<br>');
//traer en pantalla valor aleatorio
var aleatorio = Math.random();
document.write('valor aleatorio: ', aleatorio);
document.write('<br>');
//para traer un valor aleatorio no decimal usamos en combinación round y random asi 
var aleatorio = Math.round(Math.random()*67); //después de random podemos dar en que rango queremos que nos de el valor aleatorio usando * y el numero de el valor que necesitamos 
document.write('valor aleatorio: ', aleatorio);
document.write('<br>');
//raíz cuadrada de un numero
var raíz =Math.sqrt(81);
document.write('raíz de 81: ', raíz);
document.write('<br>');
//exponente de un numero  aclarar que el que se hizo antes fue exponencial y este es exponente 
var exponente = Math.pow(4,2);
document.write('valor de 4 a la 2:' ,exponente);
document.write('<br>');
//con este se termina un video mas 


