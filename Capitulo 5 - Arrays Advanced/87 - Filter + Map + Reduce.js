// Filter + Map + Reduce

//retorne a soma do dobro de todos os numeros pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const result = numeros
  .filter((numero) => numero % 2 === 0)
  .map((numero) => numero * 2)
  .reduce((ac, numero) => (ac += numero));

console.log(result);
