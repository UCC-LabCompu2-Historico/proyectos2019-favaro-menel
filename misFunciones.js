//Elegir variables Práctico
function mostrar_ocultar(id_elem) {
    if(id_elem=="mostrar1"){
        document.getElementById("unDiv").style.display = 'block';
        document.getElementById("dosDiv").style.display= 'none';
        document.getElementById("tresDiv").style.display= 'none';
        document.getElementById("unRes").style.display='block';
        document.getElementById("dosRes").style.display='none';
        document.getElementById("tresRes").style.display='none';
    }
    if(id_elem=="mostrar2"){
        document.getElementById("unDiv").style.display = 'block';
        document.getElementById("dosDiv").style.display= 'block';
        document.getElementById("tresDiv").style.display= 'none';
        document.getElementById("unRes").style.display='block';
        document.getElementById("dosRes").style.display='block';
        document.getElementById("tresRes").style.display='none';
    }
    if(id_elem=="mostrar3"){
        document.getElementById("unDiv").style.display='block';
        document.getElementById("dosDiv").style.display='block';
        document.getElementById("tresDiv").style.display='block';
        document.getElementById("unRes").style.display='block';
        document.getElementById("dosRes").style.display='block';
        document.getElementById("tresRes").style.display='block';
    }
}