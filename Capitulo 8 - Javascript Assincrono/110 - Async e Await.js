//Async permite o uso do await,
//o await faz com que o codigo aguarde o retorno da promise para continuar sua execução
//retornando o valor final ou lançando um erro.

function rand(min = 0, max = 3) {
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

async function executarPromises() {
  try {
    const promise1 = await gerarPromessa('Sou a 1º Promise!', rand());
    console.log(promise1);

    const promise2 = await gerarPromessa('Sou a 2º Promise!', rand());
    console.log(promise2);
    const promiseErro = await gerarPromessa(400, rand());
    console.log(promiseErro);

    const promise3 = await gerarPromessa('Sou a 3º Promise!', rand());
    console.log(promise3);
  } catch (error) {
    console.log(error);
  }
}

executarPromises();
