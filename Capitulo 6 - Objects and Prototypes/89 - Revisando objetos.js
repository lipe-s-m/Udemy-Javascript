// Constructor functions

// oque o this faz?
// This cria um objeto vazio, e se associa a ele,
// recebe os atributos / metodos na função que o implementou
// e a função retorna o this
// {} <- this,  function -> this;

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  Object.freeze(this); //congela um objeto, pra ele nao ser alterado (nao tao recomendado)
}

const p1 = new Pessoa('Felipe', 'Serejo');
const p2 = new Pessoa('Nao serei mudado', 'Sobrenome qualquer');
p2.nome = 'Alterando o nome';
console.log(p1);
console.log(p2);
