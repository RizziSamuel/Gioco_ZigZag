import Vector2D from './models/vector2D.js';

let conf = {
    BG_WIDTH: 1000,
    BG_HEIGHT: 500,
    GROUND_Y: 100,
    FPS: 60,
    PLAYER_SPEED: 3,
    PLAYER_SRC: ['../assets/giocatore1.png', '../assets/giocatore2.png', '../assets/giocatore3.png', '../assets/giocatore4.png'],
    SPINA_SRC: '../assets/spina.png',
    JUMP_FORCE: 10, // Forza del salto del giocatore
    GRAVITY: new Vector2D(0, 0.5) // Gravità che agisce sul giocatore
};

// Esportazione
export default conf;
