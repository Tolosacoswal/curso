//vamos a declara dos variables 
//if quiere decir o nos indica un (SI) y el ELSE nos indica un (SI NO)
let nombre, edad;
nombre = prompt('INGRESE NOMBRE...');
edad = prompt('INGRESE EDAD...');
if (edad >=18) {
    document.write('hola bienvenido',nombre);
}else{
    document.write(nombre,'eres menor de edad');
}