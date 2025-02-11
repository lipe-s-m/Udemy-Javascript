// Map
// Itera sobre um array retorna outro array com valores modificados (se quiser)
//Sempre retorna um Array, com a mesma quantidade de elementos
//sempre por ... pra copiar o objeto, pra nao alterar o Objeto original

// Dobre o valor de cada numero
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map((numero) => numero * 2);
console.log(numerosDobrados);

// Para cada elemento:
const pessoas = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 19 },
  { name: 'ROSANA', age: 32 },
  { name: 'Wallace', age: 47 },
];
// Desafio 1: Retorne uma string com o nome da pessoa:
const pessoasNome = pessoas.map((pessoa) => pessoa.name);
console.log('\nDesafio 1: ', pessoasNome);

// Desafio 2: Remova apenas a chave "nome" do objeto:
const pessoasSemNome = pessoas.map((pessoa) => {
  const pessoaTemporario = { ...pessoa };
  delete pessoaTemporario.name;
  return pessoaTemporario;
});
console.log('\nDesafio 2: ', pessoasSemNome);

// Desafio 3: Adicione uma chave "id" em cada objeto:
const pessoasComId = pessoas.map((pessoa, indice) => {
  const pessoaTemporario = { ...pessoa };
  pessoaTemporario.id = indice + 1;
  return pessoaTemporario;
});
console.log('\nDesafio 3: ', pessoasComId);
