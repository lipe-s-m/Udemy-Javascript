//Foreach

//apenas iterar sobre arrays, mais otimizado

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//for:
for (let i of numeros) {
  console.log(i);
}
console.log('-----------');

//foreach
numeros.forEach((numero) => console.log(numero));
