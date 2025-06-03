// //contador sem converte os segundos assim, passa o milissegundos

// setInterval (function (){
//     console.log('três segundo')
// }, 3000)

// //converte o tem de milissegundos pra segundos 
// let getTimeInMilliseconds = function (tempoInSec) {
//   return tempoInSec * 1000;
// };
// //inicia o contador com serInterval que vai rever o tempo da funcao de coversao 
// setInterval(function () {
//   console.log('faaz algo');
// }, getTimeInMilliseconds(colocar tempo));

//converte o tem de milissegundos pra segundos 

// Função que converte segundos em milissegundos

let getTimeInMilliseconds = function (tempoInSec) {
  return tempoInSec * 1000; // Multiplica o tempo por 1000 para converter segundos em milissegundos
};

// Função que inicia um contador regressivo
function iniciarContador(tempoEmSegundos) {
    let segundosRestantes = tempoEmSegundos; // Armazena quantos segundos ainda restam

    // Cria um intervalo que será executado a cada 1 segundo
    const atualizar = setInterval(function() {
        console.log(segundosRestantes); // Mostra no console quantos segundos faltam

        if (segundosRestantes === 0) {
            clearInterval(atualizar); // Para o intervalo quando chega a 0
        } else {
            segundosRestantes--; // Reduz 1 segundo a cada execução
        }
    }, getTimeInMilliseconds(1)); // Executa a função a cada 1 segundo (convertido para 1000 ms)
}

// Exemplo de uso: inicia um contador de 5 segundos
iniciarContador(5);


// Para testar a função:
// Inicia um contador de 5 segundos