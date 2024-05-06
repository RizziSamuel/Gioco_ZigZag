//importazioni
import conf from "../config.js";
import Player from "../models/Player.js";
import Spina from "../models/spina.js";

class Game {
    constructor(canvas, config) {
        this.config = config;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.floor = 216;
        document.addEventListener('keydown', this.keyboardPressedHandler.bind(this));
    }

    init() {
        this.canvas.style.position = 'absolute';
        this.canvas.width = this.config.BG_WIDTH;
        this.canvas.height = this.config.BG_HEIGHT;
        this.canvas.style.backgroundImage = "url('" + this.config.BACKGROUND_IMG_SRC + "')";
        this.canvas.style.backgroundSize = "contain";
        
        this.player = new Player(this.canvas,50,50);
        this.spina = new Spina(this.canvas, 50, 50);
    }
    

    update() {

        this.player.update();
        this.spina.update();
        
        if (this.player.checkCollision(this.spina)) {
            window.close();
            //console.log("G(ay)M Over");
        }
    
        // salto del giocatore se lo spazio è premuto
        
    }
    

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.ctx);
        this.spina.draw(this.ctx);
    }

    keyboardPressedHandler(event) {
        if (event.key === 'w' || event.key === ' ') {
            this.player.jump();
        }
    }


}

export default Game;
