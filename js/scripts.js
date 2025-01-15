/**mostrar el texto cuando la web cuando la web se muestra en entornos de pantalla pequeña */
function mostrarTexto(foto){
    var texto = foto.querySelector('.texto-foto-individual')

    if(texto.style.display === "none"){
        texto.style.display = "block"
    } else {
        texto.style.display="none"
    }

    
}