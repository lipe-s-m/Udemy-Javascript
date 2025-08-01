//promises é um objeto que representa o resultado de uma operação assincrona q sera concluida no futuro,
//podendo ser resolvida (quando a operação é concluida), ou rejeitada (qnd a operação falha)

function rand(min = 1, max = 4) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function conectarBanco(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(new TypeError('Bad Request Value'));
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

conectarBanco('Conectando ao Bando de Dados', rand(1, 2))
  .then((result) => {
    console.log(result);
    return conectarBanco('Buscando dados no Bando', rand(1, 4));
  })
  .then((result) => {
    console.log(result);
    return conectarBanco('Tratando os dados obtidos', rand(1, 3));
  })
  .then((result) => {
    console.log(result);
    return conectarBanco(1111, rand(1, 3));
  })
  .catch((error) => {
    console.log('ERRO: ', error);
  })
  .finally(() => {
    console.log(conectarBanco('Exibindo os dados pros usuarios', rand())); //irá retornar uma promise pendente de resolução
  });

//
