let altura = 179; // em cm
let peso = 99; // em kg

const fatorConversao = 0.01;

// Converter altura para metros
let alturaMetros = altura * fatorConversao;

// Calcular IMC corretamente
let imc = peso / (alturaMetros * alturaMetros);

console.log(imc.toFixed(2)); // arredonda para 2 casas decimais
