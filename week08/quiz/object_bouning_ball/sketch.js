var balls = [];

function setup() {
  createCanvas(400, 400);
  // create a Ball class to make Ball object by calling new command.

  for (var i = 0; i < 3; i++) {
    balls[i] = new Ball(100 * i, height, 20);
  }
  // ball1 = new Ball(100, height, 30);
  // ball2 = new Ball(200, height, 20);
  // ball3 = new Ball(300, height, 30);

  // ball1 = {
  // ball1 = {
  //   x:width/2,
  //   y:height,
  //   size: 10,
  //   move: function() {
  //     this.x = this.x + Math.random() - 0.5;
  //     this.y = this.y - Math.random()*0.5;
  //   },
  //   display: function() {
  //     ellipse(this.x, this.y, this.size, this.size);
  //   }
  // }
}

function draw() {
  background(100);
  balls[i].move();
  balls[i].display();

  // ball1.move();
  // ball1.display();
  // ball2.move();
  // ball2.display();
  // ball3.move();
  // ball3.display();
}

function Ball(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.move = function() {
    this.x = this.x + Math.random() - 0.5;
    this.y = this.y - Math.random() * 0.5;
  };
  this.display = function () {
    ellipse(this.x, this.y, this.size, this.size);
  };
}
