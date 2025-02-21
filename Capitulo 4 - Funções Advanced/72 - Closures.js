//Closures
//é a capacidade de uma função acessar variáveis do seu escopo léxico mesmo após o escopo original ter sido encerrado.
function criarContador() {
  let count = 0; //Escopo lexico

  return function () {
    return ++count; //closure
  };
}

const contador = criarContador();

console.dir(contador());
console.dir(contador());
console.dir(contador());
console.dir(contador());

console.log('------------- \n');

//exemplo mais complexo

function criarUsuario(nome, senha) {
  let autentication = false;

  return {
    login: function (senhaEnviada) {
      if (senhaEnviada !== senha) {
        console.log(`Senha incorreta!`);
        return;
      }
      autentication = true;
      console.log(`--- Bem vindo, ${nome} ---`);
      return;
    },
    logout: function () {
      autentication = false;
      console.log(`--- Usuário ${nome} desconectado! ---`);
    },
    status: function () {
      console.log(`${nome} está ${autentication ? 'Logado' : 'Deslogado'}`);
    },
  };
}

const user1 = criarUsuario('Felipe', 'senha123');
user1.status();
user1.login('senhaErrada');
user1.login('senha123');
user1.status();
user1.logout();
user1.status();
