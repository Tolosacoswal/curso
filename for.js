//lo utilizamos cuando conocemos la cantidad de veces que queremos
//que se ejecute el bloque de instrucciones 
//para user este bucle no usemos el live server
//en este caso usamos el enlace de nuestro archivo html
//vamos a trabajar con el bucle for
//a continuación indicamos que nuestro bucle 
//inicia en 1 ; y se ejecutara si f es menor que cinco y al final con el 
//++ indicamos que por cada ejecución 
//f suma una unidad
/*for (let f = 3; f <= 1000; f+=29) {
    document.write('vuelta numero: ', f);
    document.write('<br>');
}*/
//si en f++ cambiamos a += nos genera nuevos cambio 
//si en f < 5 reemplazamos nos genera nuevos cambios 
//como a continuacion 

/*for (let f = 1; f <= 20; f += 2){
    if (f == 15) {
    document.write('este valor es: ', f);
        
    }
    

}
    document.write('fin');*/

 //vamos a crear un array con un for 

const frutas = ['peras', 'mangos','lulos','bananas']    
//creamos nuestro bucle for el cual se inicializara en cero 

for (let f = 0; f < frutas.length; f++) {
   document.write('fruta: ',f,' = ' , frutas[f]);
   document.write('<br>');
    
}