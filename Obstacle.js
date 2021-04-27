function obstacle() {
    // Set position to random
    this.x = random(w);
    this.y = random(h);
    this.show = function() {
        fill(127);
        translate(width * 0.5, height * 0.5);
        polygon(this.x, this.y, 8, 20);
        pop();
    }
}