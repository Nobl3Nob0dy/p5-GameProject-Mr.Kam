function player() {
    // define start pos
    this.x = w/2;
    this.y = h/2;
    // gravity force
    this.gravity = 0.4;
    // movement force
    this.lift = -5;
    this.move = -15;
    // velocity of player
    this.velocity = 0;
    // show object
    this.show = function () {
        fill(color('red'));
        ellipse(this.x, this.y, 50, 50);
    }
    this.update = function () {
        // add gravity add to velocity
        this.velocity += this.gravity;
        // direction of grav
        this.y += this.velocity;
        // resistance, enviromental res
        this.velocity *= 0.9; 
        // stop player from clipping through ground
        if (this.y > h-25) {
            this.y = h-25;
            this.velocity = 0;
        }
        if (this.y < 25) {
            this.y = 25;
            this.velocity = 0;
        }
        if (this.x > w-25) {
            this.x = w-25;
            this.velocity = 0;
        }
        if (this.x < 25) {
            this.x = 25;
            this.velocity = 0;
        }

    }
    this.up = function () {
        // action when a player jumps
        this.velocity += this.lift;
    }
    this.left = function () {
        this.x += this.move;
    }
    this.right = function () {
        this.x -= this.move;
    }
    this.down = function () {
        this.velocity -= this.lift;
    }
}