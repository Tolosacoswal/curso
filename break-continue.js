/*aqui ejemplo de break

for (let f = 0; f < 10; f++) {
    document.write(f);
    document.write('<br>')
        if( f == 3){
           document.write('estas en la vuelta 3 gente dddd');
           document.write('<br>'); 
           break;    
        }
    
    
}*/

//ejemplo de continue

let palabra = 'estudios';
let resultado = '';

for(let f in palabra){
    if(palabra[f]== 'a'){
        continue;
    }else {
        resultado += palabra[f];
    }
}
document.write(resultado);