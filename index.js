let idade = 17;
const anoNascimento = 2006; 
let anoAtual = 2024; 
const nomeCompleto = "Gabriella Kaipper";

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos ");

anoAtual = anoAtual + 1; 

console.log(anoAtual);

idade = idade + 1;
console.log(idade);    

 //Agencia de viagens Nova york Rio de Janeiro Grecia  Canada Londres 
const listaDeDestinos = new Array(
  "Nova York",
  "Rio de Janeiro",
  "Grecia",
  "Canada", 
  "Londres"
  );
const idadeComprador = 16;

if(idadeComprador >=18) {
  console.log("Comprador maior de idade");
  consolc.log("Destinos disponiveis:" + listaDeDestinos);
} else {
  console.log("Infelizmente voce é menor de idade")
  console.log("Voce nao possui nenhum destino disponivel:");
}




