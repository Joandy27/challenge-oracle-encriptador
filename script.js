/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


/*para darle funcionalidad a un boton en html con Js
creamos una funcion/metodo en js, entonces vamos al html y nos dirigimos al boton
ese boton debemos colocarle un evento que es: onclick="" y dentro de las comillas el nombre de nuestra
funcion en Js
*/

function encriptar() {

    var textoE = document.getElementById("input-texto").value;

    if(textoE == "") {
        alert("Escriba un texto para encriptar")
    } 


    //Para remplazar un caracter, cadena, etc.. utilizamos el metodo .replace()

    /*En el metodo hay que declarar una busqueda global del caracter que deseamos 
    reemplaza por eso utilzamos la g (/ /g) dentro de los slash va el caracter que queremos reemplazar
    seguido de coma(,) y la letra, o palabra por la cual deseamos reemplazar*/

    textoE = textoE.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai")
    .replace(/o/g,"ober").replace(/u/g,"ufat");

    /*Para encriptar varias caracteres en una cadena usamos la funcion y su busqueda global, 
    solo que para cada palabra
    debemos llamar el metodo repetidas veces, al final de la otra llamada (LINEA 39-40)*/
    
    /*Para "imprimir" un mensaje igualamos el valor del messageBox/input en donde se va mostrar
    con el del texto obtenido. para darle impresion al texto encriptatdo*/

    document.getElementById("msg").value = textoE;

    
}


//Para desencriptar simplemente es lo opuesto a encriptar

function desencriptar() {

    var textoD = document.getElementById("input-texto").value;

    if(textoD == "") {
        alert("Escriba el texto para desencriptar")
    } 

    textoD = textoD.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i")
    .replace(/ober/g,"o").replace(/ufat/g,"u");

    document.getElementById("msg").value = textoD;

}

/*creamos una funcion para copiar el texto del input,
donde recibe el input en una variable (sin necesidad del .value) - (LINEA 81)*/

function copiarTexto() {
 
    var textoC = document.getElementById("msg");
    textoC.select();
    document.execCommand("copy");
}


//Con esta funcion validamos que solo se escriban letras y sin acentos

function soloLetras(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toString();
    letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";

    especiales = [8, 13];
    tecla_especial = false;

    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break; 
        }

    }

    if(letras.indexOf(teclado) == -1 && !tecla_especial) {
        alert("No puede ingresar numeros o caracteres especiales");
        return false;
    }
    /*Para lo de las mayusculas vamos al html y le agregamos la propiedad onkeyup"" al input correspondiente y
    dentro de ahi escribimos el codigo que nos convierte los caracteres a minusculas*/
}