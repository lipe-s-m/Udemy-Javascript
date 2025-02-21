function* geradora() {
  yield 'Valor 1';
  yield 'Valor 2';
  yield 'Valor 3';
  yield 'Valor 4';
}

const g1 = geradora();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

function* geradora2() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
function* geradora3() {
  yield* geradora2();
  yield 5;
  yield 6;
  yield 7;
}
const g3 = geradora3();
for (const value of g3) {
  console.log(value);
}
