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
function dibujargrilla() {
    var canvas=document.getElementById("mycanvas");
    var ctx=canvas.getContext("2d");
    ctx.fillStyle="#000";
    ctx.beginPath();
    ctx.moveTo(0,canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.moveTo(canvas.width/2,0);
    ctx.lineTo(canvas.width/2,canvas.height);
    ctx.stroke();
    ctx.fillStyle="#9c9c9c";
    ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.lineTo(50,50);
    ctx.closePath();
}