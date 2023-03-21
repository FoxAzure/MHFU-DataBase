function receitaslista(receita){
    let verificar = document.getElementById("recipes"+receita).style.display


    for(let i=1;i<=5;i++){
        document.getElementById("recipes"+i).style.display = "none";
        document.getElementById("bt-recipes"+i).style.backgroundColor  = "rgb(134, 84, 37)";
    }

    if(verificar==="none"){
        document.getElementById("recipes"+receita).style.display = "block";
        document.getElementById("bt-recipes"+receita).style.backgroundColor  = "white";
        document.getElementById("felyne-img").style.display = "none";
    }else{
        document.getElementById("recipes"+receita).style.display = "none";
        document.getElementById("bt-recipes"+receita).style.backgroundColor  = "rgb(134, 84, 37)";
        document.getElementById("felyne-img").style.display = "block";
    }

    
}

function questlista(star){
    let verificar = document.getElementById("star"+star).style.display

    if(verificar==="none"){
        document.getElementById("star"+star).style.display = "block";
    }else{
        document.getElementById("star"+star).style.display = "none";
    }

    
}

function paginaquest(){
    window.location.href = "./quest.html";
}

