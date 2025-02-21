//Como ja possui conhecimento em POO pois estudei essa materia na faculdade utilizando Java
// nao darei tantos detalhes no conceito da poo,
//darei mais foco nas peculiaridades do JS com poo e na sintaxe

class Pessoa {
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  falar() {
    console.log(`${this.nome} está falando`);
  }
  comer() {
    console.log(`${this.nome} está comendo`);
  }
}

const p1 = new Pessoa('Felipe', 'Serejo', 20);
console.log(p1);
p1.falar();
p1.comer();
