// Vector2D.js

class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    addTo(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
}

export default Vector2D;
