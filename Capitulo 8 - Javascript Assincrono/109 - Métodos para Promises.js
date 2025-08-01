// Promise.all, Promise.race, Promise.resolve, Promise.reject

function rand(min = 1, max = 4) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function gerarPromessa(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject(new TypeError('Bad Value Request'));
        return;
      }
      resolve(msg);
    }, tempo);
  });
}
//podemos fazer um array de promises, ou um array que contem promises e outros valores tb
const promises1 = [
  'Valor 1',
  gerarPromessa('Promise 1', 1000),
  gerarPromessa('Promise 2', 1500),
  gerarPromessa('Promise 3', 500),
  12345,
  // gerarPromessa(4, 2600),
];

//no Promise.all, espera todas as promises serem resolvidas, e retorna os valores num array, (sem ordem)
//se alguma operação falhar, retorna erro e vai pro catch, sem retornar nenhum valor mesmo que tenham operaçoes que tenham sido concluidas com sucesso
Promise.all(promises1)
  .then((valor) => {
    console.log(valor);
  })
  .catch((error) => {
    console.log('Erro: ', error);
  });

const promises2 = [
  gerarPromessa('Promise 1', rand(3, 5)),
  gerarPromessa('Promise 2', rand(3, 5)),
  gerarPromessa('Promise 3', rand(3, 5)),
  gerarPromessa(333, rand(3, 5)), //erro
  gerarPromessa('Promise 4', rand(3, 5)),
];

//no Promise.race, espera a primeira promise ser resolvida, e retorna o valor dela (se for sucesso vai pro then, se for falha pro catch)
Promise.race(promises2)
  .then((response) => {
    console.log('A primeira a ser resolvida foi: ', response);
  })
  .catch((error) => {
    console.log(error);
  });

//Promise.resolve: retorna uma promise concluida, indo diretamente pro then
function baixaPagina() {
  const emCache = true;

  if (emCache) return Promise.resolve('Pagina em Cache');
  return gerarPromessa('Página acabou de ser baixada!', 5500);
}

baixaPagina()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
