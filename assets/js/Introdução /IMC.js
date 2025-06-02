const fatorConversao = 0.01;

function classificao(imc){
if (imc <18.5) {
    return "abaixo do peso";
} else if (imc >= 18.5 && imc < 25){
    return "peso normal"
}
else if(imc >= 25 && imc <30){
    return "sobrepeso"
}
else{
    return obsidade 
}
}

function calcularIMC(pessoa){


let altura = pessoa.altura; 
let peso = pessoa.peso; 



// Converter altura para metros
let alturaMetros = altura * fatorConversao;

// Calcular IMC corretamente
let imc = peso / (alturaMetros * alturaMetros);


console.log(imc.toFixed(2)); // arredonda para 2 casas decimais

const classificaoimc = classificao(imc);
const resultado = "O resultado é " + imc.toFixed(2);

return {
    nome:pessoa.nome,
    imc,
    classificaoimc,
    resultado
}
}

const pessoa = {
    nome:'Weslley',
    peso:40,
    altura:190
}

console.log(calcularIMC(pessoa))




