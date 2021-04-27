class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.r = 6.0;
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxForce = 0.5;
        this.maxSpeed = 4;
    }

    edges() {
        if (this.position.x > width) {
            this.position.x = this.r;
        } else if (this.position.x < 0) {
            this.position.x = width - this.r;
        }
        if (this.position.y > height) {
            this.position.y = this.r;
        } else if (this.position.y < 0) {
            this.position.y = height - this.r;
        }
    }

    align(boids) {
        let perceptionRadius = 100;
        let steering = createVector();
        let total = 0;
        for (let player of boids) {
            let d = dist(
                this.position.x,
                this.position.y,
                player.position.x,
                player.position.y );
            if (player != this && d < perceptionRadius) {
                steering.add(player.velocity);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
            return steering;
        }
    }

    separation(boids) {
        let perceptionRadius = 10;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other != this && d < perceptionRadius) {
                let diff = p5.Vector.sub(this.position, other.position);
                diff.div(d * d);
                steering.add(diff);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
            return steering;
        }
    }

    cohesion(boids) {
        let perceptionRadius = 10;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other != this && d < perceptionRadius) {
                steering.add(other.position);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
            return steering;
        }
    }

    flock(boids) {
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    render(boids) {
        // Draw a triangle rotated in the direction of velocity
        let theta = this.velocity.heading() + radians(90);
        fill(127);
        stroke(200);
        push();
        translate(this.position.x, this.position.y);
        rotate(theta);
        beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
        endShape(CLOSE);
        pop();
    }
}