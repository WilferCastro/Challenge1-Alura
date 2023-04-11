//ELEMENTO HTML TEXTAREA PARA OBTENER TEXTO
let text = document.getElementById("text")

//FUNCION PARA VALIDAR SOLO LETRAS MINUSCULAS Y VALIDAR CAMPOS VACIOS
function validate(mensaje){
    //VALIDAR QUE SE HAYA ESCRITO ALGO EN EL CAMPO DE TEXTO
    if(!text.value){
        swal({
            title: "Información",
            text: mensaje,
            icon: "warning",
            button: "Aceptar",
          });

        return false
    //VALIDAR QUE SOLO SE HAYAN ESCRITO LETRAS MINUSCULAS USANDO EXPRESIONES REGULARES
    }else{
        const regex = /^[a-z\s]+$/;

        if (!regex.test(text.value)) {
            swal({
                title: "Información",
                text: "La cadena contiene caracteres no válidos",
                icon: "warning",
                button: "Aceptar",
              });
            return false
        } 

        //DEVOLVEMOS UN TRUE PARA VALIDAR QUE SOLO HAY LETRAS MINUSCULAS
        return true
    }
}

//ELEMENTO DONDE VOY A PLASMAR EL TEXTO ENCRIPTADO
/*AL INICIO ESTE ELEMENTO ESTA OCULTO POR LA IMAGEN QUE SE MUESTRA EN PANTALLA, DEVIDO A QUE
NO HAY NINGUN TEXTO QUE MOSTRAR*/
let p_texto = document.getElementById("p_texto")

//EVENTO AL HACER CLICK EN EL BOTON ENCRIPTAR
document.getElementById("btn_encriptar").addEventListener("click", ()=>{
    //SI LA FUNCION "VALIDATE" NOS DEVUELVE UN TRUE, SIGNIFICA QUE EL TEXTO ESTA BIEN Y VAMOS A ENCRIPTARLO
    if(validate("Ingrese el texto que desea encriptar")){

        //OBTENEMOS LA FRASE INGRESADA DEL CUADRO DE TEXTO
        let texto = text.value

        //REEMPLAZAMOS CADA LETRA POR LA PALABRA USANDO EXPRESIONES REGULARES
        texto = texto.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");

        //PLASMAMOS EL TEXTO ENCRIPTADO EN EL LA ETIQUETA PARRAFO QUE SE ENCUENTRA OCULTA
        p_texto.innerText = texto

        //OCULTAMOS LA IMAGEN QUE ESTA TAPANDO LA VISIBILIDAD DEL PARRAFO
        document.getElementById("div_image").classList.add("d-none")

        //MOSTRAMOS EL PARRAFO QUE SE ENCUENTRA OCULTO JUNTO CON EL TEXTO ENCRIPTADO
        document.getElementById("div_text").classList.remove("d-none")

        //MOSTRAMOS ALERTA PARA MOSTRAR QUE TODO SALIO PERFECTO 
        swal({
            title: "En hora buena!",
            text: "Texto Encriptado!",
            icon: "success",
            button: "Aceptar",
        });
    }

}) 

//EVENTO AL HACER CLICK EN EL BOTON DESENCRIPTAR
document.getElementById("btn_desencriptar").addEventListener("click", ()=>{
    //SI LA FUNCION "VALIDATE" NOS DEVUELVE UN TRUE, SIGNIFICA QUE EL TEXTO ESTA BIEN Y VAMOS A DESENCRIPTARLO
    if(validate("Ingrese el texto que desea desencriptar")){

        //OBTENEMOS LA FRASE INGRESADA DEL CUADRO DE TEXTO
        let texto = text.value
        //REEMPLAZAMOS CADA PALABRA POR LA LETRA USANDO EXPRESIONES REGULARES
        texto = texto.replace(/enter/g, "e");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/ai/g, "a");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/ufat/g, "u");

        //PLASMAMOS EL TEXTO ENCRIPTADO EN EL LA ETIQUETA PARRAFO QUE SE ENCUENTRA OCULTA
        p_texto.innerText = texto
  
        document.getElementById("div_image").classList.add("d-none")
        document.getElementById("div_text").classList.remove("d-none")

        //MOSTRAMOS ALERTA PARA MOSTRAR QUE TODO SALIO PERFECTO 
        swal({
            title: "En hora buena!",
            text: "Texto Desencriptado!",
            icon: "success",
            button: "Aceptar",
        });
    }
}) 

//EVENTO AL HACER CLICK EN EL BOTON RECARGAR
document.getElementById("btn_refresh").addEventListener("click",()=>{
    window.location.reload();
})

//EVENTO AL HACER CLICK EN EL BOTON COPIAR
document.getElementById("btn_copiar").addEventListener("click",()=>{
    let  textoACopiar = document.getElementById("p_texto");
    let seleccion = window.getSelection();
    let rango = document.createRange();
    rango.selectNodeContents(textoACopiar);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    document.execCommand("copy");

    swal({
        title: "Información",
        text: "El texto ha sido copiado al portapapeles.",
        icon: "success",
        button: "Aceptar",
    });

})
