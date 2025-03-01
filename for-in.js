//primer ejemplo

//  de como trabaja el bucle for-in
/*let palabra = 'programando';
for (let f in palabra){
    document.write(f);
    document.write('<br>');
} el bucle for in solo funciona para objetos que contienen una cantidad de elementos 
 no para valores enteros para este se usa en for normal  */

 //ejemplo dos 

 
 /*let palabra = 'programando';
 for ( let f in palabra){
    document.write(palabra[f]);
    document.write('<br>');
 } en este ejemplo vemos como se muestra en pantalla el resultado indicando que nos muestre 
  la variable let palabra 
  en este programando */

//ejercicio queremos mirar cuantas vocales tiene la palbra murcielago

let palabra ='murcielagoseanding';
let vocal = 0;
for (let f in  palabra) {
    if (palabra [f]== 'a' || 
        palabra [f]== 'e' || 
        palabra [f]== 'i' || 
        palabra [f]== 'o' || 
        palabra [f]== 'u'){
        vocal++;
    }

}
document.write('cantidad de vocales: ', vocal);

