//Prototypes
//Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros
//geralmente metodos sao armazenados no prototypes para otimizar o desempenho
//e os atributos armazenados na funcao construtora
function Pessoa(nome, sobrenome, idade, peso) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.peso = peso;
}
Pessoa.prototype.falar = function () {
  console.log(`${this.nome} está falando!`);
};

const p1 = new Pessoa('Felipe', 'Serejo', 20, 47.5);
const p2 = Object.create(Pessoa.prototype, {
  nome: {
    value: 'Leonardo',
    writable: false,
    configurable: false,
    enumerable: true,
  },
  sobrenome: {
    value: 'DiCaprio',
    writable: false,
    configurable: false,
    enumerable: true,
  },
  idade: { value: 63, writable: true, enumerable: false },
  peso: { value: 71.2 },
});
console.log(p1);
console.dir(p2);

p1.falar();
