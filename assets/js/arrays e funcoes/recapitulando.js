//criar lista de tarefas

const tasks = [ 
    { descricao: "Passear com o cachorro", prioridade: 1, status: "concluída" }, 
    { descricao: "Comprar ingredientes para o almoço", prioridade: 1, status: "concluída" }, 
    { descricao: "Fazer o almoço", prioridade: 1, status: "pendente" }, 
    { descricao: "Ir para a academia", prioridade: 2, status: "pendente" }, 
    { descricao: "Resolver exercício do curso", prioridade: 1, status: "concluída" },
     { descricao: "Ir para o futebol", prioridade: 3, status: "pendente" } 
    ];

//adicionar novas tarefas

tasks.push({ descricao: "Tocar violão", prioridade: 2, status: 'pendente'});


//remover tarefas concluidas(selecionando as pendentes)

const tarefaspendentes = tasks.filter((tasks) => tasks.status === 'pendente')
console.log(tarefaspendentes)


//marcar tarefas como concluidas

const tarefasConcluidas = tasks.map((tasks) => ({...tasks,status:'concluídas'}))

console.log(tarefasConcluidas)


//ordernar por prioridade

const tarefasOrdenadas = tasks.sort((tarefaAnterior, tarefaPosterior) => tarefaAnterior.prioridade - tarefaPosterior.prioridade);

console.log(tarefasOrdenadas)


//contar tarefas pendentes 

const contadorTarefasPendentes = tasks.reduce((anterior, proxima) => {
  if (proxima.status === 'pendente') {
    return anterior + 1;
  } else {
    return anterior;
  }
}, 0);

//Buscar de forma especifica
const selecionarTarefa = tasks.find((tarefa) => tarefa.descricao === "Ir para a academia");
console.log(selecionarTarefa)

//Verificar se todas as condição sao concluidas
const verificarConcluidas = tasks.every((tarefa) => tarefa.status === 'concluída');
console.log(verificarConcluidas)
