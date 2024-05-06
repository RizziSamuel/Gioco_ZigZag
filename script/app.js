//importazioni
import Game from './logic/game.js';
import conf from './config.js';

let canvas = document.getElementById('board');


let g = new Game(canvas, conf);

g.init();

function runGame( ) {
    g.update();
    g.draw();
    requestAnimationFrame(runGame);
}

window.onload = runGame;
