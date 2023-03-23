const jogos = [
  { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
  { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
  { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
  { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
  { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
  { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
];

const verificaJogoRecente = (jogo) => jogo.anoLancamento > 2000;


const imprimirJogo = (jogo) => {
  const textoJogo = jogo.nome + ' - ' + jogo.plataforma;
  console.log(textoJogo);
  console.log("jogo");
};



const jogosRecentes = jogos.filter(verificaJogoRecente);

console.log(imprimirJogo);








const alunos = [
  { nome: "José", av1: 10, av2: 5, av3: 7 },
  { nome: "Ana", av1: 1, av2: 10, av3: 10 },
  { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
  { nome: "Diego", av1: 10, av2: 2, av3: 8 },
];

const aprovados = alunos.filter( aluno => {
  const media = (aluno.av1 + aluno.av2 + aluno.av3) / 3;

  return (media >= 7);
});

aprovados.forEach( (aluno) => console.log(aluno.nome) );





const carros = [
  { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
  { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
  { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
  { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];
const marca = "Ford";
const modelo = "KA+";

const carrosEncontrados = carros.filter( (carro) => {
  return( carro.marca == marca && carro.modelo == modelo );
  
});

console.log(carrosEncontrados)









const tecnologias = [
  { materia: "JavaScript", concluido: true },
  { materia: "React Native", concluido: false },
  { materia: "React", concluido: true },
  { materia: "Vue.js", concluido: true },
  { materia: "Angular", concluido: false },
];

const emAndamento = tecnologias.filter(tec => tec.concluido == false);
//console.log(emAndamento)








const produtos = [
  { id: 1, nome: 'Açúcar', ativo: true, valor: 2.00 },
  { id: 2, nome: 'Álcool 70', ativo: false, valor: 9.95 },
  { id: 3, nome: 'Luvas descartáveis', ativo: false, valor: 2.50 },
  { id: 3, nome: 'Papel toalha', ativo: true, valor: 2.50 },
];

let nomesProdutos = produtos.reduce( ( resultado, produto) => {
  return resultado + produto. nome + ', ';
}, "" );

console.log(nomesProdutos);