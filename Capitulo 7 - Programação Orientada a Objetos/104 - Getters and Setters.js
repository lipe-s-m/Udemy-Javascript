//cria um elemento de id unico
const _velocidade = Symbol('velocidade');

class Carro {
  constructor(marca, cor) {
    this.marca = marca;
    this.cor = cor;
    this[_velocidade] = 0;
  }
  get velocidade() {
    return this[_velocidade];
  }
  set velocidade(value) {
    if (value >= 100 || value <= 0) return;
    this[_velocidade] = value;
  }
  acelerar() {
    if (this[_velocidade] >= 100) return;
    console.log('Vrum vrum');
    this[_velocidade]++;
  }
  desacelerar() {
    if (this[_velocidade] <= 0) return;
    console.log('Desacelerando!!!');
    this[_velocidade]--;
  }
}

const carro1 = new Carro('Fiat', 'prata');
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.desacelerar();
console.log(carro1.velocidade);

carro1.velocidade = 49;
console.log(carro1.velocidade);
carro1.velocidade = 343;
console.log(carro1.velocidade);

//outro exemplo mais simples
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
  set nomeCompleto(value) {
    value = value.split(' ');
    this.nome = value.shift();
    this.sobrenome = value.join(' ');
  }
}

const p1 = new Pessoa('Felipe', 'Serejo');
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Felipe Serejo Monteiro';
console.log(p1.nomeCompleto);
