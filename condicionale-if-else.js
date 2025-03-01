//vamos a declara dos variables 
//if quiere decir o nos indica un (SI) y el ELSE nos indica un (SI NO)
//esta es una de las formas de manejar ELSE-IF
/*let nombre, edad;
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
}*/
/*let nombre, edad;
nombre = prompt('dime tu nombre...');
edad = prompt('dime tu edad...');
edad=parseInt(edad);
if (edad <= 18) {
    document.write('hola ', nombre);
    }else{
        document.write('se requieren datos');
    };*/

    let usuario = prompt("Escribe si o no:");

    if (usuario.toLowerCase() === "si") {
      document.write("Confirmado ✅");
    } else {
      document.write("No confirmado ❌");
    }
    