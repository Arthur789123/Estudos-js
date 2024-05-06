// Foco da aula, tipos de DADOS
// Objetivo: dominar array
// Objetivo: dominar objeto


// Eu considero que temos
// Os tipos de dados SIMPLES
// Os tipos de dados Complexos

// Simples:
// Strings - Textos em geral
// Numbers - Numeros em geral
// Booleans - True e False

// Complexos:
// Array - Lista de dados
// Object - Um objeto/conjunto de dados

// ---------------------------------------------------

// DECLARANDO VARIAVEIS PASSO A PASSO
// var -> ao tipo da variavel
// nome1 -> ao nome da variavel
// "Arthur" -> o valor da váriavel
const nome1 = "Arthur";


// Existe 3 tipos de variaveis
// var, let, const


// var e let -> aceitam alterar valor
// const -> não aceita alterar valor

// Qual tipo de váriavel devo usar? 
// SEMPRE use const
// Caso não seja possível, use let
// let é indicado para calculos

// NUNCA use var


// Exemplos pratico
const nome2 = "Arthur";
const idade2 = 12;
const flamenguista2 = false;
 //console.log(nome2, "que tem", idade2, "anos", "é flamenguista?", flamenguista2);

// Trabalhando agora com Objeto:
const pessoa = {
    nome: "Arthur Versiani",
    idade: 12,
    time: "Cruzeiro",
    careca: false
};

// Exibindo todos os dados
console.log(pessoa);

// Exibir apenas um dado do Objeto
console.log(pessoa.nome)