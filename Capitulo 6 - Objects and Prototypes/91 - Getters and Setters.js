// Getters and Setters

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    get: () => {
      return estoque;
    },
    set: (value) => {
      if (typeof value !== 'number') {
        throw new TypeError('Bad request, invalid value!');
      }
      estoque = value;
    },
    enumerable: true, //se é exibido no for keys, objectKeys, log etc.
    configurable: false, //pode ser reconfigurada / deletada
  });
}

const p1 = new Produto('Blusa', 25, 3);
console.log(p1);
p1.estoque = '7';
p1.estoque = 1;
p1.estoque++;
console.log(p1.estoque);
