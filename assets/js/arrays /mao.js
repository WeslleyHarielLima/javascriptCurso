// Criamos uma lista de números de 1 a 5
const lista = [1, 2, 3, 4, 5];

// Usamos o método map para transformar cada número da lista em um objeto
const novaLista = lista.map((item) => {
    // Para cada número (item), retornamos um objeto com a chave 'number'
    return { number: item };
});

// Exibimos a lista original no console
console.log("Lista original:", lista);

// Exibimos a nova lista transformada no console
console.log("Nova lista transformada:", novaLista);
