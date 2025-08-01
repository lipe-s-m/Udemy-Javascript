//subscrevendo em um observable usando o interval

const { interval } = require('rxjs');

const obs$ = interval(1000);

const sub1 = obs$.subscribe((num) => {
  console.log(num);
});

const sub2 = obs$.subscribe((num) => {
  console.log(num ** 2 + '\n--------------');
});

setTimeout(() => {
  sub1.unsubscribe();
  desinscreverSub(sub2, 4000);
}, 6000);

function desinscreverSub(sub, segundos) {
  setTimeout(() => {
    sub.unsubscribe();
  }, segundos);
}
