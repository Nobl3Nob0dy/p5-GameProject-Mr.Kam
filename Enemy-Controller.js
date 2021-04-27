function enemy() {
    // Says true if enemy is present
    this.isEnemy = true;
    // Set size of the object
    this.s = 50;
    // set starting direction
    this.xdirection = 1;
    this.ydirection = 1;
    // define start pos
    this.x = w - this.s;
    this.y = random(50, h - this.s);
    // gravity force
    this.gravity = 0.5;
    // velocity of player
    this.velocity = 0;
    this.show = function () {
        fill(color('blue'));
        rect(this.x, this.y, this.s);
    }
    this.update = function () {
        // add gravity to velocity
        this.velocity += this.gravity;
        // resistance, enviromental res
        this.velocity *= 0.9; 
        // update direction
        this.x = this.x + this.velocity * this.xdirection;
        this.y = this.y + this.velocity * this.ydirection;
        // set direction after bounceing
        if (this.x > w - this.s || this.x < this.s) {
            this.xdirection *= -1;
        }
        if (this.y > h - this.s || this.y < this.s){
            this.ydirection *= -1;
        }
    }
}