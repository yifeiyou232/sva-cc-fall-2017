function Ball(loc, size) {
  this.location = loc;
  this.size = size;

  this.velocity = createVector(0,0);
  this.acceleration = createVector(0.0, 0.0);

  this.applyForce = function (force) {
    force.div(this.size);
    this.acceleration.add(force);
  }

  this.update  = function(){
    //.copy just get the value, not changing the velocity value
    this.friction = this.velocity.copy();
    this.friction.mult(-1);
    this.friction.normalize();
    this.friction.setMag(0.005);
    this.velocity.add(this.friction);
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.bounce();
    this.acceleration.mult(0);
  }

  this.display = function(){
    noStroke();
    fill(random(250),150,250);
    ellipse (this.location.x, this.location.y, this.size, this.size);
  }

  this.bounce = function(){
    //if (thi.location.x > width || this.location.)
    var left = this.location.x - this.size/2;
    var right = this.location.x + this.size/2;
    var top = this.location.y - this.size/2;
    var bottom = this.location.y + this.size/2;

    if (left < 0) {
      this.location.x = 0 + this.size/2;
      this.velocity.x *= -1;
    } else if (right > width) {
      this.location.x = width - this.size/2;
      this.velocity.x *= -1;
    }

    if (top < 0) {
      this.location.y = 0 + this.size/2;
      this.velocity.y *= -1;
    } else if (bottom > height) {
      this.location.y = height - this.size/2;
      this.velocity.y *= -1;
    }
  }

}
