// Atribuição via desestruturação (Arrays)

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero, resto, terceiroNumero);

const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);

const matriz = [
  //     0  1  2
  /*0*/ [1, 2, 3],
  //     0  1  2
  /*1*/ [4, 5, 6],
  //     0  1  2
  /*2*/ [7, 8, 9],
];
console.log(matriz[2][1]);
const [linha1, linha2, linha3] = matriz;
console.log(linha1, linha2, linha3[0]);
