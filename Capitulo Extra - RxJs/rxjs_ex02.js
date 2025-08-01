//criando um observable

const { Observable } = require('rxjs');

const obs$ = new Observable((subscriber) => {
  subscriber.next('Eu sou a primeira string');
  subscriber.next('Eu sou a segunda string');
  setTimeout(() => {
    subscriber.next('aguardando ultima string...');
  }, 1000);
  setTimeout(() => {
    subscriber.next('Eu sou a ultima string...');
  }, 3000);

  //um observable pode retornar diferentes tipos de dados
  subscriber.next(true);
  subscriber.next({ nome: 'felipe', idade: 20 });

  //um observable pode terminar com sucesso ou com erro!
  setTimeout(() => {
    const numero = Math.random();
    subscriber.next(numero);
    if (numero > 0.5) {
      subscriber.complete();
    } else {
      throw 'Falha!!! Terminou com erro!';
    }
  }, 4000);
});

obs$.subscribe(
  (response) => console.log(response),
  (err) => console.log(err),
  () => console.log('Sucesso! Terminou sem erro!'),
);
