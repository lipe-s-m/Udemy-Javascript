/* eslint-disable no-unused-vars */
//metodos e atributos estaticos sao membros que pertencem a uma classe,
//eles nao precisam (e nem devem) ser instanciados por um objeto para ser utilizado
//os metodos sao como se fosse literalmente uma funcao dentro de uma classe
//e as variaveis sao como se fossem atributos globais a todos os objetos daquela classe
//nao referencia um objeto. mas sim à classe

//Métodos / atributos privados = começam com um # no inicio do nome, exemplo: #contador, #verificarCPF

class Fabrica {
  #contadorLocal;
  constructor(nome) {
    this.nomeFabrica = nome;
    this.#contadorLocal = 0;
  }
  static #contadorGlobal = 0;

  static exibirQuantidadeCarrosGlobal() {
    console.log(`--- Possuímos ${this.#contadorGlobal} criados em todas as nossas fábricas ---`);
  }
  exibirQuantidadeCarrosLocal() {
    console.log(`--- Possuímos ${this.#contadorLocal} criados em todas na fábrica ${this.nomeFabrica} ---`);
  }
  criarCarro(marca, cor) {
    this.#contadorLocal++;
    Fabrica.#contadorGlobal++;
    console.log(`${marca} ${cor} foi criado na fábrica ${this.nomeFabrica}!`);
    return { marca: marca, cor: cor };
  }
}

const fabrica1 = new Fabrica('Fabrica Volta Redonda');
fabrica1.exibirQuantidadeCarrosLocal();
const carro1 = fabrica1.criarCarro('Corolla', 'Branco');
const carro2 = fabrica1.criarCarro('Siena', 'Vinho');
const carro3 = fabrica1.criarCarro('Kwid', 'Prata');
fabrica1.exibirQuantidadeCarrosLocal();

console.log();

const fabrica2 = new Fabrica('Fabrica Nova Iguaçu');
const carro4 = fabrica2.criarCarro('BMW', 'Azul Marinho');
const carro5 = fabrica2.criarCarro('Lamborguini', 'Preta');
const carro6 = fabrica2.criarCarro('Ferrari', 'Vermelha');
const carro7 = fabrica2.criarCarro('Camaro', 'Amarelo');
fabrica2.exibirQuantidadeCarrosLocal();
Fabrica.exibirQuantidadeCarrosGlobal();
