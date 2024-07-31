/**
 * Mi primer script
 * se encarga de mostrar un mensaje en la consola
 */
var numero1=parseInt(prompt("ingrese un numero"))
var numero2=parseInt(prompt("ingrese otro numero"))
console.log(typeof(numero2))
document.querySelector("#numero1").innerHTML=typeof(numero2)


function sumar(n1,n2){
    return n1+n2
}
function restar(n1,n2){
    return n1-n2
}
function multiplicar(n1,n2){
    return n1*n2
}
function potenciar(n1,n2){
    var resultado=1
    for(var i=1;i<=n2;i++){
        resultado= multiplicar(resultado,n1)
    }
    return resultado
}
function dividir(n1,n2){
    return n1/n2
}
function modulo(n1,n2){
    return n1%n2
}
var menu=9
while(menu!=0){
    menu=parseInt(prompt("ingrese una opción\n1-sumar\n2-restar\n3-multiplicar\n4-dividir\n5-módulo\n6-potenciar\n0-salir"))
    // switch(menu){
    //     case 1:
    //         console.log(sumar(numero1,numero2))
    //         break
    //     case 2:
    //         console.log(restar(numero1,numero2))
    //         break
    //     case 3:
    //         console.log(multiplicar(numero1,numero2))
    //         break
    //     case 4:
    //         console.log(dividir(numero1,numero2))
    //         break
    //     case 5:
    //         console.log(potenciar(numero1,numero2))
    //         break
    //     case 0:
    //         console.log("adios")
    //         break
    //     default:
    //         console.log("opcion no valida")
    // }
    if (menu==1) {
        console.log("la suma de los números es "+sumar(numero1, numero2))
    } else if (menu==2) {
        console.log("la resta de los números es "+restar(numero1, numero2))
    } else if (menu==3) {
        console.log("la multiplicación de los números es "+multiplicar(numero1, numero2))
    } else if (menu==4) {
        console.log("la división de los números es "+dividir(numero1, numero2))
    } else if (menu==5) {
        console.log("el módulo de los números es "+modulo(numero1, numero2))
    } else if (menu==6) {
        console.log("la potencia de los números es "+potenciar(numero1, numero2))
    } else if (menu==0) {
        console.log("Adiós")
    } else {
        console.log("Opción no válida")
    }

}