const EventEmitter = require('event');

class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, function (click) {
    console.log('um usuário clicou', click);
});

meuEmissor.emit(nomeEvento, 'na barra de rolagem');
meuEmissor.emit(nomeEvento, 'no botao ok');

let count = 0;
setInterval(() => {
    meuEmissor.emit(nomeEvento, 'no ok' + (cont++));
}, 1000);