//criando um metodo from

const { Observable } = require('rxjs');

const notas = [8, 5, 10, 7, 3, 6.9, 10, 0, 7.3];

function fromArray(array = new Array()) {
  return Observable((subscriber) => {
    array.forEach((element) => {
      subscriber.next(element);
    });
  });
}

const observable = fromArray(notas);

observable.subscribe((response) => console.log(response));

module.exports = fromArray;
