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
    }
    {
        nome: "Anteka",
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

}


const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];

  function retornarCarroFiat(carro) {
    return (carro.marca == 'Fiat');
    
  }

  const carrosFiat = carros.filter( retornarCarroFiat );

