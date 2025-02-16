//la condicional while es una estructura de control/let f = 10;
/*
while (f >= 0) {
    document.write('vuelta # ',f);
    document.write('<br>');
    f--;
    
}
document.write('FIN ');*/

let f = 1;
let suma = 0;
let valor;

while (f <= 5) {
    valor = parseInt(prompt('ingresa valor '));
    suma = suma + valor;
    f++;
}
document.write("la suma es:", suma, '<br>');
