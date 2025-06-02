const fatorConversao = 0.01;

const classificacoesIMC = [
  { max: 18.5, classificacao: "abaixo do peso" },
  { max: 25, classificacao: "peso normal" },
  { max: 30, classificacao: "sobrepeso" },
  { max: Infinity, classificacao: "obesidade" }
];

function classificao(imc) {
  for (const item of classificacoesIMC) {
    if (imc < item.max) {
      return item.classificacao;
    }
  }
}

function calcularIMC(pessoa) {
  const alturaMetros = pessoa.altura * fatorConversao;
  const imc = pessoa.peso / (alturaMetros * alturaMetros);

  const classificaoimc = classificao(imc);
  const resultado = `O resultado é ${imc.toFixed(2)}`;

  return {
    nome: pessoa.nome,
    imc: imc.toFixed(2),
    classificaoimc,
    resultado
  };
}

const pessoa = {
  nome: 'Weslley',
  peso: 10,
  altura: 190
};

console.log(calcularIMC(pessoa));
