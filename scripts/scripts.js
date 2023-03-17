function receitaslista(receita){
    let verificar = document.getElementById("recipes"+receita).style.display

    if(verificar==="none"){
        document.getElementById("recipes"+receita).style.display = "block";
    }else{
        document.getElementById("recipes"+receita).style.display = "none";
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