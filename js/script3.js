function sumar(){
    var n1= parseInt(document.querySelector("#numero1").value)
    var n2= parseInt(document.getElementById("numero2").value)
    document.querySelector("#resultado").innerHTML=(n1+n2)
    borrar()
}
function restar(){
    var n1= parseInt(document.querySelector("#numero1").value)
    var n2= parseInt(document.querySelector("#numero2").value)
    document.querySelector("#resultado").innerHTML=(n1-n2)
    borrar()
}
function multiplicar(){
    var n1= parseInt(document.querySelector("#numero1").value)
    var n2= parseInt(document.querySelector("#numero2").value)
    document.querySelector("#resultado").innerHTML=(n1*n2)
    borrar()
}
function dividir(){
    var n1= parseInt(document.querySelector("#numero1").value)
    var n2= parseInt(document.querySelector("#numero2").value)
    document.querySelector("#resultado").innerHTML=(n1/n2)
    borrar()
}

function borrar(){
    document.querySelector("#numero1").value="0"
    document.querySelector("#numero2").value="0"
}

function fiebre(){
    var temperatura=parseFloat(document.querySelector("#temperatura").value)
    if (temperatura>37.5) {
        document.querySelector("#resultado2").innerHTML="Tiene fiebre"
        document.querySelector("#resultado2").className="fiebre"
    } else {
        document.querySelector("#resultado2").innerHTML="No tiene fiebre"
        document.querySelector("#resultado2").className="no-fiebre"

    }


    

}
const numeros= document.getElementsByClassName("advertencia")
console.dir(numeros)

const logo= document.createElement("div");
logo.className="logo tam"
logo.id="miLogo"
document.getElementById("inicio").appendChild(logo)

document.getElementById("duplicado").remove()

const miLogo= document.getElementById("miLogo")

miLogo.addEventListener("click",function(){
    alert("Has hecho click en el logo")
});