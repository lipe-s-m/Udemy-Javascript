// Atribuição via desestruturação (Objetos)

const pessoa = {
  nome: 'Felipe',
  // sobrenome: 'Monteiro',
  idade: 20,
  endereco: {
    rua: 'Rua Imaginária',
    numero: '120',
  },
};

const { nome, sobrenome = '', idade, endereco: enderecoCompleto } = pessoa;
console.log(nome, sobrenome, idade, enderecoCompleto);

//desestruturar objeto dentro do objeto
const {
  endereco: { rua, numero },
} = pessoa;
console.log(rua, 'nº', numero);
