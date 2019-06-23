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
            alert("Raices Imaginarias");
        }
    }

    document.getElementById("x1").value = Number(x1.toFixed(2));
    document.getElementById("x2").value = Number(x2.toFixed(2));

    var canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    ctx.lineWidht= 6;
    ctx.strokeStyle= "#001f33";
    ctx.beginPath();
    ctx.moveTo(document.getElementById("x1").value,canvas.width/2);
    ctx.quadraticCurveTo(canvas.height/2,document.getElementById("vi").value,document.getElementById("x2").value,canvas.width/2);
    ctx.stroke();
}

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
    ctx.closePath();

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

function validanumero(elemento){
    if (!/^([0-9\-])*$/.test(elemento.value)){
        alert("Ingrese solo numeros");
        elemento.value = '';
    }
}