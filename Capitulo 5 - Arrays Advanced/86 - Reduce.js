// Reduce
// Itera sobre um array retorna um elemento (numero, string, objeto, array etc.)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//retorne o total dos numeros somados:
const totalNumeros = numeros.reduce((acumulador, numero) => {
  return (acumulador += numero);
}, 0);
console.log('Total: ' + totalNumeros);

//retorna a quantidade de numeros inpares
const quantidadeImpar = numeros.reduce((acumulador, numero) => {
  if (numero % 2 !== 0) {
    acumulador++;
  }
  return acumulador;
}, 0);
console.log('Quantidade de impar: ' + quantidadeImpar);

// Para cada elemento:
const pessoas = [
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Luiz', age: 62 },
  { name: 'Letícia', age: 19 },
  { name: 'ROSANA', age: 32 },
  { name: 'Wallace', age: 47 },
];

// Desafio 1: Retorne a pessoa mais velha
const pessoaMaisVelha = pessoas.reduce((acumulador, pessoa) => {
  if (pessoa.age > acumulador.age) {
    return pessoa;
  }
  return acumulador;
});

console.log(pessoaMaisVelha);
