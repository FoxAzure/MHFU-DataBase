function receitaslista(receita){
    let verificar = document.getElementById("recipes"+receita).style.display

    if(verificar==="none"){
        document.getElementById("recipes"+receita).style.display = "block";
    }else{
        document.getElementById("recipes"+receita).style.display = "none";
    }

    
}