var particles = [];
var num;
var speed = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noiseSeed(1);

	num = windowWidth * windowHeight / 1000;

	for (let i = 0; i < num; i++) {
		let v = createVector(random(width), random(height));
		particles.push(v);
	}
	stroke(255);
	strokeWeight(1);
}

function draw() {
	background(0, 10);

	stroke(66, 133, 244);
	for (var i = 0; i < num; i ++) {
		let p = particles[i];
		point(p.x, p.y);
		let angle = TAU * noise(p.x * 0.01, p.y * 0.01);
		p.x += cos(angle);
		p.y += sin(angle);

		if (p.x < 0 || p.y < 0 || p.x > width || p.y > height) {
			p.x = random(width);
			p.y = random(height);
		};
	}
}