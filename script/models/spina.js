import conf from '../config.js';
import Vector2D from './vector2D.js';

class Spina {
    constructor(canvas, width, height) {
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.spinaImage = new Image();
        this.spinaImage.src = conf.SPINA_SRC;
        this.position = new Vector2D(canvas.width + 10, canvas.height - this.height); // Posizione y alla base del canvas
        this.speedX = 10;
        this.score = 0;
    }

    drawScore(ctx) {
        ctx.fillStyle = "black";
        ctx.font = "40px Arial";
        ctx.fillStyle = "blue";
        ctx.fillText("Score: " + this.score, 800, 30)
    }

    drawLevel(ctx) {
        let level;
        if (this.score < 100) {
            level = "Pippa";
        } else if (this.score >= 100 && this.score < 200) {
            level = "Intermedio";
        } else if (this.score >= 200 && this.score < 400) {
            level = "Bravo";
        } else if (this.score >= 400 && this.score < 104000) {
            level = "Gallo";
        } else if (this.score === 104000) {
            level = "Marcocheru";
        } else {
            level = "Livello non definito";
        }
    
        ctx.fillStyle = "red";
        ctx.font = "20px Arial";
        ctx.fillText("Livello: " + level, 10, 50);
    }

    draw(ctx) {
        ctx.drawImage(this.spinaImage, this.position.x, this.position.y, this.width, this.height);
        this.drawScore(ctx);
        this.drawLevel(ctx);
    }

    update() {
        this.position.x -= this.speedX;
        // reimposta posizione x e incrementa il punteggio
        if (this.position.x + this.width < 0) {
            this.position.x = this.canvas.width + 10; // Posizione x poco fuori dal bordo destro del canvas
            this.position.y = this.canvas.height - this.height; // Posizione y alla base del canvas
            this.score += 10;
        }
    }

    // Metodo per controllare le collisioni con il giocatore
    checkCollision(player) {
        if (player.position.x < this.position.x + this.width &&
            player.position.x + player.width > this.position.x &&
            player.position.y < this.position.y + this.height &&
            player.position.y + player.height > this.position.y) {
            // Collisione rilevata
            return true;
        }
        return false;
    
        
    }
}

//esportazione
export default Spina;
