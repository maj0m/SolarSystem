var time = 0;
const timeScale = 0.1;
var planets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  Sun = new Planet(null, 200, 0, 0);
  Planet1 = new Planet(Sun, 50, 300, 0.3);
  Planet2 = new Planet(Sun, 30, 200, 0.2);
  Planet3 = new Planet(Sun, 80, 420, 0.1);
  Moon1 = new Planet(Planet3, 20, 100, -0.7);
  
  planets.push(Sun);
  planets.push(Planet1);
  planets.push(Planet2);
  planets.push(Planet3);
  planets.push(Moon1);
 
}

function draw() {
  background(20);
  time = millis()*timeScale;
  
  for(var i=0; i<planets.length; i++) {
    planets[i].orbit();
  }
 
}

class Planet {
  constructor(Parent, radius, dist, speed) {
    this.Parent = Parent;
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.radius = radius;
    this.dist = dist;
    this.speed = speed;
  }

  orbit() {
    if(this.Parent != null) {
      this.move();
      this.drawOrbit();
    }
    this.drawPlanet();
  }

  drawPlanet() {
    circle(this.x, this.y, this.radius);
  }

  drawOrbit() {
    push();
    noFill();
    stroke(100, 100, 100, 50);
    strokeWeight(4);
    ellipse(this.Parent.x, this.Parent.y, this.dist*2, this.dist*2);
    pop();
  }

  move() {
    this.x = this.Parent.x + cos(time*this.speed)*this.dist;
    this.y = this.Parent.y + sin(time*this.speed)*this.dist;
  }
}