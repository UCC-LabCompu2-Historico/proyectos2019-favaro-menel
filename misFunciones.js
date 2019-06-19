function ecuacion(){
    resultados = document.getElementById("raices");

    var a = Number(document.rellenar.vc.value);
    var b = Number(document.rellenar.vl.value);
    var c = Number(document.rellenar.vi.value);
    var d;

    if (a==0)
    {
        var x1= (-c)/b;
        var x2=0;
    }
    else {
        d=b*b-4*a*c;
        if(d>0)
        {
            var x1 = (-b+(Math.sqrt(d)))/(2*a);
            var x2 = (-b-(Math.sqrt(d)))/(2*a);
        }
        if(d==0)
        {
            var x1= (-b)/2*a;
            var x2= (-b)/2*a;
        }
        if (d<0)
        {
            var x1=0;
            var x2=0;
        }
    }

    document.getElementById("x1").value = x1;
    document.getElementById("x2").value = x2;
}

function dibujarfuncion() {
    var canvas=document.getElementById("mycanvas");
    var ctx=canvas.getContext("2d");
    /*var y;
    var a = Number(document.rellenar.vc.value);
    var b = Number(document.rellenar.vl.value);
    var c = Number(document.rellenar.vi.value);*/
    ctx.beginPath();
    ctx.moveTo(50,20);
    ctx.quadraticCurveTo(20,100,200,20);
    ctx.lineWidth= 5;
    ctx.strokeStyle="#000";
    ctx.stroke();
    ctx.closePath();
}
//Boton reiniciar
function reiniciar()
{
    document.getElementsByName("rellenar").rellenar();
}

//Grilla
function dibujargrilla() {
    var canvas=document.getElementById("mycanvas");
    var ctx=canvas.getContext("2d");

    ctx.beginPath();
    for(let i=0;i<canvas.height;i+=10){
        ctx.moveTo(0,i+10);
        ctx.strokeStyle="#9c9c9c";
        ctx.lineTo(canvas.width,i+10);
        ctx.stroke();
    }
    for(let t=0;t<canvas.width;t+=10){
        ctx.moveTo(t+10,0);
        ctx.strokeStyle="#9c9c9c";
        ctx.lineTo(t+10,canvas.height);
        ctx.stroke();
    }
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(0,canvas.height/2);
    ctx.strokeStyle="#000";
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.stroke();

    ctx.moveTo(canvas.width/2,0);
    ctx.strokeStyle="#000";
    ctx.lineTo(canvas.width/2,canvas.height);
    ctx.stroke();
    ctx.closePath();
}