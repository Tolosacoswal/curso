//vamos a declara dos variables 
//if quiere decir o nos indica un (SI) y el ELSE nos indica un (SI NO)
//esta es una de las formas de manejar ELSE-IF
let nombre, edad;
nombre = prompt('INGRESE NOMBRE...');
edad = prompt('INGRESE EDAD...');
edad =parseInt(edad);
if (edad >=18) {
    document.write('hola bienvenido ',nombre);
}else{
    if (edad < 18) {
        document.write(nombre,'eres menor de edad');

    }
    else{
        document.write('sin datos');
    }
}