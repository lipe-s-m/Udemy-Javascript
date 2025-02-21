//arguments
//atribui todos os parametros em uma variavel arguments
//esses parametros podem ou nao estarem explicitos na funcao
function funcaoArguments() {
  let acumulador = 0;
  for (const valor of arguments) {
    acumulador += valor;
  }
  return acumulador;
}

const resultArgumentos = funcaoArguments(1, 2, 3, 4);
console.log(resultArgumentos);

//destructuring
function funcaoDestructuring({ nome, sobrenome, idade }) {
  console.log(
    `Sou ${nome}, meu sobrenome é ${sobrenome} e tenho ${idade} anos`,
  );
}
funcaoDestructuring({ nome: 'Felipe', idade: 20, sobrenome: 'Serejo' });
const obj = { nome: 'Luiz', sobrenome: 'Roberto', idade: 48 };
funcaoDestructuring(obj);

//...rest operator
function conta(operador, acumulador, ...numeros) {
  switch (operador) {
    case '+':
      for (const numero of numeros) {
        acumulador += numero;
      }
      break;
  }
  return acumulador;
}

const resultConta = conta('+', 0, 1, 2, 3, 4, 5);
const resultConta2 = conta('+', 0, 1, 5, 8, 4, 5);
console.log(resultConta);
console.log(resultConta2);
