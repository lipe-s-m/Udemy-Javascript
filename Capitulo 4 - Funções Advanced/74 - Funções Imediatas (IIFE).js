//IIFE
//sao funcoes que sao executadas instantaneamente
const teste = 'teste global';
(function (nome, sobrenome) {
  const teste = 'teste dentro da IIFE';
  console.log(teste);

  function criaNome(nome) {
    return `${nome} ${sobrenome}`;
  }
  function falaNome() {
    console.log(criaNome(nome));
  }
  falaNome();
})('Felipe', 'Serejo');

console.log(teste);
