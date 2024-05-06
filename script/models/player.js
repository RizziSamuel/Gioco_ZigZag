import conf from '../config.js';
import Vector2D from './vector2D.js';

class Player {
    constructor(canvas, width, height) {
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.images = [];
        this.currentImageIndex = 0;
        this.ground = canvas.height - this.height; // Posizione del suolo
        this.position = new Vector2D(100, this.ground);
        this.velocity = new Vector2D(0, 0);
        this.loadImages();
        this.canJump = true;
    }

    checkCollision(spina) {
        // Calcola le coordinate dei bordi del giocatore
        let playerLeft = this.position.x;
        let playerRight = this.position.x + this.width;
        let playerTop = this.position.y;
        let playerBottom = this.position.y + this.height;

        // Calcola le coordinate dei bordi della spina
        let spinaLeft = spina.position.x;
        let spinaRight = spina.position.x + spina.width;
        let spinaTop = spina.position.y;
        let spinaBottom = spina.position.y + spina.height;

        // Controlla se c'è una collisione
        if (playerRight > spinaLeft && playerLeft < spinaRight && playerBottom > spinaTop && playerTop < spinaBottom) {
            return true; // Collisione rilevata
        }

        return false; // Nessuna collisione
    }

    loadImages() {
        for (let src of conf.PLAYER_SRC) {
            let img = new Image();
            img.src = src;
            this.images.push(img);
        }
    }

    jump() {
        if (this.canJump) {
            // Imposta la velocità verticale per far saltare il giocatore
            this.velocity.y = -conf.JUMP_FORCE;
            this.canJump = false; // Disabilita il salto fino a quando il giocatore non tocca il suolo di nuovo
            this.changeImageOnJump();
        }

    }

    changeImageOnJump() {
        this.currentImageIndex++;
        if (this.currentImageIndex >= this.images.length) {
            this.currentImageIndex = 0;
        }
    }

    

    update() {
        // Aggiorna la posizione del giocatore durante il salto
        this.position.addTo(this.velocity);
        this.velocity.addTo(conf.GRAVITY); // Aggiungi la gravità per far scendere il giocatore

        // Se la posizione y del player va sotto il terreno
        if (this.position.y > this.ground) {
            this.position.y = this.ground; // Riporta il player al livello del terreno
            this.velocity.y = 0; // Imposta la velocità sull'asse y a 0
            this.canJump = true; // Abilita il salto
        }
    }

    draw(ctx) {
        ctx.drawImage(this.images[this.currentImageIndex], this.position.x, this.position.y, this.width, this.height);
    }
}

export default Player;
