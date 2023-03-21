var monstros = [
    {
        nome: "Popo",
        icon: "FrontierGen-Popo_Icon.png",
        img: "",
        tipo: 1,
    },
    {
        nome: "Anteka",
        icon: "FrontierGen-Anteka_Icon.png",
        img: "",
        tipo: 1,
    },
    {
        nome: "Vespoid",
        icon: "FrontierGen-Kelbi_Icon.png",
        img: "",
        tipo: 2,
    }
]




var elder_quests = [
    {
        id: 1,
        local: "Snowy Mountains",
        hora: "Day",
        objetivo: "Deliver 5 Mountain Herbs",
        monstros: ["Popo", "Anteka"],
        reward: "300 z",
        contract: "0 z",
        tempolimite: "50 min",
        notas: "A Tigrex also appears during this Quest",


    }
]

function carregar(){

    objetivo = elder_quests[0].objetivo
    icone = document.getElementById('icon-monster');

    icone.src = "../galeria/monster/icons/" + monstros[0].icon;
    document.getElementById('quest-objective').innerHTML = objetivo;


    monstros.filter((jogo === 1) => {
        alert(jogo.tipo);
    });


    //monstros.forEach((jogo) => {
        //alert(jogo.tipo);
    //});
}


