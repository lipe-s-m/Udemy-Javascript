//trava apenasa atributos / metodos selecionados
// Object.defineProperty = define 1 atributo / metodo
// Object.defineProperties = define mais que um atributo / metodo

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  Object.defineProperty(this, 'estoque', {
    value: estoque, //valor
    enumerable: true, //se é exibido no for keys, objectKeys, log etc.
    writable: false, //pode ser alterada
    configurable: false, //pode ser reconfigurada / deletada
  });
  Object.defineProperties(this, {
    nome: {
      value: nome,
      enumerable: true,
      writable: true,
      configurable: false,
    },
    preco: {
      value: preco,
      enumerable: false,
      writable: false,
      configurable: false,
    },
  });
}

const p1 = new Produto('Calça', 30, 5);
p1.estoque = 40;
delete p1.estoque;
p1.nome = 'Nome Alterado';
console.log(p1);
console.log(Object.keys(p1));
