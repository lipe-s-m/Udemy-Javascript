class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }
    this.ligado = true;
    console.log(`${this.nome} ligou`);
  }
  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado`);
      return;
    }
    this.ligado = false;
    console.log(`${this.nome} desligou`);
  }
  status() {
    if (this.ligado) {
      console.log(`${this.nome} está ligado`);
      return;
    }
    console.log(`${this.nome} está desligado`);
  }
  tocarMusica(musica) {
    if (!this.ligado) {
      console.log(`Não foi possível tocar musica pois ${this.nome} está desligado`);
      return;
    }
    console.log(`${this.nome} está tocando a música ${musica}`);
  }
}

class Smartphone extends Dispositivo {
  constructor(nome, cor) {
    super(nome);
    this.cor = cor;
  }
  status() {
    if (this.ligado) {
      console.log(`O celular ${this.nome} é da cor ${this.cor} e está ligado`);
      return;
    }
    console.log(`O celular ${this.nome} é da cor ${this.cor} e está desligado`);
  }
}
class LampadaColorida extends Dispositivo {
  constructor(nome, cor = 'Padrão') {
    super(nome);
    this.cor = cor;
  }
  ligar(cor = this.cor) {
    if (this.ligado) {
      this.cor = cor;
      console.log(`${this.nome} trocou para a cor ${this.cor}`);
      return;
    }
    this.cor = cor;
    this.ligado = true;
    console.log(`${this.nome} ligou na cor ${this.cor}`);
  }
}

const celular = new Smartphone('Motorola', 'Vermelho');
celular.status();
celular.ligar();
celular.tocarMusica('Grande é o Senhor');
celular.status();
celular.desligar();
celular.tocarMusica('Ele é exaltado');

console.log();

const lampada = new LampadaColorida('Lampada');
lampada.ligar();
lampada.ligar('Azul');
lampada.desligar();
lampada.desligar();
