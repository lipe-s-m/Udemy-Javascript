// Utilizando finnaly

function obterHora(data = new Date()) {
  if (!(data instanceof Date)) {
    // console.log('Não é data');
    throw new TypeError('Insira uma instância de Date');
  }
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}
try {
  console.log(obterHora(new Date()));
  console.log(obterHora());
  console.log(obterHora('11/12/2024'));
} catch (error) {
  console.log(error);
} finally {
  console.log('---------');
}
