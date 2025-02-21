//Map é uma estrutura de dados em JS do tipo chave: valor
// onde a chave pode ser qualquer valor, string, number etc.
// e o valor tmb, pode receber um objeto, string, numero etc.

// no map, nao pode ter 2 chaves com o mesmo valor

const pessoas = [
  { id: 1, name: 'Felipe' },
  { id: 2, name: 'Marcos' },
  { id: 3, name: 'Ana' },
  { id: 3, name: 'Duda' },
  { id: 4, name: 'Beatriz' },
  { id: '6', name: 'Rodrigo' },
  { id: '5', name: 'Igor' },
  { id: 8, name: 'Isa' },
  { id: 7, name: 'Lívia' },
  { id: 9, name: 'Lívia' },
];

const pessoasMap = new Map();
pessoas.forEach(({ id, name }) => {
  pessoasMap.set(id, name);
});
console.log(pessoasMap);
console.log(pessoasMap.size);
