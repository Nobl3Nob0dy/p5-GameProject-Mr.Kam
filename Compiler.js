// Create array for the boids
const flock = [];
// Set height and width of canvas
var w = window.innerWidth;
var h = window.innerHeight;
// Set player
var player;
// Set enemy
var enemy;
// Set obstacle
var obstacle;

function setup() {
    createCanvas(w, h);
    player = new player();
    enemy = new enemy();
    obstacle = new obstacle();
    if(isEnemy = true){
        for (let i = 0; i < 6; i++) {
            flock.push(new Boid());
        }
    }
}

function draw() {
    clear();
    // obstacle.render();
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
        boid.render();
    }
}