// Filter
//Sempre retorna um Array, com a mesma quantidade de elementos, ou menos

// retorne numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter((numero) => {
// //   return numero > 10
// // })
const numerosFiltrados = numeros.filter((numero) => numero > 10);
console.log(numerosFiltrados);

// Para cada elemento:
const pessoas = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 19 },
  { name: 'ROSANA', age: 32 },
  { name: 'Wallace', age: 47 },
];
//retorne as pessoas que tem o nome com 5 letras ou mais;
//retorne as pessoas que tem mais de 50 anos;
//retorne as pessoas cujo nome termina com a;

const desafio1 = pessoas.filter((pessoa) => pessoa.name.length >= 5);
const desafio2 = pessoas.filter((pessoa) => pessoa.age > 50);

const desafio3 = pessoas.filter(
  (pessoa) => pessoa.name.toLowerCase()[pessoa.name.length - 1] === 'a',
);

console.log('\nDesafio 1: ', desafio1);
console.log('\nDesafio 2: ', desafio2);
console.log('\nDesafio 3: ', desafio3);
