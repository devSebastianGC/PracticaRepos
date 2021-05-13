
window.onload = main()

function main(){

}

function llamada(){
    if(document.getElementById("nom").checked === true){
        var n = document.getElementById("nombre").value;
        document.getElementById("parrafo").innerHTML=(`su nombre es: ${n}`);
    }else if(document.getElementById("contra").checked === true){
        var p = document.getElementById("pass").value;
        document.getElementById("parrafo").innerHTML=(`Su contraseña es: ${p}`);
    }

    /*var lista = document.getElementById("persona").value;
    console.log(`${lista}`)
    if(lista === "nom"){
        var n = document.getElementById("nombre").value;
        document.getElementById("parrafo").innerHTML=(`su nombre es: ${n}`);
        lista = "";
    }else if(lista == "contra"){
        var p = document.getElementById("pass").value;
        document.getElementById("parrafo").innerHTML=(`Su contraseña es: ${p}`);
        lista = "";
    }*/
    
    //console.log(`${n}:${p}`);
};


function validar(valor){
    if(valor.value == ""){
        document.getElementById("parrafo").style.color = "#FF0000"
        document.getElementById("parrafo").innerHTML=(`Debe ingresar datos`);
    }
}

var borrar = (valor) => {
    valor.value = "";
}

function limpiar(valor){
    document.getElementById("parrafo").innerHTML=("")
}

function activar(){
    document.getElementById("nombre").focus();
}

/*function sumar(){
    var num1 = 15;
    var num2 = 20;
    var suma=num1+num2;
    console.log(`El resultado de la suma es: ${suma}`);
}
sumar()*/

/*function sumar(x,y){    
    var suma=x+y;
    return suma
}

var sumar = (x,y)=>{return x+y;}
var num1= 16;
var num2=8;
console.log(`la suma es ${sumar(num1,num2)}`)
*/