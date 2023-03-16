
let contador = 0;
let multiplicador = 1.0;

function zoomin(){

    if(contador < 4){
        multiplicador += 0.2;
        document.getElementById('map-view').style.transform = "scale(" + multiplicador + ")";
        contador++;
    }else{
        zoomreset()
    }
}

function zoomout(){

    if(contador > -4){
        multiplicador -= 0.2;
        document.getElementById('map-view').style.transform = "scale(" + multiplicador + ")";
        contador++;
    }else{
        zoomreset()
    }
}

function zoomreset(){
    document.getElementById('map-view').style.transform = "scale(1)";
    contador = 0;
    multiplicador = 1.0;
}