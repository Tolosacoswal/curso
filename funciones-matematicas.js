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


