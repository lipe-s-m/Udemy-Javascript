//Função construtora -> retorna objetos
//parecida com classes

function Pessoa(nome, pessoa) {
  this.nome = nome;
  this.pessoa = pessoa;
  this.falar = function () {
    console.log(`${nome} está falando`);
  };
}

const p1 = new Pessoa('Felipe', 'Serejo');
const p2 = new Pessoa('Thiago', 'Almada');
console.log(p1);
console.log(p2);

p1.falar();
