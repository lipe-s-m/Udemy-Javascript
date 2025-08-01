//subscrevendo em um observable usando o from

const { from } = require('rxjs');
const { map } = require('rxjs/operators');
const fromArray = require('./rxjs_ex04');

const notas = [8, 5, 10, 7, 3, 6.9, 10, 0, 7.3];
const media = 7;

const obs$ = from(notas);

obs$.pipe(map((nota) => (nota >= media ? 'Aprovado' : 'Reprovado'))).subscribe((status) => {
  console.log(status);
});

console.log('------------------');

const obs$2 = fromArray();
obs$2.pipe(map((nota) => (nota >= media ? 'Aprovado' : 'Reprovado'))).subscribe((status) => {
  console.log(status);
});
