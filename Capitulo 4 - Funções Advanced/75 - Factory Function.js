//Função fabrica -> retorna objetos
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,
    fala() {
      return `${this.nome} está falando`;
    },
    IMC() {
      const indice = peso / altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa('Felipe', 'Serejo', 1.6, 47);
const p2 = criaPessoa('Ygor', 'Jesus', 1.78, 60);
console.log(p1);
console.log(p2);
console.log(p1.fala());
console.log(p1.IMC());
console.log(p2.fala());
console.log(p2.IMC());
