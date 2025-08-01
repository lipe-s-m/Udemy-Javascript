//consumindo uma api usando observables

const axios = require('axios');
const { Observable } = require('rxjs');
const { map } = require('rxjs/operators');

function http(url) {
  return new Observable((subscriber) => {
    axios
      .get(url)
      .then((data) => {
        subscriber.next(data);
      })
      .then(() => subscriber.complete())
      .catch((err) => {
        throw err;
      });
  });
}

const obs$ = http('http://localhost:3001/films');

console.log('-----------');

function getTitulo() {
  obs$
    .pipe(map((response) => response.data))
    .pipe(map((dataArray) => dataArray.map((element) => element.Title)))
    .subscribe((dataTitle) => console.log(dataTitle));
}

function getFullData() {
  obs$.pipe(map((response) => response.data)).subscribe((data) => console.log(data));
}

getFullData();
console.log('-----------');
getTitulo();
