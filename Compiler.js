// Create array for the boids
const flock = [];
// Set height and width of canvas
var w = window.innerWidth;
var h = window.innerHeight;
// Set player
var player;
// Set enemy
var enemy;

function setup() {
    createCanvas(w, h);
    player = new player();
    enemy = new enemy();
    for (let i = 0; i < 50; i++) {
        flock.push(new Boid());
    }
}

function draw() {
    background(51);
    player.show();
    player.update();
    if (keyIsDown(87)){
        player.up();
    }
    if (keyIsDown(65)){
        player.left();
    }
    if (keyIsDown(68)){
        player.right();
    }
    if (keyIsDown(83)){
        player.down();
    }
    enemy.show();
    enemy.update();
    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}