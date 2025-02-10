//                0        1         2        3       4
const nomes = ['Felipe', 'Maria', 'Lucas', 'João', 'Lívia'];

// nomes.pop();
// const removidos = nomes.splice(3, 2)

// nomes.splice(indice atual, indice remover, elem1, elem2, elem3...)
let removidos = nomes.splice(-3, Number.MAX_VALUE)
console.log(nomes + " - Removidos: " + removidos);

nomes.splice(1, 0, 'NomeTemporario', 'Roger', 'Bruna');
removidos = nomes.splice(1, 1, 'NomeDefinitivo')
console.log(nomes, removidos);

