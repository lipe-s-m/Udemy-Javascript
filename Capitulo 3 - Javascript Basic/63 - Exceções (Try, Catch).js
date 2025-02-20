// Lançar exceções caso aconteça algum erro

//Erro de referencia (variavel nao existe)
try {
  // eslint-disable-next-line no-undef
  console.log(naoExisto);
  // eslint-disable-next-line no-unused-vars
} catch (error) {
  console.log('Esse atributo não existe!');
}
console.log('\n ------------ \n');

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('X e Y precisam ser numeros!'); // o Erro deve aparecer apenas para o Backend
  }
  return x + y;
}

try {
  console.log(soma(1, 3));
  console.log(soma(1, 'oi'));
  // eslint-disable-next-line no-unused-vars
} catch (error) {
  // console.log(error);
  console.log('Insira apenas números!');
}
