//trabalhando com setInterval e setTimeout

function obterHora(data = new Date()) {
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
  });
}

const intervalo = 1000;
const tempoDoTimer = 6000;

const timer = setInterval(() => {
  console.log(obterHora());
}, intervalo);

setTimeout(() => {
  clearInterval(timer);
}, tempoDoTimer);

setTimeout(() => {
  console.log('Acabou!');
}, tempoDoTimer + 500);
