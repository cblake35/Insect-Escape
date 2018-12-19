
//hero constructor
class Hero {
  constructor() {
    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = (this.jump * 5) + 70;
    this.x = this.startX;
    this.y = this.startY;
    this.sprite = 'images/char-boy.png';
    this.victory = false;
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
/* handles the the movement and parameters the player sprite can travel within
the canvas */
  handleInput() {
    if(event.keyCode == 37) {
      if (this.x > 0) {
        this.x -= this.step;
    }}
    else if(event.keyCode == 38) {
      if (this.y > 0) {
        this.y -= this.jump;
    }}
    else if(event.keyCode == 39) {
      if (this.x < (this.step * 4)) {
        this.x += this.step;
    }}
    else if(event.keyCode == 40) {
      if (this.y < ((this.jump * 5))) {
        this.y += this.jump;
    }}
  }
  //resets the position to the designated starting point.
  reset() {
    this.x = this.startX;
    this.y = this.startY;
  }
//checks for collisions
  update() {
    for (let enemy of allEnemies) {
      //check collision
        if (this.y === enemy.y && (enemy.x + enemy.step/2 > this.x &&
        enemy.x < this.x + this.step/2)) {
          this.reset();
        }
    }
      //check win
        if (this.y === -13) {
          this.victory = true;
        }
  }
}

const player = new Hero();


// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y + 70;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step * 5;
    this.resetX = -this.step;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
};

//enemies in the game with different x, y and speed values to make the game
//more dynamic.
const bug1 = new Enemy((-101 * 2), 0, 350);
const bug2 = new Enemy(-101, 83, 345);
const bug3 = new Enemy((-101 * -3), (83 * 2), 380);
const bug4 = new Enemy(-101, (83 * 3), 355);
const bug5 = new Enemy((-101 * -2), 0, 335);
const bug6 = new Enemy((-101 * 4), (83 * 3), 325);
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3, bug4, bug5, bug6);


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //if the enemy is still within boundaries
    if(this.x < (this.step * 5)) {
      this.x += this.speed * dt
      //increment x by speed * dt
    } else {
      //reset position to this.x
      this.x = this.resetX;
    }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[event.keyCode]);
});
